import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { NameContext } from "../context/NameContext";
import { RegionContext } from "../context/RegionContext";
require("dotenv").config();
import Navbar from "../components/Navbar";
import axios from "axios";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

const Stats = () => {
  const [name, setName] = useContext(NameContext);
  const [region, setRegion] = useContext(RegionContext);
  const [content, setContent] = useState(<Loading />);

  let id;
  let profileIconId;
  let summonerLevel;
  let rank;
  (" /lol/league/v4/entries/by-summoner/{encryptedSummonerId}");
  useEffect(() => {
    setContent(<Loading />);
    axios
      .get(
        //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${process.env.KEY}`
        `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.KEY}`
      )
      .then((res) => {
        console.log(res);
        id = res.data.id;
        profileIconId = res.data.profileIconId;
        summonerLevel = res.data.summonerLevel;

        setContent(
          <Profile
            id={id}
            name={name}
            summonerLevel={summonerLevel}
            profileIconId={profileIconId}
          />
        );

        axios
          .get(
            //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${process.env.KEY}`
            `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.KEY}`
          )
          .then((res) => {
            console.log(res);
            id = res.data.id;
            profileIconId = res.data.profileIconId;
            summonerLevel = res.data.summonerLevel;
          })
          .catch((err) => {
            let status = err.response.status;
            if (status === 404) {
              setContent(<NotFound />);
            } else {
              setContent("An error has occurred. Please restart Ascension.");
            }
          });
      })
      .catch((err) => {
        let status = err.response.status;
        if (status === 404) {
          setContent(<NotFound />);
        } else {
          setContent("An error has occurred. Please restart Ascension.");
        }
      });
  }, [name, region]);

  return (
    <Wrapper>
      <Navbar />
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Stats;
