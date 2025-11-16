import React from 'react';
import Card from '../../components/Card';
import { ShieldCheckIcon, EyeIcon, ExclamationTriangleIcon } from '../../components/icons';

export default function CustomerCareTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Customer Care</h2>
      <p className="text-secondary">
        Monitor safety, compliance, and customer interactions.
      </p>

      {/* Safety & Compliance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="h-6 w-6 text-cta" />
            <h3 className="font-semibold text-gray-800">Safety Triggers</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">3</p>
          <p className="text-sm text-secondary">Last 7 days</p>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <EyeIcon className="h-6 w-6 text-cta" />
            <h3 className="font-semibold text-gray-800">Transparency Logs</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">15</p>
          <p className="text-sm text-secondary">Last 7 days</p>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-cta" />
            <h3 className="font-semibold text-gray-800">Emergency Escalations</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">2</p>
          <p className="text-sm text-secondary">Last 7 days</p>
        </Card>
      </div>

      {/* Recent Safety Events */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Recent Safety Events</h3>
        <div className="space-y-4 text-sm">
          <div className="border-b border-gray-200 pb-3">
            <div className="flex justify-between">
              <span className="text-gray-700">“IRS audit” detected</span>
              <span className="text-sm text-secondary">2 hours ago</span>
            </div>
            <p className="text-sm text-secondary mt-1">Transferred to Maria</p>
          </div>
          <div className="border-b-0 pb-0">
            <div className="flex justify-between">
              <span className="text-gray-700">“legal advice” detected</span>
              <span className="text-sm text-secondary">5 hours ago</span>
            </div>
            <p className="text-sm text-secondary mt-1">Blocked response, sent disclaimer</p>
          </div>
        </div>
      </div>

      {/* Compliance Audit Trail */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Compliance Audit Trail</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Disclaimers applied</span>
            <span className="font-medium text-gray-900">15 times</span>
          </div>
          <div className="flex justify-between">
            <span>PII redacted</span>
            <span className="font-medium text-gray-900">8 times</span>
          </div>
        </div>
      </div>
    </div>
  );
}