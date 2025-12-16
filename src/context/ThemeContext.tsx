import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
  botonBg: string;
  textBotonBg: string;
  botonBgBody: string;
  textBotonBgBody: string;
  setBotonBg: (value: string) => void;
  setTextBotonBg: (value: string) => void;
  setBotonBgBody: (value: string) => void;
  setTextBotonBgBody: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [botonBg, setBotonBg] = useState('dark');
  const [textBotonBg, setTextBotonBg] = useState('text-light');
  const [botonBgBody, setBotonBgBody] = useState('light');
  const [textBotonBgBody, setTextBotonBgBody] = useState('text-dark');

  return (
    <ThemeContext.Provider value={{ botonBg, textBotonBg, botonBgBody, textBotonBgBody, setBotonBg, setTextBotonBg, setBotonBgBody, setTextBotonBgBody }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
