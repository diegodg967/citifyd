import { IPlace } from "@/types/places";

interface Props {
  map: google.maps.Map | google.maps.StreetViewPanorama | undefined;
  places: IPlace[];
}

export const addSingleMarkers = ({ map, places }: Props) => {
  return places.map((place) => {
    const { lat, lng } = place.position;

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
    });

    marker.addListener("click", () => {
      console.log("Marker clicked!", place.name);
    });

    return marker;
  });
};
