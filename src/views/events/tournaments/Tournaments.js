/*eslint-disable*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Ticker from 'react-ticker'
import TournamentCard from "../../../components/Cards/TournamentCard";
import { getevents } from "actions/event";
import Loading from "views/LoadingPage";

export default function Tournaments() {
    window.scrollTo(0, 0);
    const events = useSelector((state) => state.events);
    const location = useLocation();
    const dispatch = useDispatch();   
    const history = useHistory();

    const back = () => {
        history.push(`/Events`)
    };

    useEffect(() => {
        dispatch(getevents());
    }, [location])
    return (
        <>
        <IndexNavbar fixed />
    {events.length > 0 ? 
        <section className="header relative" style={{padding: "90px"}}>
            <div className="mx-auto" style={{paddingTop:"90px", paddingBottom:"30px"}}> 
                 <button
                    className="btn-lg btn-warning mb-1"
                    type="button"
                    onClick={back}
                    >
                    Back
                </button>
                <div className="text-white text-xl font-bold col-12 bg-black p-3 rounded text-center">
                    <Ticker>
                        {({  }) => (
                            <>
                                Tournaments: &nbsp; &nbsp; &nbsp;
                                <img src="www.my-image-source.com/" alt=""/>
                            </>
                        )}
                    </Ticker>
                </div>  
                <div className="flex flex-wrap justify-center" style={{marginTop: "20px"}}>
                    <Grid container spacing={5}>
                    {events.map((event) => (
                        <Grid key={event._id} item xs={12} sm={6} md={6}>
                            <TournamentCard tournament={event} />
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
