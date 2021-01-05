import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress className="progress" color="secondary" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 75px);
  width: 100vw;

  .MuiCircularProgress-svg {
    color: #333;
  }

  .progress {
    position: relative;
    top: 43%;
    left: -1%;
    margin: auto;
    display: block;
  }
`;

export default Loading;
