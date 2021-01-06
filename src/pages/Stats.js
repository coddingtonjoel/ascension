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
  let masteryStats;

  // raw JSON data about champions from Riot's CDN
  let championJSON;

  // const index = championJSON.find((champion) => champion.key == 125);
  // console.log(index);

  useEffect(() => {
    setContent(<Loading />);
    // res => basic account information including summoner id
    axios
      .get(
        `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${process.env.KEY}`
        //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.KEY}`
      )
      .then((res) => {
        console.log(res);
        id = res.data.id;
        profileIconId = res.data.profileIconId;
        summonerLevel = res.data.summonerLevel;

        // res => summoner's ranked information
        axios
          .get(
            //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${process.env.KEY}`
            `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.KEY}`
          )
          .then((res) => {
            console.log(res);
            if (res.data.length > 0) {
              const soloDuoRank = res.data.filter(
                (queue) => queue.queueType === "RANKED_SOLO_5x5"
              );
              let tier = soloDuoRank[0].tier;
              tier = tier.toLowerCase();
              tier = tier.charAt(0).toUpperCase() + tier.slice(1);
              rank = tier + " " + soloDuoRank[0].rank;
            } else {
              rank = "Unranked";
            }

            // res => summoner's mastery
            axios
              .get(
                //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${process.env.KEY}`
                `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${process.env.KEY}`
              )
              .then((res) => {
                // list of all raw mastery with ids and unix time rather than consumable data for the user
                let masteryData = res.data;

                axios
                  .get(
                    "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json"
                  )
                  .then((res) => {
                    championJSON = res.data.data;

                    // add object attribute for each champion in mastery linking their champion id to their champion name and image
                    // effectively links champions.json (from Riot's CDN) to this app
                    masteryData.map((item) => {
                      let name;

                      for (const [key, value] of Object.entries(championJSON)) {
                        if (value.key == item.championId) {
                          name = value.name;
                        }
                      }

                      // add champion name attribute to masteryData items
                      // add champion image attribute to masteryData items
                      item.img = `http://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/${name}.png`;
                      item.name = name;
                      return item;
                    });

                    console.log(masteryData);

                    setContent(
                      <Profile
                        masteryData={masteryData}
                        id={id}
                        name={name}
                        summonerLevel={summonerLevel}
                        profileIconId={profileIconId}
                        rank={rank}
                      />
                    );
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => {
                let status = err.response.status;
                if (status === 404) {
                  setContent(<NotFound />);
                } else {
                  setContent(
                    "An error has occurred. Please restart Ascension."
                  );
                }
              })
              .catch((err) => console.log(err));
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
