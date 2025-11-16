
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { conversationsData } from '../data/conversations';

export default function ConversationTranscriptPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const conversation = conversationsData.find(c => c.id === id);

  const handleExportTranscript = () => {
    if (!conversation) return;

    // 1. Create header for the text file
    let fileContent = `Conversation Transcript\n`;
    fileContent += `-------------------------\n`;
    fileContent += `Customer: ${conversation.customerName}\n`;
    fileContent += `Channel: ${conversation.channel}\n`;
    fileContent += `Date: ${new Date(conversation.timestamp).toLocaleString()}\n`;
    fileContent += `Status: ${conversation.status}\n`;
    fileContent += `-------------------------\n\n`;

    // 2. Add each message
    conversation.transcript.forEach(message => {
        const messageTimestamp = new Date(message.timestamp).toLocaleString();
        const content = message.redacted 
            ? "My name is [REDACTED] and my number is [REDACTED]" 
            : message.content;
        fileContent += `[${messageTimestamp}] ${message.sender}:\n`;
        fileContent += `${content}\n\n`;
    });

    // 3. Create blob and download link
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `transcript_${conversation.id}.txt`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  if (!conversation) {
    return (
        <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl font-bold text-primary">Conversation Not Found</h1>
                <p className="text-secondary mt-2">The conversation you are looking for does not exist.</p>
                <button
                    type="button"
                    onClick={() => navigate('/app/conversations')}
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Back to Conversations
                </button>
            </div>
        </main>
    );
  }

  return (
    <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-primary">Conversation Transcript</h1>
                    <p className="text-secondary mt-1">Review the full interaction between the customer and the AI.</p>
                </div>
                    <button
                    type="button"
                    onClick={() => navigate('/app/conversations')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    &larr; Back to Conversations
                </button>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                <span className="font-medium text-gray-800">{conversation.customerName}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${conversation.channel === 'phone' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                    {conversation.channel}
                </span>
                <span className="text-sm text-secondary">{new Date(conversation.timestamp).toLocaleString()}</span>
                </div>
                <span className={`text-sm font-bold ${conversation.status === 'COMPLETED' ? 'text-green-600' : 'text-gray-600'}`}>
                {conversation.status}
                </span>
            </div>

            <div className="space-y-4">
                {conversation.transcript.map((message) => (
                <div key={message.id} className="pb-2">
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${message.sender === 'CUSTOMER' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {message.sender}
                        </span>
                        <span className="text-sm text-secondary">{new Date(message.timestamp).toLocaleString()}</span>
                    </div>
                    {message.redacted && (
                        <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">[REDACTED]</span>
                    )}
                    </div>
                    <div className="mt-2 pl-4 border-l-2 ml-4 border-gray-200">
                    <p className="text-sm text-gray-800">
                        {message.redacted ? <span className="italic text-gray-500">My name is [REDACTED] and my number is [REDACTED]</span> : message.content}
                    </p>
                    </div>
                </div>
                ))}
            </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                <button
                type="button"
                onClick={handleExportTranscript}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cta hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta"
                >
                Export Transcript
                </button>
            </div>
            </div>
        </div>
    </main>
  );
}
