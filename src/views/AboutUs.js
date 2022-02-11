import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/img/bb2.jpg";

// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  window.scrollTo(0, 0);
  return (
    <>
      <IndexNavbar transparent />
      <main style={{paddingTop: "20px"}}>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${background})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-2xl">
                  PROVIDING A FIRST CLASS EXPERIENCE FOR ALL LEVEL OF TRAVEL BASEBALL
                  </h1>
                  <p className="mt-4 text-md  text-blueGray-200" style={{color:'#49be25'}}>
                  4 Bagger USA is dedicated to providing a quality experience for all teams in travel baseball. We will provide great tournament coverage along with prospects promotions throughout our tournament and showcases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      
      </main>
      <Footer />
    </>
  );
}
