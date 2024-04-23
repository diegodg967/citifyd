import { ChangeEvent, useState } from "react";
import axios from "axios";

import Logo from "@/assets/images/logo.png";
import { usePlaces } from "@/context/places.context";

import {
  StyledHeader,
  StyledInput,
  StyledInputWrapper,
  StyledLogo,
  StyledWrapper,
} from "./styles";

export const MainBar = () => {
  const [query, setQuery] = useState("");
  const { debouncedGetPlaces } = usePlaces();

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchedQuery = event.target.value;
    setQuery(searchedQuery);

    debouncedGetPlaces(searchedQuery);
  };

  return (
    <StyledWrapper>
      <StyledWrapper>
        <StyledHeader>
          <StyledLogo alt="" priority={false} src={Logo} />
        </StyledHeader>
        <StyledInputWrapper>
          <StyledInput
            onChange={handleQueryChange}
            placeholder="Type to search a place..."
            type="text"
            value={query}
          />
        </StyledInputWrapper>
      </StyledWrapper>
    </StyledWrapper>
  );
};
