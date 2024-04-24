import styled from "styled-components";

export const StyledOverflow = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  overflow: auto;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme?.colors?.border?.main};
`;
