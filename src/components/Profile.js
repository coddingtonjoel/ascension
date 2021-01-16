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
import MasteryTable from "./MasteryTable";

const Profile = (props) => {
  const masteryData = props.masteryData;
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
        {props.topFive[0] !== undefined ? (
          <div className="five-container">
            <p>Highest Mastery Champions</p>
            <div className="five-container-flex">
              {props.topFive.map((item) => (
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
        {masteryData[0] !== undefined ? (
          <MasteryTable masteryData={masteryData} />
        ) : (
          <p style={{ textAlign: "center" }}>
            This summoner has no champion mastery data.
          </p>
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
`;

export default Profile;
