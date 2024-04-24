import styled, { css } from "styled-components";

interface ButtonProps {
  $active: boolean;
}

export const StyledWButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  ${({ $active }) => {
    if ($active) {
      return css`
        background: ${(props) => props.theme.colors.primary.main};
        border: 2px solid rgb(245, 185, 40);
      `;
    }

    return css`
      background: none;
      border: 2px solid rgb(204, 204, 204);

      &:hover {
        border: 2px solid rgb(245, 185, 40);
      }
    `;
  }}
`;
