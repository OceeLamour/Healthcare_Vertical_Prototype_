import React from 'react';
import { useUser } from '../context/UserContext';
import ActionCard from '../components/ActionCard';
import {
    CalendarDaysIcon,
    ExclamationTriangleIcon,
    PhoneIcon,
    DocumentTextIcon,
    ChartBarIcon,
    Cog6ToothIcon,
} from '../components/icons';

const legalCards = [
    { title: 'Book Consultations', description: 'Schedule appointments with clients', icon: CalendarDaysIcon, cta: 'Start Building →', path: '/app/book-consultations' },
    { title: 'Safety & Compliance', description: 'Add disclaimers, set emergency keywords', icon: ExclamationTriangleIcon, cta: 'Configure →', path: '/app/safety-compliance' },
    { title: 'Phone Setup', description: 'Activate your business phone number', icon: PhoneIcon, cta: 'Go Live! →', path: '/app/phone-setup' },
    { title: 'Intake Forms', description: 'Collect client info securely', icon: DocumentTextIcon, cta: 'Build Form →', path: '/app/intake-forms' },
    { title: 'Transparency Log', description: 'See every AI decision', icon: ChartBarIcon, cta: 'View Log →', path: '/app/transparency-log' },
    { title: 'Customize AI', description: 'Edit welcome message and tone', icon: Cog6ToothIcon, cta: 'Edit Now →', path: '/app/customize-ai' },
];

const nextSteps = [
    'Test your AI by calling your new number',
    'Share your web chat widget with your website',
    'Review your first call transcript',
];

export function LegalDashboard() {
  const { currentUser } = useUser();

  return (
    <div className="space-y-6">
      <header className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-primary">
          Hello, {currentUser.name}! Your AI Assistant is Ready for Legal Practice
        </h2>
        <p className="text-secondary mt-2">
          Get started by setting up your AI assistant for Harbor Family Clinic.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalCards.map((card) => (
            <ActionCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <footer className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">🎯 Next Steps:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
          {nextSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </footer>
    </div>
  );
}

export default LegalDashboard;