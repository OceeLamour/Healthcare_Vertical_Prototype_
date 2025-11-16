
import React, { useState } from 'react';
import Card from '../components/Card';
import { UsersIcon, PhoneIcon, ChatBubbleLeftRightIcon as ChatIcon } from '../components/icons';

export default function AnalyticsPage() {
  const [metrics] = useState({
    totalCalls: 47,
    totalBookings: 12,
    totalDeclines: 3,
    emergencyEscalations: 2,
    averageHandleTime: 90,
    conversionRate: 85,
    byServiceType: {
      'New Patient Consultation': 8,
      'Follow-up Visit': 4
    },
    byHourOfDay: {
      '09:00-10:00': 5,
      '10:00-11:00': 8,
      '11:00-12:00': 6,
      '12:00-13:00': 4,
      '13:00-14:00': 7,
      '14:00-15:00': 6,
      '15:00-16:00': 5,
      '16:00-17:00': 6
    }
  });

  return (
    <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-primary">Analytics</h1>
                <p className="text-secondary mt-1">Track how your AI assistant is attracting new clients.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                <div className="flex items-center gap-3 mb-4">
                    <UsersIcon className="h-6 w-6 text-cta" />
                    <h3 className="font-semibold text-gray-800">New Consultations Booked</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">{metrics.totalBookings}</p>
                <p className="text-sm text-secondary">Last 7 days</p>
                </Card>

                <Card>
                <div className="flex items-center gap-3 mb-4">
                    <PhoneIcon className="h-6 w-6 text-cta" />
                    <h3 className="font-semibold text-gray-800">Calls Answered</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">{metrics.totalCalls}</p>
                <p className="text-sm text-secondary">Last 7 days</p>
                </Card>

                <Card>
                <div className="flex items-center gap-3 mb-4">
                    <ChatIcon className="h-6 w-6 text-cta" />
                    <h3 className="font-semibold text-gray-800">Web Chat Engagements</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">{metrics.totalBookings}</p>
                <p className="text-sm text-secondary">Last 7 days</p>
                </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
                <h3 className="font-semibold mb-4 text-gray-800">Top Performing Services</h3>
                <div className="space-y-3 text-sm">
                {Object.entries(metrics.byServiceType).map(([service, count]) => (
                    <div key={service} className="flex justify-between border-b border-gray-100 pb-2 last:border-b-0">
                    <span className="text-secondary">{service}</span>
                    <span className="font-medium text-primary">{count} bookings</span>
                    </div>
                ))}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold mb-4 text-gray-800">Active Promotions</h3>
                <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-secondary">Free Discovery Call (First-Time Clients)</span>
                    <span className="font-medium text-primary">100% conversion rate</span>
                </div>
                </div>
            </div>
        </div>
    </main>
  );
}
