
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Sidebar from './components/layout/Sidebar';
import DashboardHome from './pages/DashboardHome';
import BookingPage from './pages/BookingPage';
import SafetyCompliancePage from './pages/SafetyCompliancePage';
import IntakeFormsPage from './pages/IntakeFormsPage';
import PlaceholderPage from './pages/PlaceholderPage';
import TransparencyLogPage from './pages/TransparencyLogPage';
import CustomizeAIPage from './pages/CustomizeAIPage';
import ConversationsPage from './pages/ConversationsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import ConversationTranscriptPage from './pages/ConversationTranscriptPage';
import ConsentTemplatesPage from './pages/ConsentTemplatesPage';
import ProviderSyncPage from './pages/ProviderSyncPage';
import ProviderSyncConnectPage from './pages/ProviderSyncConnectPage';

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <UserProvider>
      <HashRouter>
        <div className="flex h-screen bg-voicesteer-bg font-sans">
          <Sidebar 
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
          />
          <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSidebarCollapsed ? 'pl-[72px]' : 'pl-[240px]'}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
              <Route path="/app/dashboard" element={<DashboardHome />} />
              <Route path="/app/conversations" element={<ConversationsPage />} />
              <Route path="/app/analytics" element={<AnalyticsPage />} />
              <Route path="/app/settings" element={<SettingsPage />} />
              <Route path="/app/conversation/:id" element={<ConversationTranscriptPage />} />


              {/* Vertical Specific Routes */}
              <Route path="/app/book-consultations" element={<BookingPage />} />
              <Route path="/app/safety-compliance" element={<SafetyCompliancePage />} />
              <Route path="/app/intake-forms" element={<IntakeFormsPage />} />
              <Route path="/app/consent-templates" element={<ConsentTemplatesPage />} />
              <Route path="/app/provider-sync" element={<ProviderSyncPage />} />
              <Route path="/app/provider-sync/connect" element={<ProviderSyncConnectPage />} />
              <Route path="/app/provider/:id/schedule" element={<PlaceholderPage title="Provider Schedule" />} />

              
              <Route path="/app/phone-setup" element={<PlaceholderPage title="Phone Setup" />} />
              <Route path="/app/transparency-log" element={<TransparencyLogPage />} />
              <Route path="/app/customize-ai" element={<CustomizeAIPage />} />

              <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </UserProvider>
  );
}