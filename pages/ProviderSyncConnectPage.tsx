
import React from 'react';

const EHRCard = ({ name, description, icon }: { name: string, description: string, icon: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <img src={icon} alt={name} className="h-10 w-10" />
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      </div>
      <p className="text-sm text-secondary mb-4 flex-grow">{description}</p>
      <button
        type="button"
        // In a real app, this would trigger an OAuth flow
        onClick={() => alert(`Connecting to ${name}...`)}
        className="self-start inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Connect →
      </button>
    </div>
  );


export default function ProviderSyncConnectPage() {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary">Connect to Your Practice Management System</h1>
            <p className="text-secondary mt-1">Choose your EHR/EMR provider to sync schedules and availability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EHRCard 
                name="Athenahealth"
                description="Sync providers, schedules, and automate booking with your Athenahealth account."
                icon="https://placehold.co/40x40/00D4A0/FFFFFF/png?text=A"
            />
            <EHRCard 
                name="DrChrono"
                description="Connect your DrChrono account to keep your provider availability up-to-date."
                icon="https://placehold.co/40x40/00B386/FFFFFF/png?text=D"
            />
            <EHRCard 
                name="Epic"
                description="Integrate with your Epic EMR to streamline patient scheduling and data entry."
                icon="https://placehold.co/40x40/1E423E/FFFFFF/png?text=E"
            />
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg text-gray-800">Don't see your EHR/EMR?</h3>
            <p className="text-sm text-secondary mt-2 mb-4">We support custom integrations via API. Contact us to discuss your specific system and get your clinic connected.</p>
            <button
            type="button"
            onClick={() => alert('Redirecting to contact page...')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90"
            >
            Contact Us →
            </button>
        </div>
        </div>
    </main>
  );
}
