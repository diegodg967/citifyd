"use client";

import { PlacesProvider } from "@/context/places.context";
import { GlobalStyle } from "@/styles/global-style";
import { CustomThemeProvider as ThemeProvider } from "@/context/theme.context";
import { Template } from "@/components/template";

export default function Home() {
  return (
    <PlacesProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Template />
      </ThemeProvider>
    </PlacesProvider>
  );
}
