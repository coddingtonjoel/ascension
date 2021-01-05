import React, { useState, createContext } from "react";

export const RegionContext = createContext();

export const RegionProvider = (props) => {
  const [region, setRegion] = useState("na1");

  return (
    <RegionContext.Provider value={[region, setRegion]}>
      {props.children}
    </RegionContext.Provider>
  );
};
