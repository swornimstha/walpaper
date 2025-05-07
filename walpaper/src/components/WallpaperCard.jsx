import React from 'react';

const WallpaperCard = ({ id, url, thumb, onClick }) => {
  const handleOpenInNewTab = (event) => {
    event.stopPropagation(); // Prevent triggering the card's onClick
    window.open(url, '_blank');
  };

  return (
    <div className="wallpaper-card" onClick={onClick}>
      <img src={thumb} alt={`wallpaper-${id}`} />
      <button onClick={handleOpenInNewTab}>Download</button>
    </div>
  );
};

export default WallpaperCard;
