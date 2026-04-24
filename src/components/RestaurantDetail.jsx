import React from 'react';
import { ArrowLeft, Utensils, Phone, Globe, MapPin, Clock } from 'lucide-react';

const RestaurantDetail = ({ restaurant, onBack }) => {
  if (!restaurant) return null;

  return (
    <div className="flex flex-col h-full animate-fade-in custom-scrollbar overflow-y-auto pb-8">
      <button 
        onClick={onBack} 
        className="mb-6 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 transition shadow-sm shrink-0"
      >
        <ArrowLeft size={18} />
      </button>
      
      <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md shrink-0">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-[#8b3d68] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide flex items-center space-x-1 shadow-md">
          <span>{restaurant.halal_status || 'Verified Halal'}</span>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{restaurant.name}</h2>
      <div className="flex items-center space-x-2 text-gray-500 mb-8 font-medium">
        <Utensils size={16} />
        <span>{restaurant.cuisine || 'Middle Eastern & Asian'}</span>
        <span>•</span>
        <span>$$</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Location Card */}
        <div className="bg-[#f4fcf7] p-5 rounded-3xl">
          <h4 className="text-xs font-bold text-gray-400 tracking-wider mb-3 uppercase flex items-center space-x-1">
            <MapPin size={14} />
            <span>Location</span>
          </h4>
          <p className="text-base text-gray-800 font-medium">{restaurant.address}</p>
          <p className="text-base text-gray-800 font-medium">{restaurant.city}, Finland</p>
        </div>
        
        {/* Hours & Contact Card */}
        <div className="bg-[#f8f9fa] p-5 rounded-3xl">
          <h4 className="text-xs font-bold text-gray-400 tracking-wider mb-3 uppercase flex items-center space-x-1">
            <Clock size={14} />
            <span>Hours & Contact</span>
          </h4>
          <p className="text-sm text-gray-800 font-medium mb-4">{restaurant.hours || 'Contact for hours'}</p>
          
          <div className="text-sm text-gray-500 space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>{restaurant.phone}</span>
            </div>
            {restaurant.website && (
              <a href={restaurant.website} target="_blank" rel="noreferrer" className="text-green-700 hover:text-green-900 font-medium transition flex items-center space-x-2">
                <Globe size={14} />
                <span>Visit Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;