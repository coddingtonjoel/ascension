import React from "react";
import styled from "styled-components";
import blitzcrank from "../assets/not-found.png";

const NotFound = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>Summoner not found.</h1>
        <p>Maybe try a different region?</p>
        <img draggable={false} src={blitzcrank} alt="Confused Blitzcrank" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 75px);
  width: 100vw;
  position: relative;

  .content {
    position: absolute;
    text-align: center;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  h1 {
    font-family: "OpenSans-SemiBold";
  }

  p {
    font-family: "OpenSans-Light";
    margin: 20px 0;
  }

  img {
    height: 260px;
    width: 260px;
  }
`;

export default NotFound;
