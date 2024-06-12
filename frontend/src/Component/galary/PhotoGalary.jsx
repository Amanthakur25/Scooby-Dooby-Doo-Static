import React from 'react';
import dog1 from '../../assets/Dog1Image.webp';
import dog2 from '../../assets/Dog2Image.webp';
import dog3 from '../../assets/Dog3Image.webp';
import dog4 from '../../assets/Dog4Image.webp';
import dog5 from '../../assets/DeckDog.webp';
import dog6 from '../../assets/Dog3Image.webp';

const PhotoGallery = () => {
  const images = [dog1, dog2, dog3, dog4, dog5, dog6];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Dog ${index + 1}`} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
