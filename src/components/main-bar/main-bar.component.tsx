import { ChangeEvent, useState } from "react";
import axios from "axios";

import Logo from "@/assets/images/logo.png";
import { usePlaces } from "@/context/places.context";

import {
  StyledFavoritesBar,
  StyledHeader,
  StyledInput,
  StyledInputWrapper,
  StyledLogo,
  StyledWrapper,
} from "./styles";
import { PlacesList } from "../places-list";

export const MainBar = () => {
  const [query, setQuery] = useState("");
  const { debouncedGetPlaces, isFetchingPlaces } = usePlaces();

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchedQuery = event.target.value;
    setQuery(searchedQuery);

    debouncedGetPlaces(searchedQuery);
  };

  return (
    <StyledWrapper>
      <StyledWrapper>
        <StyledHeader>
          <StyledLogo alt="" src={Logo} priority={false} />
        </StyledHeader>

        <StyledFavoritesBar></StyledFavoritesBar>

        <StyledInputWrapper>
          <StyledInput
            onChange={handleQueryChange}
            placeholder="Type to search a place..."
            type="text"
            value={query}
          />
        </StyledInputWrapper>

        {isFetchingPlaces ? <div>Loading places...</div> : <PlacesList />}
      </StyledWrapper>
    </StyledWrapper>
  );
};
