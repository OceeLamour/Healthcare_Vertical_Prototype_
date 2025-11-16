
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ActionCardData } from '../types';

const ActionCard: React.FC<ActionCardData> = ({ title, description, icon: Icon, cta, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
      onClick={handleClick}
    >
      <div>
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-emerald-50 p-2 rounded-full">
            <Icon className="h-6 w-6 text-cta" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
      <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors self-start">
        {cta}
      </span>
    </div>
  );
};

export default ActionCard;