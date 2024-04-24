export interface IPlaceResponse {
  formatted_address: string;
  geometry: {
    location: google.maps.LatLngLiteral;
  };
  name: string;
  place_id: string;
  position: google.maps.LatLngLiteral;
}

export interface IPlace {
  address: string;
  name: string;
  placeId: string;
  position: google.maps.LatLngLiteral;
}
