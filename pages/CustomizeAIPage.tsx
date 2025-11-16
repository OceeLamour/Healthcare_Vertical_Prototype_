import React, { useState } from 'react';

export default function CustomizeAIPage() {
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello! I'm the virtual assistant for Harbor Family Clinic. I can help schedule appointments, answer questions about our services, or assist with patient intake. How can I assist you today?"
  );

  const [tone, setTone] = useState('professional');

  return (
    <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-primary">
                    Customize AI
                </h1>
                <p className="text-secondary mt-1">
                    Edit your AI’s welcome message and tone.
                </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="welcomeMessage" className="block text-sm font-medium text-secondary">
                            Welcome Message
                        </label>
                        <textarea
                            id="welcomeMessage"
                            value={welcomeMessage}
                            onChange={(e) => setWelcomeMessage(e.target.value)}
                            rows={6}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="tone" className="block text-sm font-medium text-secondary">
                            Tone
                        </label>
                        <select
                            id="tone"
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="professional">Professional</option>
                            <option value="friendly">Friendly</option>
                            <option value="formal">Formal</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        type="button"
                        className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cta hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta"
                    >
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    </main>
  );
}