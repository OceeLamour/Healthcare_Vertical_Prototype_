import React, { useState } from 'react';
import { PlusIcon } from '../../components/icons';

export default function ClientIntakeTab() {
  const [fields, setFields] = useState([
    { key: 'full_name', label: 'Full Name', type: 'string', required: true, phi: true },
    { key: 'dob', label: 'Date of Birth', type: 'date', required: true, phi: true },
    { key: 'phone', label: 'Phone Number', type: 'string', required: true, phi: true },
    { key: 'email', label: 'Email Address', type: 'string', required: false, phi: true },
    { key: 'address', label: 'Address', type: 'string', required: true, phi: true },
    { key: 'zip', label: 'ZIP Code', type: 'string', required: true, phi: false },
    { key: 'reason', label: 'Reason for Visit', type: 'string', required: true, phi: true },
    { key: 'medications', label: 'Current Medications', type: 'string', required: false, phi: true },
    { key: 'allergies', label: 'Allergies', type: 'string', required: false, phi: true },
    { key: 'medical_history', label: 'Brief Medical History', type: 'string', required: false, phi: true }
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddField = () => {
    const newField = {
      key: `field_${fields.length + 1}`,
      label: '',
      type: 'string',
      required: false,
      phi: false,
    };
    setFields([...fields, newField]);
  };

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
        <h1 className="text-2xl font-bold text-primary">Client Intake</h1>
        <p className="text-secondary mb-6">
            Build secure forms for client information.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Form Builder</h2>
                <button
                    type="button"
                    onClick={handleAddField}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <PlusIcon className="h-5 w-5" />
                    Add Field
                </button>
            </div>
            <div className="space-y-4">
            {fields.map((field, index) => (
                <div key={field.key} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-secondary">
                            Field Label
                        </label>
                        <input
                            type="text"
                            value={field.label}
                            onChange={(e) => {
                            const newFields = [...fields];
                            newFields[index].label = e.target.value;
                            setFields(newFields);
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-secondary">
                            Type
                        </label>
                        <select
                            value={field.type}
                            onChange={(e) => {
                            const newFields = [...fields];
                            newFields[index].type = e.target.value;
                            setFields(newFields);
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="string">Text</option>
                            <option value="number">Number</option>
                            <option value="select">Dropdown</option>
                            <option value="date">Date</option>
                        </select>
                        </div>
                       <div className="flex items-center space-x-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary text-center">
                                    Required?
                                </label>
                                <select
                                    value={field.required ? 'true' : 'false'}
                                    onChange={(e) => {
                                    const newFields = [...fields];
                                    newFields[index].required = e.target.value === 'true';
                                    setFields(newFields);
                                    }}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary text-center">
                                    PII?
                                </label>
                                <select
                                    value={field.phi ? 'true' : 'false'}
                                    onChange={(e) => {
                                    const newFields = [...fields];
                                    newFields[index].phi = e.target.value === 'true';
                                    setFields(newFields);
                                    }}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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