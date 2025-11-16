import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import TopBar from '../components/layout/TopBar';
import LegalDashboard from './LegalDashboard';
import ComplianceTab from './tabs/ComplianceTab';
import SafetyRulesTab from './tabs/SafetyRulesTab';
import TransparencyTab from './tabs/TransparencyTab';
import ClientIntakeTab from './tabs/ClientIntakeTab';

export default function DashboardHome() {
  const { currentUser } = useUser();
  const [activeTab, setActiveTab] = useState('For You');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'For You':
        return <LegalDashboard />;
      case 'Compliance':
        return <ComplianceTab />;
      case 'Safety Rules':
        return <SafetyRulesTab />;
      case 'Transparency':
        return <TransparencyTab />;
      case 'Client Intake':
        return <ClientIntakeTab />;
      default:
        return <LegalDashboard />;
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