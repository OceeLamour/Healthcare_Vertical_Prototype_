import React from 'react';
import type { User } from '../../types';
import { MagnifyingGlassIcon } from '../icons';

interface TopBarProps {
  user: User;
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const SearchBar = () => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
    </div>
    <input
      className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
      placeholder="Search"
      type="search"
    />
  </div>
);

const UserAvatar = ({ user }: { user: User }) => (
    <img className="h-8 w-8 rounded-full" src={user.avatarUrl} alt={user.name} />
);

export function TopBar({ user, activeTab, setActiveTab }: TopBarProps) {
  const tabs = [
    { id: 'For You', label: 'For You' },
    { id: 'Compliance', label: 'Compliance' },
    { id: 'Safety Rules', label: 'Safety Rules' },
    { id: 'Transparency', label: 'Transparency' },
    { id: 'Client Intake', label: 'Client Intake' }
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-2 sticky top-0 z-10 h-16 flex items-center flex-shrink-0">
      <div className="flex items-center justify-between w-full">
        <div className="flex space-x-2 sm:space-x-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
          <UserAvatar user={user} />
        </div>
      </div>
    </header>
  );
}

export default TopBar;