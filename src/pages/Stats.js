import React, { useContext } from "react";
import styled from "styled-components";
import { NameContext } from "../context/NameContext";
import { RegionContext } from "../context/RegionContext";

const Stats = () => {
  const [name, setName] = useContext(NameContext);
  const [region, setRegion] = useContext(RegionContext);
  return <Wrapper>{name}</Wrapper>;
};

const Wrapper = styled.div``;

export default Stats;
