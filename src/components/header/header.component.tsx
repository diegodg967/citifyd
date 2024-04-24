import { LogoBar } from "./logo-bar";
import { MenuBar } from "./menu-bar";
import { StyledWrapper } from "./styles";

export const Header = () => {
  return (
    <StyledWrapper>
      <LogoBar />
      <MenuBar />
      <h1>Search Places</h1>
    </StyledWrapper>
  );
};
