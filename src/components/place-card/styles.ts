import styled, { css } from "styled-components";

interface Props {
  $selected: boolean;
}

export const StyledWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.border?.main};
  cursor: pointer;
  transition: padding-bottom 0.15s ease-out;
  color: ${(props) => props.theme.colors.text.main};

  &:hover {
    background-color: ${(props) => props.theme.colors.background.hover};
  }

  ${({ $selected }) => {
    if ($selected) {
      return css`
        padding-left: 15px;
        border-left: 5px solid ${(props) => props.theme.colors.primary.main};
      `;
    }
  }}
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledName = styled.span`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const StyledDetails = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`;
