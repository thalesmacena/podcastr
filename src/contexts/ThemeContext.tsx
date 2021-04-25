import GlobalStyles from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/themes';
import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    const storedTheme = Cookies.get('podcastr/theme');
    setTheme(storedTheme || 'light');
  }, []);

  useEffect(() => {
    Cookies.set('podcastr/theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentThemeProvider
        theme={theme === 'light' ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};
