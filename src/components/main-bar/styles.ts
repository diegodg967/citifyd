import styled from "styled-components";
import Image from "next/image";

const SPACCING = "16px";

export const StyledWrapper = styled.div`
  position: fixed;
  top: ${SPACCING};
  left: ${SPACCING};
  z-index: 10;
  height: calc(100vh - ${SPACCING} * 2);
  width: calc(400px - ${SPACCING} * 2);
  background: white;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
  background: rgb(55, 56, 64);
`;

export const StyledLogo = styled(Image)`
  width: 170px;
  height: auto;
`;
