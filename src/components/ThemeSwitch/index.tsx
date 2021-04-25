import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeIco, ThemeSlider } from './styles';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSlider>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'light'}
      />
      <ThemeIco checked={theme === 'light'}>
        {theme === 'light' ? <FaSun size="2rem" /> : <FaMoon size="2rem" />}
      </ThemeIco>
    </ThemeSlider>
  );
};
