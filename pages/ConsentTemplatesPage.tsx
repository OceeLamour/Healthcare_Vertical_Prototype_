import React, { useState } from 'react';

export default function ConsentTemplatesPage() {
  const [telehealthConsent, setTelehealthConsent] = useState(
    "By proceeding, you consent to receive care via telehealth. You understand that this visit is not for emergencies. You have the right to withdraw consent at any time."
  );

  const [privacyConsent, setPrivacyConsent] = useState(
    "I acknowledge that I have received the Notice of Privacy Practices from Harbor Family Clinic. I consent to the use and disclosure of my protected health information (PHI) for treatment, payment, and healthcare operations."
    );

  return (
    <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-primary">
                    Consent Templates
                </h1>
                <p className="text-secondary mt-1">
                    Configure the consent language your AI assistant will use.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                    <div>
                        <label htmlFor="telehealthConsent" className="block text-lg font-semibold text-gray-800">
                            Telehealth Consent
                        </label>
                        <p className="text-sm text-secondary mt-1 mb-3">This message is read to patients before a telehealth visit is booked.</p>
                        <textarea
                            id="telehealthConsent"
                            value={telehealthConsent}
                            onChange={(e) => setTelehealthConsent(e.target.value)}
                            rows={5}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>
                 <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                    <div>
                        <label htmlFor="privacyConsent" className="block text-lg font-semibold text-gray-800">
                            Privacy (HIPAA) Consent
                        </label>
                        <p className="text-sm text-secondary mt-1 mb-3">This consent is collected during patient intake.</p>
                        <textarea
                            id="privacyConsent"
                            value={privacyConsent}
                            onChange={(e) => setPrivacyConsent(e.target.value)}
                            rows={5}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <button
                    type="button"
                    className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cta hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta"
                >
                    Save Changes
                </button>
            </div>
        </div>
    </main>
  );
}