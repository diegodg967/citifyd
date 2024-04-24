import styled, { css } from "styled-components";

interface ButtonProps {
  _active: boolean;
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

  ${({ _active }) => {
    if (_active) {
      return css`
        background: rgb(245, 185, 40);
        border: 2px solid rgb(245, 185, 40);
        pointer-events: none;
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
