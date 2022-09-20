import { useCallback, useEffect, useState } from "react";

type UseReactiveLocalStorage = [
  value: string | null,
  setValue: (value: string | null) => void
];

export default function useReactiveLocalStorage(
  key: string
): UseReactiveLocalStorage {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const storageValue = localStorage.getItem(key);

      setValue(storageValue);
    };

    // This initializes the value with the current localStorage value
    handler();

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key, setValue]);

  const setLocalStorageValue = useCallback(
    (value: string | null) => {
      if (value) {
        localStorage.setItem(key, value);
      } else {
        localStorage.removeItem(key);
      }

      // The storage event handler will not fire on the same window that the storage is fired
      // Because of that if we must synchronize multiple components in the same window we need to
      // manually update the current window by triggering a storage event: window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new Event("storage"));
    },
    [key]
  );

  return [value, setLocalStorageValue];
}
