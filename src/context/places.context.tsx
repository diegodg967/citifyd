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

import { LOCAL_STORAGE_KEYS, TAB_TYPE } from "@/enums";
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

  selectedPlaceId: string | null;
  setSelectedPlaceId: Dispatch<SetStateAction<string | null>>;

  tab: TAB_TYPE.SEARCH | TAB_TYPE.FAVORITES;
  setTab: Dispatch<SetStateAction<TAB_TYPE>>;
}

const PlacesContext = createContext<IPlacesContextProps | null>(null);

const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [locations, setLocations] = useState<google.maps.LatLngLiteral[]>([]);
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [isFetchingPlaces, setIsFetchingPlaces] = useState<boolean>(false);
  const [favorites, setFavorites] = usePersistedState<IPlace[]>(
    LOCAL_STORAGE_KEYS.FAVORITES,
    []
  );
  const [tab, setTab] = useState<TAB_TYPE.SEARCH | TAB_TYPE.FAVORITES>(
    TAB_TYPE.SEARCH
  );

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
      setLocations(
        data.map((place: IPlaceResponse) => place.geometry.location)
      );
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

        selectedPlaceId,
        setSelectedPlaceId,

        tab,
        setTab,
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
