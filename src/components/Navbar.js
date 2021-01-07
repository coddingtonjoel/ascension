import React, { useState, useContext } from "react";
import Logo from "./Logo";
import Button from "../components/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { NameContext } from "../context/NameContext";
import { RegionContext } from "../context/RegionContext";
import { withStyles } from "@material-ui/styles";
import styled, { keyframes } from "styled-components";

const Navbar = (props) => {
  const [name, setName] = useContext(NameContext);
  const [region, setRegion] = useContext(RegionContext);
  const [tempName, setTempName] = useState("");
  const [tempRegion, setTempRegion] = useState("na1");

  // for MUI select overwrite
  const { classes } = props;

  return (
    <Wrapper>
      <Logo className="logo" />
      <form className="form" action="GET">
        <div>
          <TextField
            InputLabelProps={{ shrink: false }}
            InputProps={{ spellCheck: false }}
            className="input"
            placeholder="Summoner Name"
            defaultValue={name}
            onChange={(e) => setTempName(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter" && tempName !== "") {
                setName(e.target.value);
                setRegion(tempRegion);
              }
            }}
          />
          <Select
            className="select"
            defaultValue={region}
            classes={{
              icon: classes.icon,
            }}
            onChange={(e) => {
              setTempRegion(e.target.value);
            }}
          >
            <MenuItem value={"na1"}>NA</MenuItem>
            <MenuItem value={"euw1"}>EUW</MenuItem>
            <MenuItem value={"eun1"}>EUNE</MenuItem>
            <MenuItem value={"br1"}>BR</MenuItem>
            <MenuItem value={"oc1"}>OCE</MenuItem>
            <MenuItem value={"kr"}>KR</MenuItem>
            <MenuItem value={"tr1"}>TR</MenuItem>
            <MenuItem value={"la1"}>LAS</MenuItem>
            <MenuItem value={"la2"}>LAN</MenuItem>
            <MenuItem value={"ru"}>RU</MenuItem>
            <MenuItem value={"jp1"}>JP</MenuItem>
          </Select>
          <Button
            onClick={() => {
              if (tempName !== "") {
                setName(tempName);
              }
              setRegion(tempRegion);
            }}
            className="btn"
          >
            Search
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

// navbar slide-in animation
const slide = keyframes`
    from {
        transform: translateY(-75px);
    }
    to {
        transform: translateY(0);
    }
`;

const Wrapper = styled.div`
  height: 75px;
  position: relative;
  background-color: #262626;
  box-shadow: 0 15px 12px 0 rgba(0, 0, 0, 0.12);
  animation: ${slide} 0.7s ease;

  .logo {
    height: 50px;
    width: 50px;
    position: absolute;
    z-index: 1;
    top: 12px;
    left: 20px;
  }

  .form {
    height: 75px;
    width: 550px;
    min-width: 400px;
    position: relative;
    top: 0;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .input {
      width: 200px;
      margin-right: 20px;

      .MuiInput-underline::before,
      .MuiInput-underline::after,
      .MuiInput-underline {
        border-bottom-color: #bbb;
      }
    }

    .select {
      color: #fff !important;
      text-align: center;
      height: 36px;
      transform: translateY(1px);
      width: 85px;
      background-color: #454545 !important;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
      border-radius: 2.4px;
    }

    .btn {
      margin: 0 15px;
    }
  }

  label.Mui-focused {
    color: #bbb;
  }

  .MuiInputBase-input {
    color: #fff;
    opacity: 1;
  }

  .MuiInput-underline::before,
  .MuiInput-underline::after,
  .MuiInput-underline {
    border-bottom-color: #000;
  }
`;

// for MUI select overwrite
const styles = (theme) => ({
  icon: {
    color: "white",
    marginRight: "5px",
  },
});

export default withStyles(styles)(Navbar);
