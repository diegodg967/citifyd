"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper } from "@googlemaps/react-wrapper";

import { MainBar, Map } from "@/components";
import { GlobalStyle } from "@/styles/global-style";
import { PlacesProvider } from "@/context/places.context";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <PlacesProvider>
        <>
          <MainBar />
          <Wrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            libraries={["places"]}
          >
            <Map
            // mapId="map_id"
            // locations={LOCATIONS}
            />
          </Wrapper>
        </>
      </PlacesProvider>
    </>
  );
}
