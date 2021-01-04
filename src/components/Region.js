import React from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Region = () => {
  return (
    <StyledBtn>
      <MenuItem value={"NA"}>NA</MenuItem>
      <MenuItem value={"EUW"}>EUW</MenuItem>
      <MenuItem value={"EUNE"}>EUNE</MenuItem>
      <MenuItem value={"BR"}>BR</MenuItem>
      <MenuItem value={"OCE"}>OCE</MenuItem>
      <MenuItem value={"KR"}>KR</MenuItem>
      <MenuItem value={"TR"}>TR</MenuItem>
      <MenuItem value={"LAS"}>LAS</MenuItem>
      <MenuItem value={"LAN"}>LAN</MenuItem>
      <MenuItem value={"RU"}>RU</MenuItem>
      <MenuItem value={"JP"}>JP</MenuItem>
    </StyledBtn>
  );
};

const StyledBtn = styled(Select).attrs((props) => {
  defaultValue: "NA";
  variant: props.variant || "contained";
  className: props.className;
})`
  color: #fff !important;
  text-align: center;
  height: 36px;
  width: 80px;
  background-color: #454545 !important;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2.4px;
`;

export default Region;
