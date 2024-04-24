import { usePlaces } from "@/context/places.context";
import { PlaceCard } from "../place-card";
import { StyledOverflow, StyledWrapper } from "./styles";

export const PlacesList = () => {
  const { places, favorites } = usePlaces();

  return (
    <StyledOverflow>
      <StyledWrapper>
        {places.map((place) => {
          const isFavorite = favorites.some(
            (favorite) => favorite.placeId === place.placeId
          );

          return (
            <PlaceCard
              key={place.placeId}
              place={place}
              isFavorite={isFavorite}
            />
          );
        })}
      </StyledWrapper>
    </StyledOverflow>
  );
};
