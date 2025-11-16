import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-xl text-secondary">
            This page is under construction.
          </p>
          <div className="mt-10 h-64 flex items-center justify-center">
            <svg className="w-24 h-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlaceholderPage;