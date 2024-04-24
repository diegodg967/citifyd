import { useTheme } from "styled-components";
import { FiLoader } from "react-icons/fi";

import { StyledWrapper } from "./styles";

export const Loader = () => {
  const theme = useTheme();

  return (
    <StyledWrapper>
      <FiLoader color={theme.colors.primary.main} size={36} />
    </StyledWrapper>
  );
};
