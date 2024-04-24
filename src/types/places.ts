export interface IPlaceResponse {
  geometry: {
    location: google.maps.LatLngLiteral;
  };
  name: string;
  place_id: string;
  position: google.maps.LatLngLiteral;
}

export interface IPlace {
  name: string;
  placeId: string;
  position: google.maps.LatLngLiteral;
}
