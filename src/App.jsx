import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MapView from './components/MapView';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import { useRestaurants } from './hooks/useRestaurants';

function App() {
  const { restaurants, isLoading, error } = useRestaurants();
  
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [userLocation, setUserLocation] = useState(null);

  const categories = ['All', 'Syrian', 'Bangladeshi', 'Turkish', 'Arab'];

  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Could not get your location. Please check browser permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((res) => {
      const matchesSearch = 
        res.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        res.city?.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesCategory = true;
      if (activeCategory !== 'All') {
        matchesCategory = res.cuisine?.toLowerCase().includes(activeCategory.toLowerCase());
      }

      return matchesSearch && matchesCategory;
    });
  }, [restaurants, searchTerm, activeCategory]);

  return (
    <div className="flex h-screen bg-[#f9fafb] font-sans overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col w-full">
        <Header 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onNearMeClick={handleNearMeClick} 
        />

        <div className="flex-1 flex flex-col-reverse md:flex-row overflow-hidden relative">
          
          <div className="w-full md:w-[45%] h-[50%] md:h-full p-4 md:p-8 overflow-y-auto bg-[#f8f9fa] border-t md:border-t-0 md:border-r border-gray-200 z-10 custom-scrollbar">
            {isLoading && (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-900"></div>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl font-medium">
                Error loading data: {error}
              </div>
            )}
            
            {!isLoading && !error && selectedRestaurant ? (
              <RestaurantDetail 
                restaurant={selectedRestaurant} 
                onBack={() => setSelectedRestaurant(null)} 
              />
            ) : (
              !isLoading && !error && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Top Halal Restaurants</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(category => (
                      <button 
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
                          activeCategory === category 
                            ? 'bg-green-900 text-white shadow-md' 
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <RestaurantList 
                    restaurants={filteredRestaurants} 
                    onSelectRestaurant={(restaurant) => setSelectedRestaurant(restaurant)}
                  />
                </div>
              )
            )}
          </div>

          <div className="w-full md:w-[55%] h-[50%] md:h-full relative z-0 bg-[#e5e7eb]">
            {!isLoading && !error && (
              <MapView 
                restaurants={filteredRestaurants} 
                onSelectRestaurant={(restaurant) => setSelectedRestaurant(restaurant)} 
                userLocation={userLocation}
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;