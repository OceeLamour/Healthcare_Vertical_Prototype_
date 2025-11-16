import React, { useState } from 'react';
import Toggle from '../../components/Toggle';

export default function ComplianceTab() {
  const [settings, setSettings] = useState({
    baaInPlace: true,
    phiRedactionLevel: 'strict',
    minimumNecessaryEnforced: true,
    retentionPeriodDays: 365
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setShowSuccess(false);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary">Compliance</h1>
      <p className="text-secondary mb-6">
        Manage HIPAA compliance settings, PII redaction, and audit trails.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">HIPAA Settings</h2>
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between border-t pt-4">
            <span className="font-medium text-secondary">BAA in Place</span>
            <Toggle
              checked={settings.baaInPlace}
              onChange={(checked) => setSettings({...settings, baaInPlace: checked})}
            />
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <label className="font-medium text-secondary">PHI Redaction Level</label>
            <select
              value={settings.phiRedactionLevel}
              onChange={(e) => setSettings({...settings, phiRedactionLevel: e.target.value})}
              className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            >
              <option value="strict">Strict (mask all PII)</option>
              <option value="moderate">Moderate (mask sensitive PII only)</option>
              <option value="minimal">Minimal (log only)</option>
            </select>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <span className="font-medium text-secondary">Minimum Necessary Enforced</span>
            <Toggle
              checked={settings.minimumNecessaryEnforced}
              onChange={(checked) => setSettings({...settings, minimumNecessaryEnforced: checked})}
            />
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <label className="font-medium text-secondary">Retention Period (days)</label>
            <input
              type="number"
              value={settings.retentionPeriodDays}
              onChange={(e) => setSettings({...settings, retentionPeriodDays: parseInt(e.target.value)})}
              className="mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Audit Trail</h2>
        <div className="space-y-3 mt-4 text-sm">
          <div className="border-b pb-2 flex items-center justify-between font-semibold text-gray-600">
            <span>Event Type</span>
            <span>Timestamp</span>
          </div>
          <div className="border-b pb-2 flex items-center justify-between text-secondary">
            <span>PHI Redaction</span>
            <span>2025-01-15T14:00:00Z</span>
          </div>
          <div className="flex items-center justify-between text-secondary">
            <span>Safety Rule Triggered</span>
            <span>2025-01-15T14:05:00Z</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end items-center gap-4">
        {showSuccess && <span className="text-sm text-green-600">Changes saved successfully!</span>}
        <button
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cta hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}