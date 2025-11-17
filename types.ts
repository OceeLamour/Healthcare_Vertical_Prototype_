import type React from 'react';

export interface User {
  id: number;
  name: string;
  vertical: 'Legal Services' | 'Healthcare';
  avatarUrl: string;
}

export interface ActionCardData {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  cta: string;
  path: string;
}