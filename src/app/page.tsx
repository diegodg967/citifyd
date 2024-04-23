"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper } from "@googlemaps/react-wrapper";

import { MainBar, Map } from "@/components";
import { GlobalStyle } from "@/styles/global-style";

export default function Home() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    console.log("places", places);
  }, [places]);

  const fetchPlaces = async () => {
    const url = "http://localhost:3000/api/places";

    const { data: places } = await axios.get(url, {
      params: {
        query: "restaurants in Curitiba",
      },
    });

    setPlaces(places);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <>
      <GlobalStyle />
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
  );
}
