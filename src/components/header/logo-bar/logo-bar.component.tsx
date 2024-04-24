import Logo from "@/assets/images/logo.png";

import { StyledLogo, StyledWrapper } from "./styles";

export const LogoBar = () => {
  return (
    <StyledWrapper>
      <StyledLogo alt="" src={Logo} priority />
    </StyledWrapper>
  );
};
