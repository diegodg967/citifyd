import { Wrapper } from "@googlemaps/react-wrapper";

import { MainBar } from "@/components/main-bar";
import { Map } from "@/components/map";

export const Template = () => {
  return (
    <>
      <MainBar />
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        libraries={["places"]}
      >
        <Map />
      </Wrapper>
    </>
  );
};
