import styled, { css } from "styled-components";

interface Props {
  $selected: boolean;
}

export const StyledWrapper = styled.div<Props>`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #dedede;
  cursor: pointer;
  transition: padding-bottom 0.15s ease-out;

  &:hover {
    background-color: #fafafa;
  }

  ${({ $selected }) => {
    if ($selected) {
      return css`
        padding-left: 15px;
        padding-bottom: 100px;
        border-left: 5px solid rgb(245, 185, 40);
      `;
    }
  }}
`;

export const StyledName = styled.span`
  display: flex;
  align-items: center;
  flex: 1;
`;
