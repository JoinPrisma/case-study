import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { Size } from './types';

export default function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }, 250);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [setWindowSize]);

  return windowSize;
}
