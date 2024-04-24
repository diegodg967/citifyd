import { IPlace } from "@/types/places";

interface Props {
  map: google.maps.Map | google.maps.StreetViewPanorama | undefined;
  markerCallback: (placeId: string) => void;
  places: IPlace[];
}

export const addSingleMarkers = ({ map, markerCallback, places }: Props) => {
  return places.map((place) => {
    const { lat, lng } = place.position;

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
    });

    marker.addListener("click", () => {
      markerCallback(place.placeId);
    });

    return marker;
  });
};
