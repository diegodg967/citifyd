import Image from "next/image";
import styled from "styled-components";

export const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 66px;
  background: rgb(55, 56, 64);
`;

export const StyledLogo = styled(Image)`
  width: 170px;
  height: auto;
`;
