import { useEffect } from 'react';
import useColorScheme from './useColorScheme';

const useColorSchemeBodyClass = () => {
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (colorScheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [colorScheme]);
};

export default useColorSchemeBodyClass;
