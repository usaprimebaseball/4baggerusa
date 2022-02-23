/*eslint-disable*/
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Switch, Route, Link } from 'react-router-dom';
import Tournaments from "./tournaments/Tournaments";
import TournamentPage from "./tournaments/TournamentPage";
import TeamsPage from "./tournaments/TeamsPage";

export default function EventsMainPage() {
  const tournament = JSON.parse(localStorage.getItem('event'));

  window.scrollTo(0, 0);
  return (
    <>
      <IndexNavbar fixed />
      
      <Switch>
        <Route exact path={`/Events/tournaments`} component={Tournaments} />
        {tournament ?
        <>
          <Route exact path={`/Events/tournaments/${tournament.eventName}`} component={TournamentPage} />
          <Route exact path={`/Events/tournaments/${tournament.eventName}/teams`} component={TeamsPage} />
        </>
        :""}
        <section className="header relative py-20  overflow-hidden" >
          <div className="container mx-auto pb-40" style={{paddingTop:"40px"}}>
            <div className="flex flex-wrap justify-center">
              <div className="w-full relative md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                <Link
                  to="/Events/tournaments"
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-success text-white active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Tournament Schedule
                </Link>
                <Link
                  to="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-success text-white active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Tournament Results
                </Link>
                <Link
                  to="/tournaments"
                  className="github-star mt-4 inline-block font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-success text-white uppercase text-sm shadow hover:shadow-lg"
                >
                  Teams Registration
                </Link>
                
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                <i className="fa fa-baseball-ball text-danger absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
              </div>
            </div>
          </div>
        </section>
      </Switch>
      <Footer />
    </>
  );
}
