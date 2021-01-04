import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ExportButton = (props) => {
  return (
    <StyledBtn onClick={props.onClick} className={props.className}>
      {props.children}
    </StyledBtn>
  );
};

const StyledBtn = styled(Button).attrs((props) => {
  variant: props.variant || "contained";
  className: props.className;
})`
  color: #fff !important;
  height: 36px;
  width: 80px;
  background-color: #454545 !important;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2.4px;
`;

export default ExportButton;
