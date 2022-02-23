/*eslint-disable*/
import React, { useEffect } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Loading from "views/LoadingPage";
import TournamentTeamCard from "components/Cards/TournamentTeamCard";

export default function TeamsPage() {
    window.scrollTo(0, 0);
    const event = JSON.parse(localStorage.getItem('event'));
    const location = useLocation();
    const history = useHistory();

    const back = () => {
        history.push(`/Events/tournaments/${event.eventName}/`);
    }

    useEffect(() => {
        console.log(event.teams)
    }, [location])
    return (
        <>
        <IndexNavbar fixed />
        {event.teams.length > 0 ? 
        <section className="header relative" style={{padding: "160px"}}>
            <div className="mx-auto" style={{paddingTop:"90px", paddingBottom:"30px"}}> 
                 <button
                    className="btn-lg btn-warning mb-1"
                    type="button"
                    onClick={back}
                    >
                    Back
                </button>
                <div className="flex flex-wrap justify-center" style={{marginTop: "20px"}}>
                    <Grid container spacing={5}>
                    {event.teams.map((team) => (
                        <Grid key={team._id} item xs={12} sm={6} md={6}>
                            <TournamentTeamCard team={team} />
                        </Grid>
                    ))}
                    </Grid>
                </div>
            </div>
        </section>
        : 
        <Loading />
        }
        </>
    );
}
