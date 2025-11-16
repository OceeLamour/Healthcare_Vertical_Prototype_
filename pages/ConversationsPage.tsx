
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { conversationsData as conversations } from '../data/conversations';

export default function ConversationsPage() {
  const navigate = useNavigate();
  
  return (
    <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary">Conversations</h1>
            <p className="text-secondary mt-1">See every AI decision, including skill usage and PII redaction.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="space-y-4">
            {conversations.map((conv) => (
                <div key={conv.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                    <span className="font-medium text-gray-800">{conv.customerName}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${conv.channel === 'phone' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {conv.channel}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${conv.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {conv.status}
                    </span>
                    </div>
                    <button
                    type="button"
                    onClick={() => navigate(`/app/conversation/${conv.id}`)}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                    View Transcript →
                    </button>
                </div>
                <div className="mt-2 pl-2 border-l-2 border-gray-200">
                    <p className="text-sm text-secondary italic">"{conv.transcript[0].content}"</p>
                    <p className="text-xs text-gray-400 mt-1">{new Date(conv.timestamp).toLocaleString()}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </main>
  );
}