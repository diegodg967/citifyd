import { usePlaces } from "@/context/places.context";

import { LogoBar } from "./logo-bar";
import { MenuBar } from "./menu-bar";
import { StyledWrapper } from "./styles";
import { TAB_TYPE } from "@/enums";

export const Header = () => {
  const { tab } = usePlaces();

  const title = tab === TAB_TYPE.SEARCH ? "Search Places" : "Favorites";

  return (
    <StyledWrapper>
      <LogoBar />
      <MenuBar />
      <h1>{title}</h1>
    </StyledWrapper>
  );
};
