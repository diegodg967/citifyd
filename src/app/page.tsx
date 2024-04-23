"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper } from "@googlemaps/react-wrapper";

import { Map } from "@/components";

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
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      libraries={["places"]}
    >
      <Map
      // mapId="map_id"
      // locations={LOCATIONS}
      />
    </Wrapper>
  );
}
