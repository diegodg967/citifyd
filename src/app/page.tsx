"use client";

import { Wrapper } from "@googlemaps/react-wrapper";

import { MainBar, Map } from "@/components";
import { PlacesProvider } from "@/context/places.context";
import { GlobalStyle } from "@/styles/global-style";

export default function Home() {
  return (
    <PlacesProvider>
      <>
        <GlobalStyle />
        <MainBar />
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          libraries={["places"]}
        >
          <Map />
        </Wrapper>
      </>
    </PlacesProvider>
  );
}
