import axios from "axios";
import { createContext, useContext, useState } from "react";
import { debounce, DebouncedFunc } from "lodash";

interface PlacesProviderProps {
  children: JSX.Element;
}

interface IPlace {
  id: string;
}

interface IPlacesContextProps {
  places: IPlace[];
  debouncedGetPlaces: DebouncedFunc<(query: string) => Promise<void>>;
}

const PlacesContext = createContext<IPlacesContextProps | null>(null);

const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [places, setPlaces] = useState<IPlace[]>([]);

  const getPlaces = async (query: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/places` || "";

    const { data } = await axios.get(url, {
      params: {
        query,
      },
    });

    setPlaces(data);
  };

  const debouncedGetPlaces = debounce(getPlaces, 300);

  return (
    <PlacesContext.Provider
      value={{
        places,
        debouncedGetPlaces,
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
