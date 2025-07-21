import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const useThemeEffect = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
};