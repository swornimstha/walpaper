import React from 'react';
import './WallpaperCard.css';



const WallpaperCard = ({ id, url, thumb }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `wallhaven-${id}`;
    link.click();
  };

  return (
    <div className="wallpaper-card">
      <img src={thumb} alt={`wallpaper-${id}`} className='wallpaper-image' />
      <button className='download-button' onClick={handleDownload}>Download</button>
    </div>

  );
};


export default WallpaperCard;
