import React, { useState } from 'react';

export default function SafetyRulesTab() {
  const [rules, setRules] = useState([
    {
      id: 'rule_1',
      pattern: 'sue, lawyer, emergency, legal advice',
      action: 'transfer',
      message: 'Let me connect you with Maria directly for that.',
      isActive: true
    }
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    setShowSuccess(false);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      // In a real app, you would handle success/error from an API call
      // For now, we'll just show a success message.
      // toast.success('Safety rules saved successfully!');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary">Safety Rules</h1>
      <p className="text-secondary mb-6">
        Set emergency keywords and handoff triggers for your AI assistant.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={rule.id} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={rule.pattern}
                    onChange={(e) => {
                      const newRules = [...rules];
                      newRules[index].pattern = e.target.value;
                      setRules(newRules);
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Action
                  </label>
                  <select
                    value={rule.action}
                    onChange={(e) => {
                      const newRules = [...rules];
                      newRules[index].action = e.target.value;
                      setRules(newRules);
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="transfer">Transfer to Human</option>
                    <option value="alert">Send Alert</option>
                    <option value="voicemail">Voicemail</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Message
                  </label>
                  <input
                    type="text"
                    value={rule.message}
                    onChange={(e) => {
                      const newRules = [...rules];
                      newRules[index].message = e.target.value;
                      setRules(newRules);
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-start">
            <button
              type="button"
              onClick={() => setRules([...rules, {
                id: `rule_${rules.length + 1}`,
                pattern: '',
                action: 'transfer',
                message: '',
                isActive: true
              }])}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              + Add New Rule
            </button>
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