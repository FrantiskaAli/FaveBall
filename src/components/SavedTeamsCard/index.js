import TeamAutoComplete from "../AutoComplete";
import React from "react";
import '../SavedTeamsPage/SavedTeamsStyle.css'

function SavedTeamsCard(props) {

  const saveMySecondTeam = (item) => {
    localStorage.setItem('secondTeam', item.name);
    window.location.reload(false);
  }

  return (
    <>
      <div className="row d-flex align-items-center justify-content-around me-5 ms-5">
        <div className="card homepagecard col-sm-6 col-md-4 col-lg-3">
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h5 className="card-title card-title-info">{props.teamName}</h5>
            <p className="card-text lihp text-center">Home ground: <p className="information">{props.groundName}</p></p>
            <p className="card-text lihp text-center">Capacity: <p className="information">{props.groundCapacity}</p> people</p>
            <p className="card-text lihp text-center">League: <p className="information">{props.leagueName}</p></p>
            <p className="card-text lihp text-center">League position: <p className="information">{props.leaguePosition}</p></p>
            <p className="card-text lihp text-center">Games played: <p className="information">{props.leaguePlayed}</p></p>
            <p className="card-text lihp text-center">Current points: <p className="information">{props.leaguePoints}</p></p>
          </div>
        </div>
        <div className="card homepagecard col-sm-6 col-md-4 col-lg-3">
          <div className="card-body d-flex flex-column align-items-center justify-content-around">
            <h3 className="card-title card-title-info">Records</h3>
            <p className="card-text lihp text-center">{props.WINdescription}:</p>
            <p className="card-text information">
              {props.WINhomeTeamName} <strong>{props.WINhomeTeamscore} - {props.WINawayTeamScore}</strong> {props.WINawayTeamName}
            </p>
            <p className="card-text information2 text-center">
              Date: {props.WINdate}. Attendance: {props.WINattendance}
            </p>
            <p className="card-text lihp text-center">{props.LOSSdescription}:</p>
            <p className="card-text information">
              {props.LOSShomeTeamName} <strong>{props.LOSShomeTeamscore} - {props.LOSSawayTeamScore}</strong> {props.LOSSawayTeamName}
            </p>
            <p className="card-text information2 text-center">
              Date: {props.LOSSdate}. Game attendance: {props.LOSSattendance}
            </p>
            <p className="card-text lihp text-center">{props.SCOREdescription}:</p>
            <p className="card-text information">
              {props.SCOREhomeTeamName} <strong>{props.SCOREhomeTeamscore} - {props.SCOREawayTeamScore}</strong> {props.SCOREawayTeamName}
            </p>
            <p className="card-text information2 text-center">
              Date: {props.SCOREdate}. Game attendance: {props.SCOREattendance}
            </p>
            <p className="card-text lihp text-center">{props.HIGHdescription}:</p>
            <p className="card-text information">
              {props.HIGHhomeTeamName} <strong>{props.HIGHhomeTeamscore} - {props.HIGHawayTeamScore}</strong> {props.HIGHawayTeamName}
            </p>
            <p className="card-text information2 text-center">
              Date: {props.HIGHdate}. Game attendance: {props.HIGHattendance}
            </p>
            <p className="card-text lihp text-center">{props.LOWdescription}:</p>
            <p className="card-text information">
              {props.LOWhomeTeamName} <strong>{props.LOWhomeTeamscore} - {props.LOWawayTeamScore}</strong> {props.LOWawayTeamName}
            </p>
            <p className="card-text information2 text-center">
              Date: {props.LOWdate}. Game attendance: {props.LOWattendance}
            </p>
          </div>
        </div>
        <div className="card homepagecard col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center">
          <div className="card-body">
            <h5 className="card-title card-title-info">Top Goalscorer</h5>
          </div>
          <img src={props.playerImg} className="card-img-top playerImg" alt="Top Goalscorer of this football team" />
          <div className="card-body">
            <p className="card-text card-title-info">
              {props.firstName} {props.lastName}
            </p>
            <p className="card-text lihp text-center">Goals scored: <span className="information">{props.goals}</span></p>
          </div>
        </div>
      </div>
      {/* remove bottom border rounding from team card and remove top border rounding from the comparison div below*/}
      <div className="card card-footer me-5 ms-5 d-flex flex-row align-items-center justify-content-center">
      <div className="card-body d-flex flex-row">
      <small className="card-text comparison align-self-center">
            Choose a team to compare your favourite team against:
          </small>
          <TeamAutoComplete whichPage={saveMySecondTeam} />
        </div>
      </div>

      {/* <div className="card">
                <h4>{name}</h4>
                <img src={iconSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Statistics</h5>
                    <p>League: {league}</p>
                    <p className="card-text">League Position: {leaguePosition}</p>
                    <p className="card-text">Current Points: {currentPoints}</p>
                    <p className="card-text">Goals For: {goalsFor}</p>
                    <p className="card-text">Goals Against: {goalsAgainst}</p>
                    <p className="card-text">Goals Difference: {goalDifference}</p>
                    <hr />
                    <h5>News</h5>
                    <p className="card-text">{newsArticle1}</p>
                    <p className="card-text">{newsArticle2}</p>
                    <p className="card-text">{newsArticle3}</p>
                </div>
            </div> */}
    </>
  );
}

export default SavedTeamsCard;
