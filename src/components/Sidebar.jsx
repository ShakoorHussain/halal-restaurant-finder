import React from 'react';
import { Utensils, MoonStar, Heart, Settings, Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex w-64 bg-[#f4fcf7] h-screen p-6 flex-col justify-between border-r border-gray-200 shrink-0">
      <div>
        <h1 className="text-2xl font-bold text-green-900 mb-8">Verdant Halal</h1>
        
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Nordic Concierge</p>
          <p className="text-xs text-gray-400 mb-4">Halal Finder Finland</p>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 bg-green-100 text-green-900 px-4 py-3 rounded-xl font-medium">
              <Utensils size={18} />
              <span>Restaurants</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-600 hover:bg-green-50 px-4 py-3 rounded-xl font-medium transition">
              <MoonStar size={18} />
              <span>Mosques</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-600 hover:bg-green-50 px-4 py-3 rounded-xl font-medium transition">
              <Heart size={18} />
              <span>Favorites</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-600 hover:bg-green-50 px-4 py-3 rounded-xl font-medium transition">
              <Settings size={18} />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>

      <button className="bg-green-900 text-white w-full py-3 rounded-xl font-medium hover:bg-green-800 transition flex items-center justify-center space-x-2 shadow-md">
        <Plus size={18} />
        <span>Add Restaurant</span>
      </button>
    </div>
  );
};

export default Sidebar;