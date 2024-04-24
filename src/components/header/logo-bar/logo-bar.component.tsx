import { useTheme } from "styled-components";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import Logo from "@/assets/images/logo.png";
import { usePlaces } from "@/context/places.context";

import {
  StyledColumn,
  StyledLogo,
  StyledMenuWrapper,
  StyledWrapper,
} from "./styles";

export const LogoBar = () => {
  const theme = useTheme();
  const { responsiveBarIsOpen, setResponsiveBarIsOpen } = usePlaces();

  return (
    <StyledWrapper>
      <StyledColumn>
        <StyledMenuWrapper>
          {responsiveBarIsOpen ? (
            <FiX
              color={theme.colors.secondary.contrastText}
              size={24}
              onClick={() => setResponsiveBarIsOpen((state) => !state)}
            />
          ) : (
            <FiMenu
              color={theme.colors.secondary.contrastText}
              size={24}
              onClick={() => setResponsiveBarIsOpen((state) => !state)}
            />
          )}
        </StyledMenuWrapper>
      </StyledColumn>
      <StyledColumn>
        <StyledLogo alt="" src={Logo} priority />
      </StyledColumn>
      <StyledColumn />
    </StyledWrapper>
  );
};
