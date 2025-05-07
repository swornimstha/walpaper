import React, { useState, useEffect } from 'react';
import WallpaperCard from './WallpaperCard';
import axios from 'axios';
import './WallpaperList.css'; // Custom styles

const WallpaperList = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [query, setQuery] = useState("");

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
      <div className='wallpaper-list'>
        {wallpapers.map((wallpaper) => (
          <WallpaperCard key={wallpaper.id}{...wallpaper} />
        ))}

      </div>
    </div>
  );

};

export default WallpaperList;

