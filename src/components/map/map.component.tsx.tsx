import { useEffect, useRef, useState } from "react";
import { addClusterMarkers, addSingleMarkers } from "../markers";

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 4;

export const Map = ({
  // locations,
  useClusters = true,
  // mapId,
  className,
}: {
  // locations: ReadonlyArray<google.maps.LatLngLiteral>;
  useClusters?: boolean;
  // mapId?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // const [autoCompleteWidget, setAutoCompleteWidget] = useState<
  //   google.maps.places.Autocomplete | undefined
  // >(undefined);

  // useEffect(() => {
  //   if (
  //     ref.current &&
  //     !autoCompleteWidget &&
  //     window.google &&
  //     window.google.maps &&
  //     window.google.maps.places
  //   ) {
  //     setAutoCompleteWidget(
  //       new google.maps.places.Autocomplete(inputRef.current!, {
  //         types: ["establishment"],
  //         componentRestrictions: { country: ["US"] },
  //         fields: ["place_id"],
  //       })
  //     );
  //   }
  // }, [ref, autoCompleteWidget]);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        // mapId,
      });

      // Displays cluster markers or single markers on map when called
      // useClusters
      //   ? addClusterMarkers({ locations, map })
      //   : addSingleMarkers({ locations, map });
    }
  }, [ref]);
  // }, [ref, mapId, locations, useClusters]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};
