import { usePlaces } from "@/context/places.context";
import { IPlace } from "@/types/places";

import { StyledName, StyledWrapper } from "./styles";
import { SquareButton } from "..";
import { FiHeart } from "react-icons/fi";
import { MouseEvent, MouseEventHandler } from "react";

interface Props {
  place: IPlace;
}

export const PlaceCard = ({ place }: Props) => {
  const { selectedPlaceId, setSelectedPlaceId, setFavorites } = usePlaces();

  const isSelected = place.placeId === selectedPlaceId;

  const handlePlaceClick = () => {
    setSelectedPlaceId(place.placeId);
  };

  const handleAddToFavoritesClick = (event: MouseEvent) => {
    event.stopPropagation();

    setSelectedPlaceId(place.placeId);
    setFavorites((prev) => [...prev, place]);
  };

  return (
    <StyledWrapper onClick={handlePlaceClick} $selected={isSelected}>
      <StyledName>{place.name}</StyledName>
      <SquareButton
        active={false}
        onClick={handleAddToFavoritesClick}
        icon={<FiHeart size={16} />}
        title="Add to Favorites"
      />
    </StyledWrapper>
  );
};
