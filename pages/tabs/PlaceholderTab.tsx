import React from 'react';

interface PlaceholderTabProps {
  title: string;
}

const PlaceholderTab: React.FC<PlaceholderTabProps> = ({ title }) => {
  return (
    <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-3xl font-bold text-primary">
        {title}
      </h2>
      <p className="mt-2 text-secondary">
        Content for this tab will be displayed here.
      </p>
    </div>
  );
};

export default PlaceholderTab;