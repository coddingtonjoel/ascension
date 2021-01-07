import React from "react";
import styled from "styled-components";

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
          props.masteryData.map((item) => {
            return <Champion key={item.championId}>{item.name}</Champion>;
          })
        ) : (
          <p>This summoner has no champion mastery data.</p>
        )}
      </div>
    </Wrapper>
  );
};

const Champion = styled.div`
  font-size: 1rem;
`;

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
`;

export default Profile;
