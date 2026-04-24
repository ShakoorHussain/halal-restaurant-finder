import React from 'react';
import { Search, Navigation, User } from 'lucide-react';

const Header = ({ searchTerm, setSearchTerm, onNearMeClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 bg-white border-b border-gray-100 z-20 shadow-sm w-full gap-4 md:gap-0">
      
      <h1 className="md:hidden text-xl font-bold text-green-900 w-full text-center">Verdant Halal</h1>

      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#" className="text-green-900 border-b-2 border-green-900 pb-1">Discover</a>
        <a href="#" className="text-gray-400 hover:text-green-900 pb-1 transition">Favorites</a>
        <a href="#" className="text-gray-400 hover:text-green-900 pb-1 transition">Recent</a>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto justify-between md:justify-end">
        <div className="relative flex-1 md:w-64">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Helsinki..." 
            className="bg-gray-50 border border-gray-200 text-sm rounded-full pl-4 pr-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
        </div>
        
        <button 
          onClick={onNearMeClick}
          className="bg-green-900 text-white text-sm px-3 md:px-4 py-2 rounded-full font-medium hover:bg-green-800 flex items-center space-x-1 md:space-x-2 transition shadow-sm whitespace-nowrap"
        >
          <Navigation size={14} className="fill-current" />
          <span>Near Me</span>
        </button>
        
        <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition shrink-0">
          <User size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Header;