import SideNav from "../SideNav"
import SideNavLink from "../SideNavLink";
import { useState, useEffect } from "react"
import SummaryCard from "../SummaryCard";
import SummaryCell from "../SummaryCell";
import Footer from "../Footer";
import Header from "../Header"
import './SummaryPage.css'



function SummaryPage() {


    useEffect(() => {
        fetchLeagues()
    }, [])

    useEffect(() => {
        fetchStats()
    }, [])

    const [leagues, setLeagues] = useState([]);
    const [currentLeague, setCurrentLeague] = useState([leagues[0]])
    const [currentTeams, setCurrentTeams] = useState([])
    



    function fetchLeagues() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ca358f8464mshb0db6b2cde321b7p1f76f7jsn19204a6d1082',
                'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
            }
        };

        fetch('https://football-web-pages1.p.rapidapi.com/competitions.json?include=teams', options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setLeagues(response.competitions);
                console.log(leagues)

            })
            .catch(err => console.error(err));
    }



    function fetchStats() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eba2657a6emsh6b99503945bb874p18892ejsnc8db9beaea3f',
                'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
            }
        };

        fetch(`https://football-web-pages1.p.rapidapi.com/league-table.json?comp=${currentLeague.id}`, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                setCurrentTeams(response['league-table'].teams);
                console.log(currentTeams)
            })
            .catch(err => console.error(err));
    }


    return (
        <>
            <Header />
            <div className="background w-100 h-100">
                <div className="text-center py-4" id="summary-header">
                    <h1 id="summary-title">Live</h1>
                    <p id="summary-subtitle">Get up-to-date with league tables and view upcoming fixtures</p>
                </div>
                <SideNav>
                    {leagues.map((league, index) => {


                        return (
                            <SideNavLink
                                name={league['full-name']}
                                index={index}
                                idnum={league.id}
                                click={(event) => {
                                    event.preventDefault();
                                    setCurrentLeague(league);
                                    console.log(currentLeague)
                                    fetchStats()
                                }
                                }
                            />
                        )
                    })}
                </SideNav>

                <SummaryCard
                    league={currentLeague['full-name']}
                >

                    {currentTeams.map((team) => {
                        return (
                            <SummaryCell
                                club={team.name}
                                clubid={team.id}
                                leagueid={currentLeague.id}
                                position={team.position}
                                played={team['all-matches'].played}
                                won={team['all-matches'].won}
                                drawn={team['all-matches'].drawn}
                                lost={team['all-matches'].lost}
                                goalDifference={team['all-matches']['goal-difference']}
                                points={team['total-points']}
                            />
                        )
                    })
                    }

                </SummaryCard>
                <Footer />
            </div>
        </>
    )
}
export default SummaryPage