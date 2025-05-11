import React from 'react';
import { Download } from "lucide-react";
import "./WallpaperCard.css";

const WallpaperCard = ({ id, url, thumb, onClick }) => {
  const handleOpenInNewTab = (event) => {
    event.stopPropagation(); // Prevent triggering the card's onClick
    window.open(url, '_blank');
  };

  return (
    <div className="wallpaper-card" onClick={onClick}>
      <img src={thumb} alt={`wallpaper-${id}`} />
      <button className='download-button' onClick={handleOpenInNewTab} >
        <Download size={20} />
      </button>
    </div>
  );
};

export default WallpaperCard;
