// components/ThemedButton.tsx
import { useTheme } from '@/contexts/ThemeContext';

export const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonStyle = theme === 'light' ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Click me
    </button>
  );
};
