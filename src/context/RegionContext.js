import React, { useState, createContext } from "react";

export const RegionContext = createContext();

export const RegionProvider = (props) => {
  const [region, setRegion] = useState("NA");

  return (
    <RegionContext.Provider value={[region, setRegion]}>
      {props.children}
    </RegionContext.Provider>
  );
};
