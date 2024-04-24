import { ChangeEvent, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { usePlaces } from "@/context/places.context";
import { FavoritesList } from "@/components/favorites-list";
import { Header } from "@/components/header";
import { Loader } from "@/components/loader";
import { PlacesList } from "@/components/places-list";

import {
  StyledInput,
  StyledInputWrapper,
  StyledResponsiveWrapper,
  StyledWrapper,
} from "./styles";
import { TAB_TYPE } from "@/enums";
import { useMediaQuery } from "@/hooks/use-media-query";
import { LogoBar } from "../header/logo-bar";

export const MainBar = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    debouncedGetPlaces,
    isFetchingPlaces,
    favoritesFilter,
    responsiveBarIsOpen,
    setFavoritesFilter,
    tab,
  } = usePlaces();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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

  return isSmallScreen && !responsiveBarIsOpen ? (
    <StyledResponsiveWrapper>
      <LogoBar />
    </StyledResponsiveWrapper>
  ) : (
    <StyledWrapper $open={responsiveBarIsOpen}>
      <Header />
      {renderContent()}
    </StyledWrapper>
  );
};
