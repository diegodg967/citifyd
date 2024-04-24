import { ChangeEvent, useState } from "react";

import { usePlaces } from "@/context/places.context";

import { Header } from "@/components/header";
import { PlacesList } from "@/components/places-list";

import { StyledInput, StyledInputWrapper, StyledWrapper } from "./styles";

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
      <Header />

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
  );
};
