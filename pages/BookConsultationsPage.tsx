
import React, { useState } from 'react';

export default function BookConsultationsPage() {
  const [form, setForm] = useState({
    serviceType: 'TAX_CONSULT_60',
    priceRange: { min: 150, max: 350 },
    bufferMinutes: 15,
    sameDayAllowed: true
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 1000);
  };


  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Book Consultations
          </h1>
          <p className="text-secondary mt-1">Configure how your AI assistant schedules appointments with clients.</p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Configure Your Booking Flow</h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-secondary">
                Service Type
              </label>
              <select
                id="serviceType"
                value={form.serviceType}
                onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="TAX_CONSULT_60">Tax Preparation Consultation ($150–$350)</option>
                <option value="BOOKKEEP_30">Bookkeeping Review ($75–$150)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary">
                Price Range
              </label>
              <div className="flex space-x-4 mt-1 items-center">
                <input
                  type="number"
                  value={form.priceRange.min}
                  onChange={(e) => setForm({ ...form, priceRange: { ...form.priceRange, min: parseInt(e.target.value) } })}
                  className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  prefix="$"
                />
                <span className="text-secondary">to</span>
                <input
                  type="number"
                  value={form.priceRange.max}
                  onChange={(e) => setForm({ ...form, priceRange: { ...form.priceRange, max: parseInt(e.target.value) } })}
                  className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="sameDay"
                checked={form.sameDayAllowed}
                onChange={(e) => setForm({ ...form, sameDayAllowed: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="sameDay" className="ml-2 block text-sm text-secondary">
                Allow same-day bookings
              </label>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
              {showSuccess && <span className="ml-4 text-green-600">Settings saved!</span>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}