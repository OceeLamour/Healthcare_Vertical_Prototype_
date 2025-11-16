export const conversationsData = [
    {
      id: 'conv_1',
      timestamp: '2025-01-15T14:00:00Z',
      customerName: 'John Smith',
      channel: 'phone',
      status: 'COMPLETED',
      transcript: [
        {
          id: 'msg_1',
          sender: 'CUSTOMER',
          content: 'Can you give me legal advice?',
          timestamp: '2025-01-15T14:00:00Z',
          redacted: false
        },
        {
          id: 'msg_2',
          sender: 'AI',
          content: "I can't provide legal advice — but I'd be happy to book you a consultation with Dr. Martinez.",
          timestamp: '2025-01-15T14:00:05Z',
          redacted: false
        }
      ]
    },
    {
      id: 'conv_2',
      timestamp: '2025-01-15T14:05:00Z',
      customerName: 'Jane Doe',
      channel: 'webchat',
      status: 'COMPLETED',
      transcript: [
        {
          id: 'msg_3',
          sender: 'CUSTOMER',
          content: 'Book me for a consultation next Tuesday at 2pm',
          timestamp: '2025-01-15T14:05:00Z',
          redacted: false
        },
        {
          id: 'msg_4',
          sender: 'AI',
          content: 'What\'s your name and phone number?',
          timestamp: '2025-01-15T14:05:05Z',
          redacted: false
        },
        {
            id: 'msg_5',
            sender: 'CUSTOMER',
            content: 'My name is Jane Doe and my number is 555-123-4567',
            timestamp: '2025-01-15T14:05:15Z',
            redacted: true
          },
           {
            id: 'msg_6',
            sender: 'AI',
            content: 'Thank you, Jane. I have booked your appointment for next Tuesday at 2 PM. You will receive a confirmation shortly.',
            timestamp: '2025-01-15T14:05:25Z',
            redacted: false
          }
      ]
    }
  ];
  