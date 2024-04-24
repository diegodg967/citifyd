import { ButtonHTMLAttributes, ReactNode } from "react";

import { StyledWButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  callback: () => void;
  icon: ReactNode;
}

export const SquareButton = ({ active = false, callback, icon }: Props) => {
  return (
    <StyledWButton onClick={callback} active={active}>
      {icon}
    </StyledWButton>
  );
};
