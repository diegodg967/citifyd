import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { debounce, DebouncedFunc, set } from "lodash";
import axios from "axios";

import { LOCAL_STORAGE_KEYS, PLACE_THEME, TAB_TYPE } from "@/enums";
import { usePersistedState } from "@/hooks/use-persisted-state";
import { IPlace, IPlaceResponse } from "@/types/places";

interface PlacesProviderProps {
  children: JSX.Element;
}

interface IPlacesContextProps {
  debouncedGetPlaces: DebouncedFunc<(query: string) => Promise<void>>;
  isFetchingPlaces: boolean;
  locations: google.maps.LatLngLiteral[];
  places: IPlace[];

  favorites: IPlace[];
  setFavorites: Dispatch<SetStateAction<IPlace[]>>;
  favoritesFilter: string;
  setFavoritesFilter: Dispatch<SetStateAction<string>>;
  filteredFavorites: IPlace[];

  selectedPlaceId: string | null;
  setSelectedPlaceId: Dispatch<SetStateAction<string | null>>;

  tab: TAB_TYPE.SEARCH | TAB_TYPE.FAVORITES;
  setTab: Dispatch<SetStateAction<TAB_TYPE>>;

  placesTheme: PLACE_THEME.LIGHT | PLACE_THEME.DARK;
  setPlacesTheme: Dispatch<
    SetStateAction<PLACE_THEME.LIGHT | PLACE_THEME.DARK>
  >;
}

const PlacesContext = createContext<IPlacesContextProps | null>(null);

const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [isFetchingPlaces, setIsFetchingPlaces] = useState<boolean>(false);
  const [tab, setTab] = useState<TAB_TYPE.SEARCH | TAB_TYPE.FAVORITES>(
    TAB_TYPE.SEARCH
  );
  const [favorites, setFavorites] = usePersistedState<IPlace[]>(
    LOCAL_STORAGE_KEYS.FAVORITES,
    []
  );
  const [favoritesFilter, setFavoritesFilter] = useState<string>("");
  const filteredFavorites = favorites.filter((place) => {
    return place.name.toLowerCase().includes(favoritesFilter.toLowerCase());
  });
  const [placesTheme, setPlacesTheme] = useState<
    PLACE_THEME.LIGHT | PLACE_THEME.DARK
  >(PLACE_THEME.LIGHT);

  const getLocations = () => {
    if (tab === TAB_TYPE.FAVORITES) {
      return favorites.map((favorite) => favorite.position);
    }

    return places.map((place) => place.position);
  };

  const locations = getLocations();

  // useEffect(() => {
  //   console.log("locations", locations);
  // }, [locations]);

  const getPlaces = async (query: string) => {
    try {
      setIsFetchingPlaces(true);

      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/places` || "";

      const { data } = await axios.get(url, {
        params: {
          query,
        },
      });

      const parsedPlaces = data.map((place: IPlaceResponse) => {
        return {
          name: place.name,
          placeId: place.place_id,
          position: place.geometry.location,
        };
      });

      setPlaces(parsedPlaces);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingPlaces(false);
    }
  };

  const debouncedGetPlaces = debounce(getPlaces, 300);

  return (
    <PlacesContext.Provider
      value={{
        debouncedGetPlaces,
        isFetchingPlaces,
        locations,
        places,

        favorites,
        setFavorites,
        favoritesFilter,
        setFavoritesFilter,
        filteredFavorites,

        selectedPlaceId,
        setSelectedPlaceId,

        tab,
        setTab,

        placesTheme,
        setPlacesTheme,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

const usePlaces = (): IPlacesContextProps => {
  const context = useContext(PlacesContext);

  if (!context) {
    throw new Error("usePlaces must be used within PlacesProvider");
  }

  return context;
};

export { PlacesProvider, usePlaces };
