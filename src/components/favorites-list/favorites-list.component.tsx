import { PlaceCard } from "@/components/place-card";
import { usePlaces } from "@/context/places.context";
import { IPlace } from "@/types/places";

import { StyledOverflow, StyledWrapper } from "./styles";

export const FavoritesList = () => {
  const { favorites, filteredFavorites } = usePlaces();

  const favoritesToRender = filteredFavorites.length
    ? filteredFavorites
    : favorites;

  return (
    <StyledOverflow>
      <StyledWrapper>
        {favoritesToRender.map((place) => {
          return <PlaceCard key={place.placeId} place={place} isFavorite />;
        })}
      </StyledWrapper>
    </StyledOverflow>
  );
};
