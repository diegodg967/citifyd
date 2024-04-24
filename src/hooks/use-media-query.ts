import { useState, useEffect } from "react";
import { useTheme } from "styled-components";

export const useMediaQuery = (query: string) => {
  const theme = useTheme();
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    mediaQuery.addListener(handleChange);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [query]);

  return matches;
};
