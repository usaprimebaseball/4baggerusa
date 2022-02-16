/*eslint-disable*/
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import Ticker from 'react-ticker'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Loading from "views/LoadingPage";

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
        <section className="header relative py-20" style={{marginBottom: "356px"}}>
            <div className="container mx-auto " style={{paddingTop:"90px", paddingBottom:"30px"}}>
                <div className="flex flex-wrap justify-center alert alert-primary">
                    <div className="col-12 text-center">
                        <div className="text-xl alert alert-success text-danger font-bold mb-2">
                            <Ticker>
                            {({  }) => (
                                <>
                                    {event.eventName} Tournament &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <img src="www.my-image-source.com/" alt=""/>
                                </>
                            )}
                            </Ticker>
                        </div>
                        <div className="alert text-black">
                        Start: {event.startDate} - End: {event.endDate}<br/>
                        {event.fieldComplexName} - {event.fieldComplexCity}, {event.fieldComplexState}
                        </div>
                        <hr className="text-secondary"/>

                    </div>
                    <div className="mt-5 row col-md-7 alert alert-primary font-bold">
                    <i class="fa fa-baseball-ball mr-1"></i><h3>Game Format:{event.gameFormat}</h3>
                    </div>
                    <div className="row col-md-7 alert alert-primary font-bold">
                    <i className="fa fa-money-bill mr-1"></i><h3>Entry Fee:{event.entryFee}</h3>
                    </div>
                    <div className="row col-md-7 alert alert-primary font-bold">
                    <i className="fa fa-money-check mr-1"></i><h3>Gate Fee:{event.gateFee}</h3>
                    </div>          
                </div>
            </div>
        </section>
        : 
        <Loading />
        }
        </>
    );
}
