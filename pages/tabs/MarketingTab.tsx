import React from 'react';
import Card from '../../components/Card';
import { UsersIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '../../components/icons';

export default function MarketingTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Marketing</h2>
      <p className="text-secondary">
        Track how your AI assistant is attracting new clients.
      </p>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <UsersIcon className="h-6 w-6 text-cta" />
            <h3 className="font-semibold text-gray-800">New Consultations Booked</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-secondary">Last 7 days</p>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <PhoneIcon className="h-6 w-6 text-cta" />
            <h3 className="font-semibold text-gray-800">Calls Answered</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">47</p>
          <p className="text-sm text-secondary">Last 7 days</p>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-cta" />
            <h3 className="font-semibold text-gray-800">Web Chat Engagements</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">23</p>
          <p className="text-sm text-secondary">Last 7 days</p>
        </Card>
      </div>

      {/* Top Performing Services */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Top Performing Services</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Tax Preparation Consultation</span>
            <span className="font-medium text-gray-900">8 bookings</span>
          </div>
          <div className="flex justify-between">
            <span>Bookkeeping Review</span>
            <span className="font-medium text-gray-900">4 bookings</span>
          </div>
        </div>
      </div>

      {/* Promotions & Campaigns */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Active Promotions</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Free Discovery Call (First-Time Clients)</span>
            <span className="font-medium text-gray-900">100% conversion rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}