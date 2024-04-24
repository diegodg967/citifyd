"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Open_Sans } from "next/font/google";

import { usePlaces } from "@/context/places.context";
import { PLACE_THEME } from "@/enums";
import { darkTheme, lightTheme } from "@/styles/theme";

interface Props {
  children: ReactNode;
}

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const Template = ({ children }: Props) => {
  const { placesTheme } = usePlaces();

  return (
    <ThemeProvider
      theme={placesTheme === PLACE_THEME.LIGHT ? lightTheme : darkTheme}
    >
      <div className={openSans.className}>{children}</div>
    </ThemeProvider>
  );
};
