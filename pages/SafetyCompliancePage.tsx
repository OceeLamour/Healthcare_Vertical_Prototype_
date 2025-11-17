import React, { useState } from 'react';

export default function SafetyCompliancePage() {
  const [disclaimers, setDisclaimers] = useState([
    {
      id: 'disclaimer_1',
      text: 'This is not medical advice. For emergencies, call 911.',
      position: 'before_first_message'
    },
    {
      id: 'disclaimer_2',
      text: 'By continuing, you consent to our telehealth policies.',
      position: 'after_booking'
    }
  ]);

  const [safetyRules, setSafetyRules] = useState([
    {
      id: 'rule_1',
      pattern: 'chest pain, suicidal, can\'t breathe, allergic reaction',
      action: 'transfer',
      message: 'This sounds like an emergency. Let me connect you to our on-call nurse immediately.'
    }
  ]);

  return (
    <main className="flex-1 p-6 overflow-y-auto">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary">
            Safety & Compliance
        </h1>
        <p className="text-secondary mt-1">
            Set disclaimers, add emergency keywords, and configure after-hours policy.
        </p>
      </div>

      {/* Disclaimers Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Disclaimers</h2>
          <button
            type="button"
            onClick={() => setDisclaimers([...disclaimers, {
              id: `disclaimer_${disclaimers.length + 1}`,
              text: '',
              position: 'before_first_message'
            }])}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            + Add Disclaimer
          </button>
        </div>

        <div className="space-y-4">
          {disclaimers.map((disclaimer, index) => (
            <div key={disclaimer.id} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Disclaimer Text
                  </label>
                  <textarea
                    value={disclaimer.text}
                    onChange={(e) => {
                      const newDisclaimers = [...disclaimers];
                      newDisclaimers[index].text = e.target.value;
                      setDisclaimers(newDisclaimers);
                    }}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Position
                  </label>
                  <select
                    value={disclaimer.position}
                    onChange={(e) => {
                      const newDisclaimers = [...disclaimers];
                      newDisclaimers[index].position = e.target.value;
                      setDisclaimers(newDisclaimers);
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="before_first_message">Before First Message</option>
                    <option value="after_booking">After Booking</option>
                    <option value="always">Always</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Rules Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Safety Rules</h2>
          <button
            type="button"
            onClick={() => setSafetyRules([...safetyRules, {
              id: `rule_${safetyRules.length + 1}`,
              pattern: '',
              action: 'transfer',
              message: ''
            }])}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            + Add Rule
          </button>
        </div>

        <div className="space-y-4">
          {safetyRules.map((rule, index) => (
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
                      const newRules = [...safetyRules];
                      newRules[index].pattern = e.target.value;
                      setSafetyRules(newRules);
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
                      const newRules = [...safetyRules];
                      newRules[index].action = e.target.value;
                      setSafetyRules(newRules);
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
                      const newRules = [...safetyRules];
                      newRules[index].message = e.target.value;
                      setSafetyRules(newRules);
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cta hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta"
        >
          Save & Continue
        </button>
      </div>
    </div>
    </main>
  );
}