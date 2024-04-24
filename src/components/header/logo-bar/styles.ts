import Image from "next/image";
import styled from "styled-components";

export const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  background: rgb(55, 56, 64);
`;

export const StyledLogo = styled(Image)`
  width: 170px;
  height: auto;
`;

export const StyledColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(1),
  &:nth-child(3) {
    width: 66px;
    height: 66px;
  }
`;

export const StyledMenuWrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.sm}) {
    display: flex;
  }
`;
