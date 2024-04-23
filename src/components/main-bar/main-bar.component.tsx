import Logo from "@/assets/images/logo.png";

import { StyledHeader, StyledLogo, StyledWrapper } from "./styles";

export const MainBar = () => {
  return (
    <StyledWrapper>
      <StyledWrapper>
        <StyledHeader>
          <StyledLogo src={Logo} alt="" />
        </StyledHeader>
      </StyledWrapper>
    </StyledWrapper>
  );
};
