import type { User, ActionCardData } from './types';
import {
    CalendarDaysIcon,
    ChartBarIcon,
    Cog6ToothIcon,
    DocumentTextIcon,
    PhoneIcon,
    BuildingOfficeIcon,
    ShieldExclamationIcon,
    ClipboardDocumentCheckIcon,
    DocumentCheckIcon,
} from './components/icons';

export const USER_MARIA: User = { 
  id: 1, 
  name: 'Maria', 
  vertical: 'Legal Services', 
  avatarUrl: 'https://picsum.photos/seed/maria/40/40' 
};

export const USER_NINA: User = {
    id: 2,
    name: 'Nina',
    vertical: 'Healthcare',
    avatarUrl: 'https://picsum.photos/seed/nina/40/40'
};

const legalCards: ActionCardData[] = [
    { title: 'Book Consultations', description: 'Schedule appointments with clients', icon: CalendarDaysIcon, cta: 'Start Building →', path: '/app/book-consultations' },
    { title: 'Safety & Compliance', description: 'Add disclaimers, set emergency keywords', icon: ShieldExclamationIcon, cta: 'Configure →', path: '/app/safety-compliance' },
    { title: 'Phone Setup', description: 'Activate your business phone number', icon: PhoneIcon, cta: 'Go Live! →', path: '/app/phone-setup' },
    { title: 'Intake Forms', description: 'Collect client info securely', icon: DocumentTextIcon, cta: 'Build Form →', path: '/app/intake-forms' },
    { title: 'Transparency Log', description: 'See every AI decision', icon: ChartBarIcon, cta: 'View Log →', path: '/app/transparency-log' },
    { title: 'Customize AI', description: 'Edit welcome message and tone', icon: Cog6ToothIcon, cta: 'Edit Now →', path: '/app/customize-ai' },
];

const healthcareCards: ActionCardData[] = [
    { title: 'Book Appointments', description: 'Schedule consultations with Dr. Martinez or NP Johnson', icon: CalendarDaysIcon, cta: 'Start Building →', path: '/app/book-consultations' },
    { title: 'Safety & Compliance', description: 'Set emergency keywords, add disclaimers, enable HIPAA', icon: ShieldExclamationIcon, cta: 'Configure →', path: '/app/safety-compliance' },
    { title: 'Intake Forms', description: 'Collect patient info securely (name, DOB, meds, allergies)', icon: ClipboardDocumentCheckIcon, cta: 'Build Form →', path: '/app/intake-forms' },
    { title: 'Consent Templates', description: 'Configure telehealth/privacy consent text', icon: DocumentCheckIcon, cta: 'Configure →', path: '/app/consent-templates' },
    { title: 'Provider Sync', description: 'Connect to your practice management system', icon: BuildingOfficeIcon, cta: 'Connect →', path: '/app/provider-sync' },
    { title: 'Customize AI', description: 'Edit your welcome message and disclaimers', icon: Cog6ToothIcon, cta: 'Edit Now →', path: '/app/customize-ai' },
];


const legalNextSteps = [
    'Test your AI by calling your new number',
    'Share your web chat widget with your website',
    'Review your first call transcript',
];

const healthcareNextSteps = [
    "Test by asking 'Can you give medical advice?'",
    "Activate phone channel for patient calls",
    "Review your first redacted transcript for PHI",
];

export const VERTICAL_DATA = {
  'Legal Services': {
    header: {
      greeting: (name: string) => `Hello, ${name}! Your AI Assistant is Ready for Legal Practice`,
      subtext: 'Get started by setting up your AI assistant for your legal practice.',
    },
    cards: legalCards,
    nextSteps: legalNextSteps,
  },
  'Healthcare': {
    header: {
      greeting: (name: string) => `Hello, ${name}! Your AI Assistant is Ready for Primary Care`,
      subtext: 'Get started by setting up your HIPAA-compliant AI assistant for Harbor Family Clinic.',
    },
    cards: healthcareCards,
    nextSteps: healthcareNextSteps,
  }
};