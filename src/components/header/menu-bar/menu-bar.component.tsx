import { FiHeart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

import { SquareButton } from "@/components";
import { usePlaces } from "@/context/places.context";
import { TAB_TYPE } from "@/enums";

import { StyledWrapper } from "./styles";

export const MenuBar = () => {
  const { setTab, tab } = usePlaces();

  return (
    <StyledWrapper>
      <SquareButton
        active={tab === TAB_TYPE.SEARCH}
        icon={<FiSearch size={16} />}
        onClick={() => setTab(TAB_TYPE.SEARCH)}
        title="Search Places"
      />
      <SquareButton
        active={tab === TAB_TYPE.FAVORITES}
        icon={<FiHeart size={16} />}
        onClick={() => setTab(TAB_TYPE.FAVORITES)}
        title="Favorites"
      />
    </StyledWrapper>
  );
};
