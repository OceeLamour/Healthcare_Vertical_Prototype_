import React, { useState } from 'react';
import { PlusIcon } from '../components/icons';

export default function BookingPage() {
  const [services, setServices] = useState([
    {
      id: 'service_1',
      name: 'New Patient Consultation',
      duration: 30,
      priceRange: { min: 200, max: 350 }
    },
    {
      id: 'service_2',
      name: 'Follow-up Visit',
      duration: 20,
      priceRange: { min: 100, max: 150 }
    },
    {
      id: 'service_3',
      name: 'Telehealth Visit',
      duration: 20,
      priceRange: { min: 100, max: 150 }
    }
  ]);

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Book Appointments
          </h1>
          <p className="text-secondary mt-1">
            Configure appointment types and pricing for your AI assistant.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Your Services</h2>
            <button
              type="button"
              onClick={() => setServices([...services, {
                id: `service_${services.length + 1}`,
                name: '',
                duration: 30,
                priceRange: { min: 0, max: 0 }
              }])}
              className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="h-5 w-5" />
              Add Service
            </button>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={service.id} className="border-t border-gray-200 pt-6 first:border-t-0 first:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Service Name
                    </label>
                    <input
                      type="text"
                      value={service.name}
                      onChange={(e) => {
                        const newServices = [...services];
                        newServices[index].name = e.target.value;
                        setServices(newServices);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Duration (minutes)
                    </label>
                    <input
                      type="number"
                      value={service.duration}
                      onChange={(e) => {
                        const newServices = [...services];
                        newServices[index].duration = parseInt(e.target.value);
                        setServices(newServices);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Price Range ($)
                    </label>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="number"
                        placeholder="Min"
                        value={service.priceRange.min}
                        onChange={(e) => {
                          const newServices = [...services];
                          newServices[index].priceRange.min = parseInt(e.target.value);
                          setServices(newServices);
                        }}
                        className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-gray-500">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={service.priceRange.max}
                        onChange={(e) => {
                          const newServices = [...services];
                          newServices[index].priceRange.max = parseInt(e.target.value);
                          setServices(newServices);
                        }}
                        className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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