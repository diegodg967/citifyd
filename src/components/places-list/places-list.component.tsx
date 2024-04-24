import { usePlaces } from "@/context/places.context";
import { PlaceCard } from "../place-card";
import { StyledOverflow, StyledWrapper } from "./styles";

export const PlacesList = () => {
  const { places } = usePlaces();

  return (
    <StyledOverflow>
      <StyledWrapper>
        {places.map((place) => {
          return <PlaceCard key={place.placeId} place={place} />;
        })}
      </StyledWrapper>
    </StyledOverflow>
  );
};
