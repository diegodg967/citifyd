"use client";

import { Wrapper } from "@googlemaps/react-wrapper";

import { MainBar } from "@/components/main-bar";
import { Map } from "@/components/map";
import { PlacesProvider } from "@/context/places.context";
import { GlobalStyle } from "@/styles/global-style";
import { CustomThemeProvider as ThemeProvider } from "@/context/theme.context";

export default function Home() {
  return (
    <PlacesProvider>
      <ThemeProvider>
        <GlobalStyle />
        <MainBar />
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          libraries={["places"]}
        >
          <Map />
        </Wrapper>
      </ThemeProvider>
    </PlacesProvider>
  );
}
