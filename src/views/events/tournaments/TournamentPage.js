/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Loading from "views/LoadingPage";
import background from "assets/img/tbg2.jpg";
import EnrollAlertModal from "components/Modals/SignInEnrollModal";
import { Tooltip } from "@material-ui/core";

export default function TournamentPage() {
    window.scrollTo(0, 0);
    const event = JSON.parse(localStorage.getItem('event'));
    const location = useLocation();
    const dispatch = useDispatch();   
    const history = useHistory();
    const [show, setShowModal] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const back = () => {
        history.push(`/Events/tournaments`)
    };

    const showTeams = () => {
        history.push(`/Events/tournaments/${event.eventName}/teams`)
    };
    
    const goToCheckout = () => {
        history.push(`/Events/tournaments/${event.eventName}/checkout`)
    };

      useEffect(() => {

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
        <IndexNavbar fixed />
        {event ? 
        
        <section className="header relative py-20" style={{marginBottom: event.length === 0 ? "356px":"0"}}  style={{backgroundImage: `url(${background})`}}>
            <div className="container mx-auto" style={{paddingTop:"90px", paddingBottom:"30px"}} >
                <button
                    className="btn-lg btn-warning mb-1"
                    type="button"
                    onClick={back}
                    >
                    Back
                </button>
                <EnrollAlertModal show = {show} setShowModal = {setShowModal} history = {history} />
                <div className="col-12 flex flex-wrap justify-center">
                    <div className="col-12 text-center">
                        <div className="text-white text-center font-bold" style={{fontSize: "30pt"}}>
                        {event.eventName} Tournament
                        </div>
                        <div className="text-danger font-bold">
                            Start: {event.startDate.slice(0, 10)} - End: {event.endDate.slice(0, 10)}<br/>
                        </div>
                        <div className="text-secondary font-bold">
                        {event.fieldComplexName} - {event.fieldComplexCity}, {event.fieldComplexState}
                        </div>
                    </div>
                    
                    <div className="mt-5 row col-md-7 alert alert-primary font-bold">
                    <i class="fa fa-baseball-ball mr-1"></i><h3>Game Format: {event.gameFormat}</h3>
                    </div>
                    <div className="row col-md-7 alert alert-primary font-bold">
                    <i className="fa fa-money-bill mr-1"></i><h3>Cost Per Team: ${event.costPerTeam}</h3>
                    </div>
                    <div className="row col-md-7 alert alert-primary font-bold">
                    <i className="fa fa-money-bill mr-1"></i><h3>Entry Fee: ${event.entryFee}</h3>
                    </div>
                    <div className="row col-md-7 alert alert-primary font-bold">
                    <i className="fa fa-money-check mr-1"></i><h3>Gate Fee: ${event.gateFee}</h3>
                    </div> 
                    {user?.result.role === "team" && !user?.result.active? 
                    <Tooltip title="Your account needs to be activated to enroll.
                    Please contact support.">
                    <button
                    className="col-md-8 btn-lg btn-success"
                    type="button"                    
                    >
                    Enroll 
                    </button>
                    </Tooltip>
                    :
                    user?.result.role === "team" ? 
                    <button
                    className="col-md-8 btn-lg btn-success"
                    type="button"
                    onClick={() => goToCheckout()}
                    >
                    Enroll
                    </button>
                    :
                    <button
                        onClick={() => setShowModal(true)}
                        className="col-md-8 btn-lg btn-success"
                        type="button"
                        >
                        Enroll
                    </button>
                    }         
                    {event.teamsCount > 0 ? 
                        <button
                            onClick={() => showTeams()}
                            className="col-md-8 btn-lg btn-warning mt-1"
                            type="button"
                            >
                            Show Enrolled Teams
                        </button>:""
                    }
                </div>
            </div>
        </section>
        : 
        <Loading />
        }
        </>
    );
}
