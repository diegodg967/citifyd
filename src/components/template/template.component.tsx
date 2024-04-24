import { Wrapper } from "@googlemaps/react-wrapper";
import { useTheme } from "styled-components";

import { MainBar } from "@/components/main-bar";
import { Map } from "@/components/map";
import { LogoBar } from "../header/logo-bar";

export const Template = () => {
  const theme = useTheme();
  const isSmallScreen = `(max-width: ${theme.breakpoints.sm})`;

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
