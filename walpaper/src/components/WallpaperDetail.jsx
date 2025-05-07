import React from 'react';
import './WallpaperDetail.css'; // Import the CSS file

const WallpaperDetail = ({ wallpaper, onClose }) => {
  if (!wallpaper) return null;

  const handleOpenImage = () => {
    window.open(wallpaper.url, '_blank');
  };
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <img src={wallpaper.thumb} alt={`wallpaper-${wallpaper.id}`} />
        <h3>Wallpaper Detail</h3>
        <p><strong>ID:</strong> {wallpaper.id}</p>
        <p><strong>Resolution:</strong> {wallpaper.resolution}</p>
        <p><strong>Views:</strong> {wallpaper.views}</p>
        <p><strong>Favorites:</strong> {wallpaper.favorites}</p>
        <p><strong>Tags:</strong> {wallpaper.tags.map((tag) => tag.name).join(', ')}</p>
        <button className="download-button" onClick={handleOpenImage}>Download</button>
      </div>
    </div>
  );
};

export default WallpaperDetail;

