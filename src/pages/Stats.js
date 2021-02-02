import React, { useState, useEffect, useContext } from "react";
import { NameContext } from "../context/NameContext";
import { RegionContext } from "../context/RegionContext";
require("dotenv").config();
import Navbar from "../components/Navbar";
import axios from "axios";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import { temporary1, temporary2 } from "../context/temp";

const Stats = () => {
  const [name, setName] = useContext(NameContext);
  const [region, setRegion] = useContext(RegionContext);
  const [content, setContent] = useState(<Loading />);

  let id;
  let profileIconId;
  let summonerName;
  let summonerLevel;
  let rank;
  let patch;

  // raw JSON data about champions from Riot's CDN
  let championJSON;

  useEffect(() => {
    setContent(<Loading />);
    axios
      .get("https://joelc-dev-api.herokuapp.com/access", {
        auth: {
          username: temporary1,
          password: temporary2,
        },
      })
      .then((responseData) => {
        // res => basic account information including summoner id
        axios
          .get(
            //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${responseData.data}`
            `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${responseData.data}`
          )
          .then((res) => {
            console.log(res);
            id = res.data.id;
            profileIconId = res.data.profileIconId;
            summonerLevel = res.data.summonerLevel;
            summonerName = res.data.name;

            // res => summoner's ranked information
            axios
              .get(
                //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${responseData.data}`
                `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${responseData.data}`
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
                    //`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/YepThatsMahogany?api_key=${responseData.data}`
                    `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${responseData.data}`
                  )
                  .then((res) => {
                    // list of all raw mastery with ids and unix time rather than consumable data for the user
                    let masteryData = res.data;

                    // get updated patch version so that all Data Dragon data is accurate
                    axios
                      .get(
                        "https://ddragon.leagueoflegends.com/api/versions.json"
                      )
                      .then((res) => {
                        patch = res.data[0];

                        axios
                          .get(
                            `http://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/champion.json`
                          )
                          .then((res) => {
                            championJSON = res.data.data;

                            // add object attribute for each champion in mastery linking their champion id to their champion name and image
                            // effectively links champions.json (from Riot's CDN) to this app
                            try {
                              masteryData.map((item) => {
                                let name;
                                let iconName;

                                for (const [key, value] of Object.entries(
                                  championJSON
                                )) {
                                  if (value.key == item.championId) {
                                    name = value.name;
                                    iconName = value.image.full;
                                  }
                                }

                                // add champion name attribute to masteryData items
                                // add champion image attribute to masteryData items
                                item.name = name;
                                item.img = `http://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${iconName}`;
                                return item;
                              });
                            } catch (err) {
                              console.log(err);
                            }

                            console.log(masteryData);

                            // gather top 5 champions to display images of
                            let topFive = [];
                            if (masteryData !== [] && masteryData.size >= 5) {
                              for (let i = 0; i < 5; i++) {
                                topFive.push(masteryData[i]);
                              }
                            }

                            setContent(
                              <Profile
                                masteryData={masteryData}
                                id={id}
                                name={summonerName}
                                summonerLevel={summonerLevel}
                                profileIconId={profileIconId}
                                rank={rank}
                                topFive={topFive}
                              />
                            );
                          })
                          .catch((err) => console.log(err));
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
                  setContent(
                    "An error has occurred. Please restart Ascension."
                  );
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
      })
      .catch((err) => console.log(err));
  }, [name, region]);

  return (
    <div>
      <Navbar />
      {content}
    </div>
  );
};

export default Stats;
