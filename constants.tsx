import type { User, ActionCardData } from './types';
// FIX: Add imports for icons to be used in VERTICAL_DATA
import {
    CalendarDaysIcon,
    ChartBarIcon,
    Cog6ToothIcon,
    DocumentTextIcon,
    ExclamationTriangleIcon,
    PhoneIcon,
} from './components/icons';

export const USER_MARIA: User = { 
  id: 1, 
  name: 'Maria', 
  vertical: 'Legal Services', 
  avatarUrl: 'https://picsum.photos/seed/maria/40/40' 
};

// FIX: Define and export VERTICAL_DATA which was missing.
const legalCards: ActionCardData[] = [
    { title: 'Book Consultations', description: 'Schedule appointments with clients', icon: CalendarDaysIcon, cta: 'Start Building →', path: '/app/book-consultations' },
    { title: 'Safety & Compliance', description: 'Add disclaimers, set emergency keywords', icon: ExclamationTriangleIcon, cta: 'Configure →', path: '/app/safety-compliance' },
    { title: 'Phone Setup', description: 'Activate your business phone number', icon: PhoneIcon, cta: 'Go Live! →', path: '/app/phone-setup' },
    { title: 'Intake Forms', description: 'Collect client info securely', icon: DocumentTextIcon, cta: 'Build Form →', path: '/app/intake-forms' },
    { title: 'Transparency Log', description: 'See every AI decision', icon: ChartBarIcon, cta: 'View Log →', path: '/app/transparency-log' },
    { title: 'Customize AI', description: 'Edit welcome message and tone', icon: Cog6ToothIcon, cta: 'Edit Now →', path: '/app/customize-ai' },
];

const legalNextSteps = [
    'Test your AI by calling your new number',
    'Share your web chat widget with your website',
    'Review your first call transcript',
];

export const VERTICAL_DATA = {
  'Legal Services': {
    header: {
      greeting: (name: string) => `Hello, ${name}! Your AI Assistant is Ready for Legal Practice`,
      subtext: 'Get started by setting up your AI assistant for Harbor Family Clinic.',
    },
    cards: legalCards,
    nextSteps: legalNextSteps,
  }
};
