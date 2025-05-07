import React, { useState, useEffect } from 'react';
import WallpaperCard from './WallpaperCard';
import axios from 'axios';
import './WallpaperList.css'; // Custom styles
import WallpaperDetail from './WallpaperDetail';

const WallpaperList = () => {

  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [wallpapers, setWallpapers] = useState([]);
  const [query, setQuery] = useState("");

  const handleWallpaperClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/wallpapers/${id}`);
      setSelectedWallpaper(response.data);
    } catch (error) {
      console.error("failed to fetch details:", error);
    }

  };

  useEffect(() => {
    const fetchWallpapers = () => {
      axios.get('http://localhost:5000/api/wallpapers', { params: { query } })
        .then((response) => setWallpapers(response.data))
        .catch((error) => console.error('Error fetching wallpapers:', error));
    };

    fetchWallpapers();
  }, [query]);



  return (
    <div className='wallpaper-container'>
      <input
        type="text"
        placeholder="Search wallpapers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {selectedWallpaper ? (
        <WallpaperDetail
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      ) : (
        <div className='wallpaper-list'>
          {wallpapers.map((wallpaper) => (
            <WallpaperCard key={wallpaper.id}{...wallpaper}
              onClick={() => handleWallpaperClick(wallpaper.id)}
            />
          ))}
        </div>
      )}


    </div>
  );
};

export default WallpaperList;

