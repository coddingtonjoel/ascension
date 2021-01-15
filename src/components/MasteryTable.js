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
import SearchIcon from "@material-ui/icons/ArrowForward";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";

const MasteryTable = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMasteryData, setCurrentMasteryData] = useState(
    props.masteryData
  );
  const [sortValue, setSortValue] = useState("Mastery Points");
  const [championValue, setChampionValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedChampion, setSelectedChampion] = useState(
    props.masteryData[0]
  );
  const [selectedChampionTime, setSelectedChampionTime] = useState(null);
  const [modalLoading, setModalLoading] = useState(true);
  const [modalErrText, setModalErrText] = useState(null);

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

  const sortByPoints = (a, b) => {
    let comparison = 0;
    if (a.championPoints > b.championPoints) {
      comparison = 1;
    } else if (a.championPoints < b.championPoints) {
      comparison = -1;
    }
    return comparison;
  };

  const sortByName = (a, b) => {
    const tempA = a.name.toUpperCase();
    const tempB = b.name.toUpperCase();

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  };

  const sortByChest = (a, b) => {
    let comparison = 0;
    if (a.chestGranted && !b.chestGranted) {
      comparison = -1;
    } else comparison = 1;
    return comparison;
  };

  const sortByRecent = (a, b) => {
    let comparison = 0;
    if (a.lastPlayTime < b.lastPlayTime) {
      comparison = 1;
    } else if (a.lastPlayTime > b.lastPlayTime) {
      comparison = -1;
    }
    return comparison;
  };

  const findChampion = (a) => {
    return a.name.toUpperCase() === championValue.toUpperCase();
  };

  // update list order (currentMasteryData) when sortValue or championValue changes
  useEffect(() => {
    if (sortValue === "Mastery Points") {
      setLoading(true);
      let temp = props.masteryData;
      temp = temp.sort(sortByPoints);
      temp = temp.reverse();
      setCurrentMasteryData(temp);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } else if (sortValue === "Champion Name") {
      setLoading(true);
      let temp = props.masteryData;
      temp = temp.sort(sortByName);
      setCurrentMasteryData(temp);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } else if (sortValue === "Chest Granted") {
      setLoading(true);
      let temp = props.masteryData;
      temp = temp.sort(sortByPoints);
      temp = temp.reverse();
      temp = temp.sort(sortByChest);
      setCurrentMasteryData(temp);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } else if (sortValue === "Recently Played") {
      setLoading(true);
      let temp = props.masteryData;
      temp = temp.sort(sortByRecent);
      setCurrentMasteryData(temp);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [sortValue]);

  useEffect(() => {
    if (championValue !== "") {
      let temp = props.masteryData;
      temp = temp.find(findChampion);
      if (temp !== undefined) {
        setSelectedChampion(temp);
        setModalLoading(false);
      } else {
        setModalErrText("Not found.");
      }
    }
  }, [championValue]);

  useEffect(() => {
    if (selectedChampion !== null) {
      let dateObj = new Date(selectedChampion.lastPlayTime);
      setSelectedChampionTime(dateObj.toLocaleDateString());
    }
    setModalLoading(false);
  }, [selectedChampion]);

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
            value="Champion Name"
            control={<Radio color="default" onClick={handleMenuClose} />}
            label="Champion Name"
          />
          <FormControlLabel
            value="Chest Granted"
            control={<Radio color="default" onClick={handleMenuClose} />}
            label="Chest Granted"
          />
          <FormControlLabel
            value="Recently Played"
            control={<Radio color="default" onClick={handleMenuClose} />}
            label="Recently Played"
          />
        </RadioGroup>
        <div className="input">
          <TextField
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                if (selectedChampion !== undefined && e.target.value !== "") {
                  setModalOpen(true);
                }
              }
            }}
            style={{
              bottom: "5px",
              left: "36px",
              paddingBottom: "20px",
              width: "48%",
            }}
            InputLabelProps={{ shrink: false }}
            InputProps={{ spellCheck: false }}
            placeholder={"Champion"}
            onBlur={(e) => {
              setModalLoading(true);
              if (championValue == e.target.value) {
                if (championValue !== "") {
                  let temp = currentMasteryData;
                  temp = temp.find(findChampion);
                  if (temp !== undefined) {
                    setSelectedChampion(temp);
                    setModalLoading(false);
                  } else {
                    setModalErrText("Not found.");
                  }
                }
              } else {
                setChampionValue(e.target.value);
              }
            }}
          />
          <Fab
            onClick={() => {
              if (selectedChampion !== undefined) {
                setModalLoading(true);
                setModalOpen(true);
              }
            }}
            style={{
              height: "36px",
              width: "36px",
              bottom: "6px",
              transform: "translateX(45px)",
              boxShadow: "none",
            }}
          >
            <SearchIcon style={{ opacity: 0.8 }} />
          </Fab>
        </div>
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

            return (
              <TableRow key={item.championId}>
                <TableCell align={"center"} width={30}>
                  {index + 1}
                </TableCell>
                <TableCell width={50}>{item.name}</TableCell>
                <TableCell width={30} align={"center"}>
                  {item.championLevel}
                </TableCell>
                <TableCell width={100} align={"left"}>
                  <NumberFormat
                    thousandSeparator={true}
                    value={item.championPoints}
                    displayType={"text"}
                  ></NumberFormat>
                </TableCell>
                <TableCell width={30} align={"center"}>
                  <Checkbox
                    style={{ pointerEvents: "none", userSelect: "none" }}
                    checked={item.chestGranted}
                    className="checkbox"
                    color="default"
                    disabled
                  />
                </TableCell>
                <TableCell width={150}>{time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {!modalLoading ? (
        <Dialog
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setModalErrText(null);
          }}
        >
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
                >
                  Champion
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    backgroundColor: "#525252",
                    height: "35px",
                  }}
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
                  align={"left"}
                >
                  Last Played
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align={"center"}>{selectedChampion.name}</TableCell>
                <TableCell align={"center"}>
                  {selectedChampion.championLevel}
                </TableCell>
                <TableCell align={"center"}>
                  <NumberFormat
                    thousandSeparator={true}
                    value={selectedChampion.championPoints}
                    displayType={"text"}
                  ></NumberFormat>
                </TableCell>
                <TableCell align={"center"}>
                  <Checkbox
                    checked={selectedChampion.chestGranted}
                    className="checkbox"
                    color="default"
                    disabled
                  />
                </TableCell>
                <TableCell align={"center"}>{selectedChampionTime}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Dialog>
      ) : (
        <Dialog
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setModalErrText(null);
          }}
        >
          {modalErrText === null ? (
            <span></span>
          ) : (
            <span
              style={{
                height: "107px",
                width: "506px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
              }}
            >
              Champion not found.
            </span>
          )}
        </Dialog>
      )}
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

  p.err {
    color: red;
    font-size: 0.7rem;
    margin-bottom: 10px;
  }
`;

export default MasteryTable;
