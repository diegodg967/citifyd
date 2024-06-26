import styled, { css } from "styled-components";

const SPACCING = "24px";

interface IStyledWrapperProps {
  $open: boolean;
}

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  position: fixed;
  top: ${SPACCING};
  left: ${SPACCING};
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${SPACCING} * 2);
  width: calc(400px - ${SPACCING} * 2);
  background: ${({ theme }) => theme?.colors?.background?.main};
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme?.breakpoints?.sm}) {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-shadow: none;

    ${({ $open }) =>
      !$open &&
      css`
        display: none;
      `}
  }
`;

export const StyledResponsiveWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
`;

export const StyledLogoWrapper = styled.div``;

export const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: rgb(245, 185, 40);
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
  border: 1px solid ${({ theme }) => theme?.colors?.border?.main};
  background: ${({ theme }) => theme?.colors?.background?.hover};
`;
