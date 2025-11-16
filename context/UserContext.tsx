import React, { createContext, useContext, useMemo } from 'react';
import { USER_MARIA } from '../constants';
import type { User } from '../types';

interface UserContextType {
  currentUser: User;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useMemo(() => ({ currentUser: USER_MARIA }), []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};