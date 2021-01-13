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
import CircularProgress from "@material-ui/core/CircularProgress";

const MasteryTable = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMasteryData, setCurrentMasteryData] = useState(
    props.masteryData
  );
  const [sortValue, setSortValue] = useState("Mastery Points");
  const [loading, setLoading] = useState(false);

  // general handlers for sort menu
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const sortByName = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  // update list order (currentMasteryData) when sortValue changes
  useEffect(() => {
    if (sortValue === "Mastery Points") {
      console.log(sortValue);
      // currentMasteryData.forEach((item, i) => {
      //   let nextItem = currentMasteryData[i + 1];
      //   if (item.championPoints < currentMasteryData[i + 1].championPoints) {
      //     currentMasteryData.swap(i, i + 1);
      //   }
      // });
    } else if (sortValue === "Mastery Level") {
      console.log(sortValue);
      // for (let i = 0; i < currentMasteryData.size; i++) {
      //   if (
      //     currentMasteryData[i].championLevel <
      //     currentMasteryData[i + 1].championLevel
      //   ) {
      //     if (
      //       currentMasteryData[i].championPoints <
      //       currentMasteryData[i + 1].championPoints
      //     ) {
      //       currentMasteryData.swap(i, i + 1);
      //     }
      //   }
      // }
    } else if (sortValue === "Champion Name") {
      setLoading(true);
      console.log(sortValue);
      setCurrentMasteryData(currentMasteryData.sort(sortByName));
      setLoading(false);
    } else if (sortValue === "Chest Available") {
      console.log(sortValue);
    } else if (sortValue === "Recently Played") {
      console.log(sortValue);
    }
  }, [sortValue]);

  return (
    <Wrapper>
      <Button onClick={handleMenuClick} className="menuButton">
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
            value="Mastery Points"
            control={<Radio color="default" onClick={handleMenuClose} />}
            label="Mastery Points"
          />
          <FormControlLabel
            value="Mastery Level"
            control={<Radio color="default" onClick={handleMenuClose} />}
            label="Mastery Level"
          />
          <FormControlLabel
            value="Champion Name"
            control={<Radio color="default" onClick={handleMenuClose} />}
            label="Champion Name"
          />
          <FormControlLabel
            value="Chest Available"
            control={<Radio color="default" onClick={handleMenuClose} />}
            label="Chest Available"
          />
          <FormControlLabel
            value="Recently Played"
            control={<Radio color="default" onClick={handleMenuClose} />}
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
          {!loading ? (
            currentMasteryData.map((item, index) => {
              let dateObj = new Date(item.lastPlayTime);
              let time = dateObj.toLocaleDateString();

              return (
                <TableRow key={item.championId}>
                  <TableCell align={"center"}>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align={"center"}>{item.championLevel}</TableCell>
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
            })
          ) : (
            <TableRow
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TableCell height={430}>
                <div className="progress">
                  <CircularProgress color={"secondary"} />
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 93%;
  margin: auto;
  overflow-y: scroll;
  height: 492px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  position: relative;

  .checkbox {
    user-select: none;
    height: 6px;
    pointer-events: none;
  }

  .menuButton {
    position: fixed;
    transform: translate(945px, 8px);
    width: 30px;
    height: 30px;
    z-index: 3;
    background-color: white;
  }

  .menu-item {
    padding: 100px !important;
    margin: 100px !important;
  }

  .loading {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default MasteryTable;
