
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { providersData as providers } from '../data/providers';

export default function ProviderSyncPage() {
  const navigate = useNavigate();

  if (!providers || providers.length === 0) {
    return (
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-primary">Provider Sync</h1>
                <p className="text-secondary mt-1">Connect to your practice management system.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">No Providers Found</h2>
                <p className="text-secondary mt-2 mb-6">Sync with your EHR/EMR to automatically manage provider schedules and availability.</p>
                <button
                    type="button"
                    onClick={() => navigate('/app/provider-sync/connect')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Connect to EHR/EMR →
                </button>
            </div>
        </div>
       </main>
    );
  }

  return (
    <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary">Provider Sync</h1>
            <p className="text-secondary mt-1">Manage your practice providers and their schedules.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="space-y-4">
            {providers.map((provider) => (
                <div key={provider.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                        <span className="font-medium text-lg text-gray-800">{provider.name}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${provider.role === 'MD' ? 'bg-green-100 text-green-800' : 'bg-sky-100 text-sky-800'}`}>
                            {provider.role}
                        </span>
                        </div>
                        <button
                        type="button"
                        onClick={() => navigate(`/app/provider/${provider.id}/schedule`)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                        View Schedule →
                        </button>
                    </div>
                    <div className="mt-2 text-sm text-secondary space-y-1">
                        <p><span className="font-medium">Specialty:</span> {provider.specialty}</p>
                        <p><span className="font-medium">Booking Buffer:</span> {provider.bufferMinutes} minutes</p>
                        <p><span className="font-medium">Accepts new patients:</span> {provider.acceptsNewPatients ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className="mt-6 flex justify-end">
            <button
            type="button"
            onClick={() => navigate('/app/provider-sync/connect')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cta hover:bg-cta/90"
            >
            Sync with EHR/EMR →
            </button>
        </div>
        </div>
    </main>
  );
}
