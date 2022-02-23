import InvoiceCard from "components/Cards/InvoiceCard";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function EnrollmentInvoicePage() {

    const location = useLocation();
    const invoice = JSON.parse(localStorage.getItem('invoice'));


    useEffect(() => {
    }, [location])

    return (
    <>
        <div className="" style={{paddingTop: "40px"}}>
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-8/12 px-4">
                <InvoiceCard invoice = {invoice}  subTitle = "You have been successfully enrolled in the tournament."/>
            </div>
        </div>
        </div>
    </>
    );
}
