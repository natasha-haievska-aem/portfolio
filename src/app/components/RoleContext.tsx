import { createContext, useContext, useState, type ReactNode } from 'react';

export type RoleKey = 'fullStackDev' | 'emEng';

interface RoleContextType {
  role: RoleKey;
  setRole: (role: RoleKey) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<RoleKey>('fullStackDev');

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
