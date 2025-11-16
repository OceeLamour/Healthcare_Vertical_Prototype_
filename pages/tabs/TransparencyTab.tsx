import React, { useState } from 'react';

export default function TransparencyTab() {
  const [logs, setLogs] = useState([
    {
      id: 'log_1',
      timestamp: '2025-01-15T14:00:00Z',
      sender: 'CUSTOMER',
      content: 'Can you give me legal advice?',
      redacted: false
    },
    {
      id: 'log_2',
      timestamp: '2025-01-15T14:00:05Z',
      sender: 'AI',
      content: 'I can\'t provide legal advice — but I\'d be happy to book you a consultation with Dr. Martinez.',
      redacted: false
    },
    {
      id: 'log_3',
      timestamp: '2025-01-15T14:00:10Z',
      sender: 'CUSTOMER',
      content: 'Book me for a consultation next Tuesday at 2pm',
      redacted: false
    },
    {
      id: 'log_4',
      timestamp: '2025-01-15T14:00:15Z',
      sender: 'AI',
      content: 'What\'s your name and phone number?',
      redacted: false
    }
  ]);

  const handleExportLogs = () => {
    // Convert logs to CSV
    const csvContent = [
      ['Timestamp', 'Sender', 'Content', 'Redacted'],
      ...logs.map(log => [
        `"${new Date(log.timestamp).toLocaleString()}"`,
        log.sender,
        `"${log.content.replace(/"/g, '""')}"`, // Handle quotes in content
        log.redacted ? 'Yes' : 'No'
      ])
    ].map(row => row.join(',')).join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'transparency_logs.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary">Transparency</h1>
      <p className="text-secondary mb-6">
        See every AI decision, including skill usage and PII redaction.
      </p>

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
                    <p className="text-sm text-gray-800">{log.content}</p>
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