import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import Checkbox from "@material-ui/core/Checkbox";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import FilterIcon from "@material-ui/icons/FilterList";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Profile = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  let currentMasteryData = props.masteryData;

  // gather top 5 champions to display images of
  let topFive = [];
  for (let i = 0; i < 5; i++) {
    topFive.push(currentMasteryData[i]);
  }

  const [sortValue, setSortValue] = useState("Mastery Points");

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // update list order (currentMasteryData) when sortValue changes
  useEffect(() => {
    if (sortValue === "Mastery Points") {
      console.log("POINTS");
    } else if (sortValue === "Mastery Level") {
      console.log("LEVEL");
    } else if (sortValue === "Champion Name") {
      console.log("NAME");
    } else if (sortValue === "Chest Available") {
      console.log("CHEST");
    } else if (sortValue === "Recently Played") {
      console.log("RECENT");
    }
  }, [sortValue]);

  return (
    <Wrapper>
      <div className="top">
        <div className="icon-container">
          <img
            draggable={false}
            src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/profileicon/${props.profileIconId}.png`}
            alt="Summoner Icon"
          />
          <span>{props.summonerLevel}</span>
        </div>
        <div className="name-container">
          <h1>{props.name}</h1>
          <p>Current Solo/Duo Rank: {props.rank}</p>
        </div>
        {currentMasteryData.length > 0 ? (
          <div className="five-container">
            <p>Highest Mastery Champions</p>
            <div className="five-container-flex">
              {topFive.map((item) => (
                <img
                  draggable={false}
                  key={item.championId}
                  src={item.img}
                  alt={item.name}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        {currentMasteryData.length > 0 ? (
          <div className="table-container">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              className="menuButton"
            >
              <FilterIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <RadioGroup
                style={{
                  outline: "none",
                  border: "none",
                  userSelect: "none",
                  padding: "10px 30px",
                }}
                value={sortValue}
                onChange={handleSortChange}
              >
                <FormControlLabel
                  onClick={handleMenuClose}
                  value="Mastery Points"
                  control={<Radio color="default" />}
                  label="Mastery Points"
                />
                <FormControlLabel
                  onClick={handleMenuClose}
                  value="Mastery Level"
                  control={<Radio color="default" />}
                  label="Mastery Level"
                />
                <FormControlLabel
                  onClick={handleMenuClose}
                  value="Champion Name"
                  control={<Radio color="default" />}
                  label="Champion Name"
                />
                <FormControlLabel
                  onClick={handleMenuClose}
                  value="Chest Available"
                  control={<Radio color="default" />}
                  label="Chest Available"
                />
                <FormControlLabel
                  onClick={handleMenuClose}
                  value="Recently Played"
                  control={<Radio color="default" />}
                  label="Recently Played"
                />
              </RadioGroup>
            </Menu>
            <Table
              stickyHeader
              style={{ backgroundColor: "white" }}
              className="table"
              size={"small"}
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#525252",
                      height: "35px",
                    }}
                    width={30}
                    align={"center"}
                  >
                    Order
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#525252",
                      height: "35px",
                    }}
                    width={50}
                  >
                    Champion
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#525252",
                      height: "35px",
                    }}
                    width={30}
                    align={"center"}
                  >
                    Level
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#525252",
                      height: "35px",
                    }}
                    width={100}
                    align={"left"}
                  >
                    Mastery Points
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#525252",
                      height: "35px",
                    }}
                    width={30}
                    align={"center"}
                  >
                    Chest
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#525252",
                      height: "35px",
                    }}
                    width={150}
                    align={"left"}
                  >
                    Last Played
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentMasteryData.map((item, index) => {
                  let dateObj = new Date(item.lastPlayTime);
                  let time = dateObj.toLocaleDateString();
                  time = time.replace(",", " @");

                  return (
                    <TableRow key={item.championId}>
                      <TableCell align={"center"}>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align={"center"}>
                        {item.championLevel}
                      </TableCell>
                      <TableCell align={"left"}>
                        <NumberFormat
                          thousandSeparator={true}
                          value={item.championPoints}
                          displayType={"text"}
                        ></NumberFormat>
                      </TableCell>
                      <TableCell align={"center"}>
                        <Checkbox
                          checked={item.chestGranted}
                          className="checkbox"
                          color="default"
                        />
                      </TableCell>
                      <TableCell>{time}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <p>This summoner has no champion mastery data.</p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 75px);
  width: 100vw;

  .top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    margin-left: 40px;
    margin-bottom: 20px;

    .icon-container {
      width: 125px;
      border-radius: 16px;
      position: relative;

      img {
        background-color: #fff;
        padding: 8px;
        height: 125px;
        width: 125px;
        user-select: none;
        border-radius: 16px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      }

      span {
        height: 24px;
        width: 56px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.4);
        padding: 2px 10px;
        position: relative;
        left: 46px;
        bottom: 8px;
        user-select: none;
      }
    }

    .name-container {
      margin-left: 60px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      transform: translateY(-16px);

      h1 {
        font-family: "OpenSans-SemiBold", "Open Sans", sans-serif;
        font-weight: 600;
      }

      p {
        font-family: "OpenSans-Light", "Open Sans", sans-serif;
        font-weight: 300;
        margin-top: 12px;
      }
    }

    .five-container {
      background-image: linear-gradient(180deg, #ffe5c4 0%, #f9b1b1 98%);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      padding: 12px;
      position: absolute;
      right: 40px;
      transform: translateY(-8px);
      user-select: none;

      p {
        font-family: "OpenSans-Light", "Open Sans", sans-serif;
        font-weight: 300;
        display: block;
        text-align: center;
        margin-bottom: 10px;
      }

      img {
        height: 65px;
        width: 65px;
        border-radius: 10px;
        margin: 10px;
      }

      &-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .checkbox {
    user-select: none;
    height: 6px;
    pointer-events: none;
  }

  .table-container {
    width: 93%;
    margin: auto;
    overflow-y: scroll;
    height: 492px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    position: relative;
  }

  .menuButton {
    position: fixed;
    transform: translate(960px, 8px);
    width: 30px;
    height: 30px;
    z-index: 3;
    background-color: white;
  }

  .menu-item {
    padding: 100px !important;
    margin: 100px !important;
  }
`;

export default Profile;
