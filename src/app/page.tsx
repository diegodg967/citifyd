"use client";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Home() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <main>
      <div>
        <Wrapper
          apiKey={process.env.GOOGLE_MAPS_API_KEY ?? ""}
          render={render}
        ></Wrapper>
      </div>
    </main>
  );
}
