import { FiHeart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

import { SquareButton } from "@/components";

import { StyledWrapper } from "./styles";

export const MenuBar = () => {
  return (
    <StyledWrapper>
      <SquareButton
        active
        callback={() => console.log("Home")}
        icon={<FiSearch size={16} />}
        title="Search Places"
      />
      <SquareButton
        callback={() => console.log("Home")}
        icon={<FiHeart size={16} />}
        title="Favorites"
      />
    </StyledWrapper>
  );
};
