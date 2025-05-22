// components/ExploreCard.jsx
import React from 'react';

const ExploreCard = ({ title, description, icon: Icon, iconBg, image }) => {
  return (
    <div className="py-4 space-y-5 border border-gray-400 rounded-lg">
      <div className="space-y-3 mx-4">
        <div className={`h-12 w-12 ${iconBg} rounded-lg shadow-lg flex justify-center items-center`}>
          <Icon className="text-white w-8 h-8" />
        </div>
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <img src={image} alt={title} className="h-60 w-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-b from-white/5 to-white backdrop-blur-sm z-0" />
      </div>
    </div>
  );
};

export default ExploreCard;
