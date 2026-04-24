import React from 'react';
import { Star } from 'lucide-react';

const RestaurantList = ({ restaurants, onSelectRestaurant }) => {
  if (restaurants.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>No restaurants found for this search or filter.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      {restaurants.map((restaurant, index) => (
        <div 
          key={index} 
          onClick={() => onSelectRestaurant(restaurant)}
          className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer group"
        >
          <div className="relative h-48 overflow-hidden bg-gray-200">
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-3 right-3 bg-[#0a4d3c] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md uppercase tracking-wider flex items-center shadow-sm">
              <span>{restaurant.halal_status || 'Halal'}</span>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-800 transition">{restaurant.name}</h3>
              <div className="bg-green-50 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center space-x-1">
                <Star size={12} className="fill-green-800" />
                <span>{(Math.random() * (5.0 - 4.0) + 4.0).toFixed(1)}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mb-4 font-medium">
              {restaurant.cuisine || 'Multi-Cuisine'} • {restaurant.city}
            </p>
            
            <div className="flex space-x-2">
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">{restaurant.cuisine || 'ASIAN'}</span>
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">DINING</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;