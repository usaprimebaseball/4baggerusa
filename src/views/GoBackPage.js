import React from "react";
import { Link } from 'react-router-dom';

const GoBack = () => {
    return (
        <section className="header relative py-20  overflow-hidden" >
            <div className="container mx-auto pb-40" style={{paddingTop:"40px"}}>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full relative md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                        <h2 className="text-lg">No Events Yet :(</h2>
                    <Link
                        to="/EventsMainPage"
                        className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-secondary text-white active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                        Go Back
                    </Link>
                    </div>
                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                    <i className="fa fa-baseball-ball text-danger absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoBack;
    