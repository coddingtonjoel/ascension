import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/styles";
import { NameContext } from "../context/NameContext";
import { RegionContext } from "../context/RegionContext";

const startup = (props) => {
  const [redir, setRedir] = useState(null);
  const [name, setName] = useContext(NameContext);
  const [region, setRegion] = useContext(RegionContext);

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
            // onChange={(e) => }
            onKeyUp={(e) => {
              setName(e.target.value);
              if (e.key === "Enter" && e.target.value !== "") {
                setRedir(<Redirect to="/stats" />);
              }
            }}
          />
          <Select
            className="select"
            defaultValue="na1"
            classes={{
              icon: classes.icon,
            }}
            onChange={(e) => {
              setRegion(e.target.value);
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
              if (name !== "") {
                setRedir(<Redirect to="/stats" />);
              }
            }}
            className="btn"
          >
            Search
          </Button>
        </div>
      </form>
      <p className="legal">
        Ascension isn't endorsed by Riot Games and doesn't reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing Riot Games properties. Riot Games, and all associated
        properties are trademarks or registered trademarks of Riot Games, Inc.
      </p>
      {redir}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .logo {
    position: relative;
    height: calc(314px + 7rem);
    width: 314px;
    left: 50%;
    top: 1rem;
    transform: translateX(-50%);
  }

  .form {
    background-color: #fff;
    width: 550px;
    min-width: 400px;
    margin: auto;
    background: #fafafa;
    box-shadow: 0 15px 12px 0 rgba(0, 0, 0, 0.22);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .input {
      width: 200px;
      margin-right: 20px;
    }

    .select {
      color: #fff !important;
      text-align: center;
      height: 36px;
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
    color: #555;
  }

  .MuiInput-underline::after,
  .MuiInput-underline {
    border-bottom-color: #555;
  }

  .legal {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 10%;
    width: 80%;
    line-height: 2;
    text-align: center;
    opacity: 30%;
    font-size: 0.8rem;
    user-select: none;
    font-family: "OpenSans-Light", "Open Sans", sans-serif;
    font-weight: 300;
  }
`;

// for MUI select overwrite
const styles = (theme) => ({
  icon: {
    color: "white",
    marginRight: "5px",
  },
});

export default withStyles(styles)(startup);
