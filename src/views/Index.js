/*eslint-disable*/
import React from "react";
import background from "../assets/img/bb1.jpg";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  window.scrollTo(0, 0);
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative items-center flex h-screen max-h-860-px" style={{backgroundImage:`url(${background})`}}>
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-12/12 lg:w-8/12 xl:w-12  8/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl" style={{color:'#49be25'}}>
                OUR
                MISSION
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{color:'white'}}>
              4 Bagger USA’s mission is to provide all players and teams including the NON Division 1 / NON major’s level teams the ability to play at great venues while providing metrics, coverage and content the same as or better than the top ranked teams in the country.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
