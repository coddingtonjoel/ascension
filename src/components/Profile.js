import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import Checkbox from "@material-ui/core/Checkbox";

const Profile = (props) => {
  // gather top 5 champions to display images of
  let topFive = [];
  for (let i = 0; i < 5; i++) {
    topFive.push(props.masteryData[i]);
  }

  console.log(topFive);

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
        {props.masteryData.length > 0 ? (
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
        {props.masteryData.length > 0 ? (
          <TableContainer>
            <Table className="table" size={"small"}>
              <TableHead>
                <TableRow>
                  <TableCell align={"center"}>Order</TableCell>
                  <TableCell>Champion</TableCell>
                  <TableCell align={"center"}>Level</TableCell>
                  <TableCell align={"center"}>Mastery Points</TableCell>
                  <TableCell align={"center"}>Chest</TableCell>
                  <TableCell>Last Played</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.masteryData.map((item, index) => {
                  let dateObj = new Date(item.lastPlayTime);
                  let time = dateObj.toLocaleString();
                  time = time.replace(",", " @");

                  return (
                    <TableRow key={item.championId}>
                      <TableCell align={"center"}>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align={"center"}>
                        {item.championLevel}
                      </TableCell>
                      <TableCell align={"center"}>
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
                        />
                      </TableCell>
                      <TableCell>{time}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
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
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      transform: translateY(-16px);

      h1 {
        font-family: "OpenSans-SemiBold";
      }

      p {
        font-family: "OpenSans-Light";
        margin-top: 12px;
      }
    }

    .five-container {
      background-image: linear-gradient(180deg, #ffe5c4 0%, #f9b1b1 98%);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      padding: 12px;
      position: absolute;
      right: 50px;
      user-select: none;

      p {
        font-family: "Roboto";
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
    pointer-events: none;
  }

  .table {
    overflow: scroll;
  }
`;

export default Profile;
