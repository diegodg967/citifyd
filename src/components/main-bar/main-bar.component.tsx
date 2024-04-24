import { ChangeEvent, useState } from "react";

import { usePlaces } from "@/context/places.context";

import { FavoritesList } from "@/components/favorites-list";
import { Header } from "@/components/header";
import { Loader } from "@/components/loader";
import { PlacesList } from "@/components/places-list";

import { StyledInput, StyledInputWrapper, StyledWrapper } from "./styles";
import { TAB_TYPE } from "@/enums";

export const MainBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    debouncedGetPlaces,
    isFetchingPlaces,
    favoritesFilter,
    setFavoritesFilter,
    tab,
  } = usePlaces();

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchedQuery = event.target.value;
    setSearchQuery(searchedQuery);

    debouncedGetPlaces(searchedQuery);
  };

  const handleFavoritesQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filteredFavoritesQuery = event.target.value;
    setFavoritesFilter(filteredFavoritesQuery);
  };

  const renderContent = () => {
    if (tab === TAB_TYPE.FAVORITES) {
      return (
        <>
          <StyledInputWrapper>
            <StyledInput
              onChange={handleFavoritesQueryChange}
              placeholder="Type to filter your favorites..."
              type="text"
              value={favoritesFilter}
            />
          </StyledInputWrapper>
          <FavoritesList />
        </>
      );
    }

    return (
      <>
        <StyledInputWrapper>
          <StyledInput
            onChange={handleSearchQueryChange}
            placeholder="Type to search a place..."
            type="text"
            value={searchQuery}
          />
        </StyledInputWrapper>

        {isFetchingPlaces ? <Loader /> : <PlacesList />}
      </>
    );
  };

  return (
    <StyledWrapper>
      <Header />
      {renderContent()}
    </StyledWrapper>
  );
};
