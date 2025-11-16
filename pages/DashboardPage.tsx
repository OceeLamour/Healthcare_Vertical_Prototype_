import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import TopBar from '../components/layout/TopBar';
import ForYouTab from './tabs/ForYouTab';
import PlaceholderTab from './tabs/PlaceholderTab';
import MarketingTab from './tabs/MarketingTab';
import CustomerCareTab from './tabs/CustomerCareTab';

export default function DashboardPage() {
  const { currentUser } = useUser();
  const [activeTab, setActiveTab] = useState('For You');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'For You':
        return <ForYouTab />;
      case 'Notifications':
        return <PlaceholderTab title="Notifications" />;
      case 'Marketing':
        // FIX: Use string literal for comparison as Vertical enum doesn't exist.
        if (currentUser.vertical === 'Legal Services') {
          return <MarketingTab />;
        }
        return <PlaceholderTab title="Marketing" />;
      case 'Customer Care':
        // FIX: Use string literal for comparison as Vertical enum doesn't exist.
         if (currentUser.vertical === 'Legal Services') {
          return <CustomerCareTab />;
        }
        return <PlaceholderTab title="Customer Care" />;
      case 'Custom':
        return <PlaceholderTab title="Custom" />;
      default:
        return <ForYouTab />;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <TopBar user={currentUser} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}
