/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/img/bb4.jpg";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative items-center flex" style={{backgroundImage:`url(${background})`}}>
        <div className="container mx-auto items-center">
          <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12  8/12 px-4">
            <div className="pt-32 mt-5" style={{color:'white'}}>
              <h2 className="font-semibold text-5xl" style={{color:'#49be25'}}>
                Rules:
              </h2>
              
              <p className="mt-10 text-md leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> All games will be under a 2 hour time limit. If an inning is started and goes over the 2 hour time limit and the home team is losing, the inning must be completed. Pool play games can end in a tie. No new inning will be started after 2 hours in pool play.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> No extra innings to be played in pool play even if time allows. Extra innings in playoffs will consist of placing the last out of the last inning on 2nd base and the batting team will start the inning with 1 out.
              </p><p className= "text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> All teams must be at the field ready to play 15-20 minutes before their scheduled game time.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Home team in pool play will be determined by a coin flip. In the playoffs the higher seed will always be the home team.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Seeds are determined by W/L/T count. In a result that teams have the same record we will resort to runs allowed then by scored.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Teams are responsible to have correct and accurate rosters uploaded and added to their team page pre-event. Players may not play for multiple teams in the event.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Players must be age eligible to compete in an age group event based off grad year and or age by May 1.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Bats for all tournaments will be wood bats that are a minimum of -3 regulated.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Run rules are as followed: 12 after 3, 10 after 4 and 8 after 5.
              </p><p className="mt-4 text-md leading-relaxed">
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Courtesy runners are allowed for catchers and pitchers. The courtesy runner must be a player currently not in the game.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> NFHS rules will be enforced.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Teams may hit straight 9, hit 9 using a DH, hit 10 using a EH, or hit 11 using 2 EHs.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> EH is used as free substitution to place into the field of play.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> If rain outs occur and 4 innings of play are completed the team in the lead will be declared the winner. If 4 innings are not completed we will attempt to make the game complete at a later time. If we can not complete the game our staff will determine a winner based off current situation in game and based off current pool standings.
              </p>
              <p className="mt-10 text-md leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> If a team must forfeit the winning team will assume a 8-0 win towards pool standings or playoff advancement.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Pitching rules will be a recommendation of protecting your players arms by following the USA Pitchsmart Guidelines
              </p><p className= "text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> Gate fees will be cashless entry. All teams will be given 3 coaches passes for each event. These coaches' names must be submitted pre-event. Harassment of tournament staff will not be tolerated and could result in the team removal from the tournament.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}}></i> One dozen baseballs will be provided to each team pre-event. A coach from each team is responsible to communicate with tournament directors on when and where to pick up baseballs.
              </p>
              <p className="text-sm leading-relaxed" >
              <i class="fas fa-check-circle" style={{color:'#a83232'}} ></i> Refund policy is as followed: if a team drops pre-event a credit of 75% will be added to a future event. If weather results in cancellation of event pre-event and no games are played teams will receive a 75% credit to a future event. If a team completes 25% of games guarantee IE 1 of 4 games guarantee a 40% credit will be given to that team for future events. If a team plays 50% of games guaranteed no credit will be given.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
