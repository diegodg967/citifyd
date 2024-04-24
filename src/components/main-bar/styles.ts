import styled from "styled-components";
import Image from "next/image";

const SPACCING = "24px";

export const StyledWrapper = styled.div`
  position: fixed;
  top: ${SPACCING};
  left: ${SPACCING};
  z-index: 10;
  display: flex;
  flex-direction: column;
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

export const StyledFavoritesBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: rgb(245, 185, 40);
`;

export const StyledLogo = styled(Image)`
  width: 170px;
  height: auto;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  padding: 24px;
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  height: 44px;
  width: 100%;
  padding: 0 16px;
  border: 1px solid #dedede;
`;
