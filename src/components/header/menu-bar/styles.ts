import Image from "next/image";
import styled from "styled-components";

interface StyledColumnProps {
  $justify?: "flex-start" | "center" | "flex-end";
}

export const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledColumn = styled.div<StyledColumnProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({ $justify }) => $justify || "center"};
  gap: 12px;
  padding: 0 20px;
`;
