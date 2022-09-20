import { useEffect, useState } from "react";
import useReactiveLocalStorage from "./useReactiveLocalStorage";

type ColorScheme = "light" | "dark";

const DEFAULT_COLOR_SCHEME: ColorScheme = "light";

export const COLOR_SCHEME_LOCAL_STORAGE_KEY = "colorScheme";

const useColorScheme = (): ColorScheme => {
  // Get browser color scheme reactively from prefers-color-scheme media query
  const [browserColorScheme, setBrowserColorScheme] = useState<
    ColorScheme | undefined
  >();
  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const lightQuery = window.matchMedia("(prefers-color-scheme: light)");

    const darkListener = ({ matches }: MediaQueryListEvent) => {
      if (matches) {
        setBrowserColorScheme("dark");
      }
    };
    const lightListener = ({ matches }: MediaQueryListEvent) => {
      if (matches) {
        setBrowserColorScheme("light");
      }
    };

    darkQuery.addEventListener("change", darkListener);
    lightQuery.addEventListener("change", lightListener);

    return () => {
      darkQuery.removeEventListener("change", darkListener);
      lightQuery.removeEventListener("change", lightListener);
    };
  }, [setBrowserColorScheme]);

  // Get user color scheme from local storage
  const [userColorScheme] = useReactiveLocalStorage(
    COLOR_SCHEME_LOCAL_STORAGE_KEY
  );

  return userColorScheme === "light"
    ? "light"
    : userColorScheme === "dark"
    ? "dark"
    : browserColorScheme || DEFAULT_COLOR_SCHEME;
};

export default useColorScheme;
