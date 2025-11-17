import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import TopBar from '../components/layout/TopBar';
import ForYouTab from './tabs/ForYouTab';
import ComplianceTab from './tabs/ComplianceTab';
import SafetyRulesTab from './tabs/SafetyRulesTab';
import TransparencyTab from './tabs/TransparencyTab';
import ClientIntakeTab from './tabs/ClientIntakeTab';
import HIPAAComplianceTab from './tabs/HIPAAComplianceTab';
import ProtocolsTab from './tabs/ProtocolsTab';
import HealthcareTransparencyTab from './tabs/HealthcareTransparencyTab';
import PatientIntakeTab from './tabs/PatientIntakeTab';

export default function DashboardHome() {
  const { currentUser } = useUser();
  const [activeTab, setActiveTab] = useState('For You');

  const renderLegalTabs = () => {
     switch (activeTab) {
      case 'For You': return <ForYouTab />;
      case 'Compliance': return <ComplianceTab />;
      case 'Safety Rules': return <SafetyRulesTab />;
      case 'Transparency': return <TransparencyTab />;
      case 'Client Intake': return <ClientIntakeTab />;
      default: return <ForYouTab />;
    }
  }

  const renderHealthcareTabs = () => {
    switch(activeTab) {
        case 'For You': return <ForYouTab />;
        case 'HIPAA Compliance': return <HIPAAComplianceTab />;
        case 'Protocols': return <ProtocolsTab />;
        case 'Transparency': return <HealthcareTransparencyTab />;
        case 'Patient Intake': return <PatientIntakeTab />;
        default: return <ForYouTab />;
    }
  }

  const renderTabContent = () => {
    if (currentUser.vertical === 'Healthcare') {
        return renderHealthcareTabs();
    }
    return renderLegalTabs();
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