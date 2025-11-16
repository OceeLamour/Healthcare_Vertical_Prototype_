import React from 'react';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {children}
    </div>
  );
};

export default Card;
