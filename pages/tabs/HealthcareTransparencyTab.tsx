import React, { useState } from 'react';
import { conversationsData } from '../../data/conversations';

export default function HealthcareTransparencyTab() {
  const [logs] = useState(conversationsData.flatMap(c => c.transcript));

  const handleExportLogs = () => {
    const csvContent = [
      ['Timestamp', 'Sender', 'Content', 'Redacted'],
      ...logs.map(log => [
        `"${new Date(log.timestamp).toLocaleString()}"`,
        log.sender,
        `"${(log.redacted ? "My name is [REDACTED] and my number is [REDACTED]" : log.content).replace(/"/g, '""')}"`,
        log.redacted ? 'Yes' : 'No'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'transparency_logs.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary">Transparency</h1>
      <p className="text-secondary mb-6">See every AI decision, including skill usage and PII redaction.</p>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${log.sender === 'CUSTOMER' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {log.sender}
                  </span>
                  <span className="text-sm text-secondary">{new Date(log.timestamp).toLocaleString()}</span>
                </div>
                {log.redacted && (
                  <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">[REDACTED]</span>
                )}
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-800">
                  {log.redacted ? <span className="italic text-gray-500">My name is [REDACTED] and my number is [REDACTED]</span> : log.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleExportLogs}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Export Logs
        </button>
      </div>
    </div>
  );
}