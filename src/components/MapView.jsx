import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Helper Function: Dynamic Pin Colors with raw SVGs
const getCustomPin = (status) => {
  let bgColor = 'bg-blue-600'; 
  let iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`;

  if (status?.toLowerCase().includes('certified') || status === 'Halal') {
    bgColor = 'bg-green-700'; 
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  } else if (status?.toLowerCase().includes('friendly')) {
    bgColor = 'bg-orange-500'; 
  }

  return L.divIcon({
    className: 'custom-pin',
    html: `<div class="${bgColor} w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-md hover:scale-110 transition-transform duration-200">
             ${iconSvg}
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

const userLocationIcon = L.divIcon({
  className: 'user-pin',
  html: `<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_0_4px_rgba(59,130,246,0.3)] animate-pulse"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

const MapController = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 14, { animate: true, duration: 1.5 });
    }
  }, [center, map]);
  return null;
};

const MapView = ({ restaurants, onSelectRestaurant, userLocation }) => {
  const defaultCenter = [60.1699, 24.9384]; 
  const currentCenter = userLocation || defaultCenter;

  return (
    <MapContainer 
      center={currentCenter} 
      zoom={12} 
      className="w-full h-full z-0" 
      zoomControl={true}
    >
      <MapController center={userLocation} />
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {userLocation && (
        <Marker position={userLocation} icon={userLocationIcon}>
          <Popup>You are here!</Popup>
        </Marker>
      )}
      
      {restaurants.map((restaurant, index) => {
        if (!restaurant.lat || !restaurant.lng) return null;

        return (
          <Marker
            key={index}
            position={[restaurant.lat, restaurant.lng]}
            icon={getCustomPin(restaurant.halal_status)}
            eventHandlers={{
              click: () => onSelectRestaurant(restaurant),
            }}
          >
            <Popup>
              <div className="font-sans min-w-[120px]">
                <h3 className="font-bold text-gray-900 leading-tight">{restaurant.name}</h3>
                <p className="text-xs text-gray-500 my-1">{restaurant.halal_status || 'Halal'}</p>
                <button 
                  onClick={() => onSelectRestaurant(restaurant)}
                  className="mt-2 text-xs bg-green-900 text-white px-2 py-1.5 rounded-md w-full hover:bg-green-800 font-medium"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;