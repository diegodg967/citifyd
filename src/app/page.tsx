"use client";

import { Wrapper } from "@googlemaps/react-wrapper";

import { MainBar, Map } from "@/components";
import { PlacesProvider } from "@/context/places.context";

export default function Home() {
  return (
    <PlacesProvider>
      <>
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
