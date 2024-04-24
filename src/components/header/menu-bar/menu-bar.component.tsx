import { FiHeart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

import { SquareButton } from "@/components";
import { usePlaces } from "@/context/places.context";
import { PLACE_THEME, TAB_TYPE } from "@/enums";

import { StyledColumn, StyledWrapper } from "./styles";

export const MenuBar = () => {
  const { placesTheme, setPlacesTheme, setTab, tab } = usePlaces();

  const handleThemeChange = () => {
    setPlacesTheme(
      placesTheme === PLACE_THEME.LIGHT ? PLACE_THEME.DARK : PLACE_THEME.LIGHT
    );
  };

  return (
    <StyledWrapper>
      <StyledColumn />
      <StyledColumn>
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
      </StyledColumn>
      <StyledColumn $justify="flex-end">
        <SquareButton
          icon={
            placesTheme === PLACE_THEME.LIGHT ? (
              <FiSun size={16} />
            ) : (
              <FiMoon size={16} />
            )
          }
          onClick={handleThemeChange}
          title="Change theme"
        />
      </StyledColumn>
    </StyledWrapper>
  );
};
