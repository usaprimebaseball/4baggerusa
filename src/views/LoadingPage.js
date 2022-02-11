import React from "react";
import { CircularProgress } from '@mui/material';

const Loading = () => {
    return (
        <section className="header relative py-20  overflow-hidden" >
            <div className="container mx-auto pb-40" style={{paddingTop:"40px"}}>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full relative md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                        <CircularProgress className="text-align-center text-danger" style={{height: "100px", width: "100px"}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loading;
    