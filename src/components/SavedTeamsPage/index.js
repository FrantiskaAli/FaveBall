import React, { useState, useEffect } from 'react';
import SavedTeamsCard from "../SavedTeamsCard";
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';


const teamsJSON = require('../../assets/teams-list.json');

let inputTeamID;
let inputTeamComp;

// loops through JSON file to find the team id based on team input name
function findTeamIDByName(inputTeamName) {
  for (let i = 0; i < teamsJSON.competitions.length; i++) {
    for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
      if (teamsJSON.competitions[i].teams[j].name === inputTeamName) {
        inputTeamID = teamsJSON.competitions[i].teams[j].id;
        return inputTeamID;
      }
    }
  }
}

// loops through JSON file to find the team competition based on team input name
function findTeamCompByName(inputTeamName) {
  for (let i = 0; i < teamsJSON.competitions.length; i++) {
    for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
      if (teamsJSON.competitions[i].teams[j].name === inputTeamName) {
        inputTeamComp = teamsJSON.competitions[i].fullName;
        return inputTeamComp;
      }
    }
  }
}

findTeamIDByName('Manchester United');
findTeamCompByName('Manchester United');

function SavedTeamsPage() {

  // const savedTeams = ['Liverpool'];
  const teamName = localStorage.getItem('NewsInfo');
  const secondTeamName = localStorage.getItem('secondTeam');

  const savedTeams = [];
  savedTeams.push(teamName);

  if (secondTeamName !== null) {
    savedTeams.push(secondTeamName);
  }


  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchData() {

      const newTeamData = [];

      savedTeams.forEach(async (team) => {
        const options = {
          method: 'GET',
          url: 'https://football-web-pages1.p.rapidapi.com/team.json',
          params: { team: findTeamIDByName(team) },
          headers: {
            'X-RapidAPI-Key': '536ff355c8mshd9ba3e88969d743p1bde80jsn7f1737cb1dca',
            'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
          }
        };

        const options2 = {
          method: 'GET',
          url: 'https://football-web-pages1.p.rapidapi.com/league-progress.json',
          params: { team: findTeamIDByName(team) },
          headers: {
            'X-RapidAPI-Key': 'f09425a46emsh01c4f5ed39e351cp1e53f3jsn2869b4c15bef',
            'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
          }
        };

        const options3 = {
          method: 'GET',
          url: 'https://football-web-pages1.p.rapidapi.com/records.json',
          params: { team: findTeamIDByName(team) },
          headers: {
            'X-RapidAPI-Key': '9544be795fmsh8c85152f5af63efp1e9152jsna5f2ff665f28',
            'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
          }
        };

        const options4 = {
          method: 'GET',
          url: 'https://football-web-pages1.p.rapidapi.com/goalscorers.json',
          params: { team: findTeamIDByName(team) },
          headers: {
            'X-RapidAPI-Key': 'fc5e9482cfmsh42a35e3aad603fap1240a9jsn7a261f1f8a32',
            'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
          }
        };

        try {
          let groundData = await axios.request(options);

          let leagueData = await axios.request(options2);

          let recordsData = await axios.request(options3);

          let goalscorerData = await axios.request(options4);

          const options5 = {
            method: 'GET',
            url: 'https://joj-image-search.p.rapidapi.com/v2/',
            // params: {q: 'robert lewandowski portrait'},
            params: { q: `${goalscorerData.data.goalscorers.players[0]["first-name"]} ${goalscorerData.data.goalscorers.players[0]["last-name"]} portrait` },
            headers: {
              'X-RapidAPI-Key': 'fc5e9482cfmsh42a35e3aad603fap1240a9jsn7a261f1f8a32',
              'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
            }
          };

          let goalscorerImg = await axios.request(options5);

          // setTeamData([...teamData,
          newTeamData.push(
            {
              teamName: team,
              teamID: findTeamIDByName(team),
              ground: {
                groundName: groundData.data.team.ground,
                groundCapacity: groundData.data.team.capacity,
              },
              league: {
                leagueName: findTeamCompByName(team),
                leaguePosition: leagueData.data["league-progress"].progress[leagueData.data["league-progress"].progress.length - 1].position,
                leaguePlayed: leagueData.data["league-progress"].progress[leagueData.data["league-progress"].progress.length - 1].played,
                leaguePoints: leagueData.data["league-progress"].progress[leagueData.data["league-progress"].progress.length - 1].points
              },
              goalscorers: {
                firstName: goalscorerData.data.goalscorers.players[0]["first-name"],
                lastName: goalscorerData.data.goalscorers.players[0]["last-name"],
                playerID: goalscorerData.data.goalscorers.players[0].id,
                goals: goalscorerData.data.goalscorers.players[0].goals.length,
                playerImg: goalscorerImg.data.response.images[0].image.url
              },
              records: {
                biggestVictory: {
                  description: recordsData.data.records.records[2].description,
                  date: recordsData.data.records.records[2].matches[0].date,
                  matchID: recordsData.data.records.records[2].matches[0].id,
                  attendance: recordsData.data.records.records[2].matches[0].attendance,
                  homeTeamName: recordsData.data.records.records[2].matches[0]["home-team"].name,
                  homeTeamScore: recordsData.data.records.records[2].matches[0]["home-team"].score,
                  awayTeamName: recordsData.data.records.records[2].matches[0]["away-team"].name,
                  awayTeamScore: recordsData.data.records.records[2].matches[0]["away-team"].score,
                },
                heaviestDefeat: {
                  description: recordsData.data.records.records[5].description,
                  date: recordsData.data.records.records[5].matches[0].date,
                  matchID: recordsData.data.records.records[5].matches[0].id,
                  attendance: recordsData.data.records.records[5].matches[0].attendance,
                  homeTeamName: recordsData.data.records.records[5].matches[0]["home-team"].name,
                  homeTeamScore: recordsData.data.records.records[5].matches[0]["home-team"].score,
                  awayTeamName: recordsData.data.records.records[5].matches[0]["away-team"].name,
                  awayTeamScore: recordsData.data.records.records[5].matches[0]["away-team"].score,
                },
                highestScoring: {
                  description: recordsData.data.records.records[8].description,
                  date: recordsData.data.records.records[8].matches[0].date,
                  matchID: recordsData.data.records.records[8].matches[0].id,
                  attendance: recordsData.data.records.records[8].matches[0].attendance,
                  homeTeamName: recordsData.data.records.records[8].matches[0]["home-team"].name,
                  homeTeamScore: recordsData.data.records.records[8].matches[0]["home-team"].score,
                  awayTeamName: recordsData.data.records.records[8].matches[0]["away-team"].name,
                  awayTeamScore: recordsData.data.records.records[8].matches[0]["away-team"].score,
                },
                highestAttendance: {
                  description: recordsData.data.records.records[11].description,
                  date: recordsData.data.records.records[11].matches[0].date,
                  matchID: recordsData.data.records.records[11].matches[0].id,
                  attendance: recordsData.data.records.records[11].matches[0].attendance,
                  homeTeamName: recordsData.data.records.records[11].matches[0]["home-team"].name,
                  homeTeamScore: recordsData.data.records.records[11].matches[0]["home-team"].score,
                  awayTeamName: recordsData.data.records.records[11].matches[0]["away-team"].name,
                  awayTeamScore: recordsData.data.records.records[11].matches[0]["away-team"].score,
                },
                lowestAttendance: {
                  description: recordsData.data.records.records[14].description,
                  date: recordsData.data.records.records[14].matches[0].date,
                  matchID: recordsData.data.records.records[14].matches[0].id,
                  attendance: recordsData.data.records.records[14].matches[0].attendance,
                  homeTeamName: recordsData.data.records.records[14].matches[0]["home-team"].name,
                  homeTeamScore: recordsData.data.records.records[14].matches[0]["home-team"].score,
                  awayTeamName: recordsData.data.records.records[14].matches[0]["away-team"].name,
                  awayTeamScore: recordsData.data.records.records[14].matches[0]["away-team"].score,
                }
              }
            });

          if (newTeamData.length === savedTeams.length) {
            setTeamData(newTeamData);
          }

        } catch (error) {
          console.log(error);
        }
      })
    }
    fetchData();

  }, [])


  return (
    <section id="homepage">
      <div id="homepage-wrapper">

        <Header />

        <div>
          {
            teamData.map(function (t) {
              return <SavedTeamsCard
                key={t.teamID}
                teamName={t.teamName}

                groundName={t.ground.groundName}
                groundCapacity={t.ground.groundCapacity}

                leagueName={t.league.leagueName}
                leaguePosition={t.league.leaguePosition}
                leaguePlayed={t.league.leaguePlayed}
                leaguePoints={t.league.leaguePoints}

                firstName={t.goalscorers.firstName}
                lastName={t.goalscorers.lastName}
                goals={t.goalscorers.goals}
                playerImg={t.goalscorers.playerImg}

                WINdescription={t.records.biggestVictory.description}
                WINdate={t.records.biggestVictory.date}
                WINattendance={t.records.biggestVictory.attendance}
                WINhomeTeamName={t.records.biggestVictory.homeTeamName}
                WINhomeTeamscore={t.records.biggestVictory.homeTeamScore}
                WINawayTeamName={t.records.biggestVictory.awayTeamName}
                WINawayTeamScore={t.records.biggestVictory.awayTeamScore}

                LOSSdescription={t.records.heaviestDefeat.description}
                LOSSdate={t.records.heaviestDefeat.date}
                LOSSattendance={t.records.heaviestDefeat.attendance}
                LOSShomeTeamName={t.records.heaviestDefeat.homeTeamName}
                LOSShomeTeamscore={t.records.heaviestDefeat.homeTeamScore}
                LOSSawayTeamName={t.records.heaviestDefeat.awayTeamName}
                LOSSawayTeamScore={t.records.heaviestDefeat.awayTeamScore}

                SCOREdescription={t.records.highestScoring.description}
                SCOREdate={t.records.highestScoring.date}
                SCOREattendance={t.records.highestScoring.attendance}
                SCOREhomeTeamName={t.records.highestScoring.homeTeamName}
                SCOREhomeTeamscore={t.records.highestScoring.homeTeamScore}
                SCOREawayTeamName={t.records.highestScoring.awayTeamName}
                SCOREawayTeamScore={t.records.highestScoring.awayTeamScore}

                HIGHdescription={t.records.highestAttendance.description}
                HIGHdate={t.records.highestAttendance.date}
                HIGHattendance={t.records.highestAttendance.attendance}
                HIGHhomeTeamName={t.records.highestAttendance.homeTeamName}
                HIGHhomeTeamscore={t.records.highestAttendance.homeTeamScore}
                HIGHawayTeamName={t.records.highestAttendance.awayTeamName}
                HIGHawayTeamScore={t.records.highestAttendance.awayTeamScore}

                LOWdescription={t.records.lowestAttendance.description}
                LOWdate={t.records.lowestAttendance.date}
                LOWattendance={t.records.lowestAttendance.attendance}
                LOWhomeTeamName={t.records.lowestAttendance.homeTeamName}
                LOWhomeTeamscore={t.records.lowestAttendance.homeTeamScore}
                LOWawayTeamName={t.records.lowestAttendance.awayTeamName}
                LOWawayTeamScore={t.records.lowestAttendance.awayTeamScore}
              />
            })
          }
        </div>
        <Footer />
      </div>
    </section>
  )



}
export default SavedTeamsPage;