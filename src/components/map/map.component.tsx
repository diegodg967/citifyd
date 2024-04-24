import { useEffect, useRef } from "react";

import { addSingleMarkers } from "@/components/markers";
import { usePlaces } from "@/context/places.context";
import { LIGHT_STYLE } from "@/styles/map-styles";

import { StyledMapWrapper } from "./styles";

const DEFAULT_CENTER = { lat: -25.4471113, lng: -49.2939218 };
const DEFAULT_ZOOM = 16;

export const Map = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { locations, places } = usePlaces();

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: LIGHT_STYLE,
        zoom: DEFAULT_ZOOM,
      });

      addSingleMarkers({ map, places });

      if (locations.length > 0 && map) {
        const bounds = new google.maps.LatLngBounds();

        locations.forEach((location) => {
          bounds.extend(new google.maps.LatLng(location.lat, location.lng));
        });

        map.fitBounds(bounds);
      }
    }
  }, [ref, locations, places]);

  return (
    <StyledMapWrapper ref={ref} style={{ width: "100vw", height: "100vh" }} />
  );
};
