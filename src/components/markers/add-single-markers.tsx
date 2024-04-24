import { MARKER_URL } from "@/constants/marker";
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
      icon: {
        anchor: new google.maps.Point(15, 50),
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(31, 25),
        url: MARKER_URL,
      },
      position: { lat, lng },
      map,
    });

    marker.addListener("click", () => {
      markerCallback(place.placeId);
    });

    return marker;
  });
};
