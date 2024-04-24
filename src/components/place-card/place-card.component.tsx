import { IPlace } from "@/types/places";

import { StyledWrapper } from "./styles";

interface Props {
  place: IPlace;
}

export const PlaceCard = ({ place }: Props) => {
  return <StyledWrapper>{place.name}</StyledWrapper>;
};
