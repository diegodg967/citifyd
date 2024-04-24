"use client";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Open_Sans } from "next/font/google";

import { MainBar, Map } from "@/components";
import { GlobalStyle } from "@/styles/global-style";
import { PlacesProvider } from "@/context/places.context";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <PlacesProvider>
        <div className={openSans.className}>
          <MainBar />
          <Wrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            libraries={["places"]}
          >
            <Map />
          </Wrapper>
        </div>
      </PlacesProvider>
    </>
  );
}
