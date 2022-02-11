/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Tournament from "../../../components/Cards/TournamentCard";
import { getevents } from "actions/event";
import Loading from "views/LoadingPage";
import SelectedOtherCard from "components/Cards/SelectedUserProfileCards/SelectedOtherCard";

export default function TournamentPage() {
    window.scrollTo(0, 0);
    const event = JSON.parse(localStorage.getItem('event'));
    const location = useLocation();
    const dispatch = useDispatch();   
    
    useEffect(() => {
    }, [location])
    return (
        <>
        <IndexNavbar fixed />
        {event ? 
        <section className="header relative py-20 " style={{marginBottom: "356px"}}>
            <div className="container mx-auto" style={{paddingTop:"90px", paddingBottom:"30px"}}>
                <div className="flex flex-wrap justify-center">
                    Welcome to the {event.eventName}
                    
                </div>
            </div>
        </section>
        : 
        <Loading />
        }
        </>
    );
}
