import { ButtonHTMLAttributes, ReactNode } from "react";

import { StyledWButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon: ReactNode;
}

export const SquareButton = ({ active = false, icon, ...props }: Props) => {
  return (
    <StyledWButton $active={active} {...props}>
      {icon}
    </StyledWButton>
  );
};
