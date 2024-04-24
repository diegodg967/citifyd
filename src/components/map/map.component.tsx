import { useEffect, useRef } from "react";

import { addSingleMarkers } from "@/components/markers";
import { usePlaces } from "@/context/places.context";
import { DARK_STYLE, LIGHT_STYLE } from "@/styles/map-styles";

import { StyledMapWrapper } from "./styles";
import { PLACE_THEME, TAB_TYPE } from "@/enums";

const DEFAULT_CENTER = { lat: -25.4471113, lng: -49.2939218 };
const DEFAULT_ZOOM = 16;

export const Map = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const {
    filteredFavorites,
    locations,
    places,
    placesTheme,
    setSelectedPlaceId,
    tab,
  } = usePlaces();

  const markerCallback = (placeId: string) => {
    setSelectedPlaceId(placeId);
  };

  useEffect(() => {
    if (ref.current && typeof window !== "undefined") {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: placesTheme === PLACE_THEME.LIGHT ? LIGHT_STYLE : DARK_STYLE,
        zoom: DEFAULT_ZOOM,
      });

      const getCurrentPlaces = () => {
        if (tab === TAB_TYPE.FAVORITES) {
          return filteredFavorites;
        }

        return places;
      };

      const currentPlaces = getCurrentPlaces();

      addSingleMarkers({ map, markerCallback, places: currentPlaces });

      if (currentPlaces.length > 0 && map) {
        const bounds = new google.maps.LatLngBounds();

        currentPlaces.forEach((currentPlace) => {
          bounds.extend(
            new google.maps.LatLng(
              currentPlace.position.lat,
              currentPlace.position.lng
            )
          );
        });

        const minZoomLevel = DEFAULT_ZOOM;

        google.maps.event.addListenerOnce(
          map,
          "bounds_changed",
          function (this: google.maps.Map, event) {
            if (this.getZoom() > minZoomLevel) {
              this.setZoom(minZoomLevel);
            }
          }
        );

        map.fitBounds(bounds);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredFavorites, locations, places, placesTheme, ref, tab]);

  return (
    <StyledMapWrapper ref={ref} style={{ width: "100vw", height: "100vh" }} />
  );
};
