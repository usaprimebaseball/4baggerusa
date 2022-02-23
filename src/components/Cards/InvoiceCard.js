import React, { useEffect, useState } from "react";
import states from 'json/states';
import { useHistory, useLocation } from 'react-router-dom';
import Logo from "assets/img/logo.png";

export default function InvoiceCard({subTitle, invoice}) {

    const event = JSON.parse(localStorage.getItem('event'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const history = useHistory();
    const location = useLocation();

    const back = () => {
        if (user?.result.role === "team") {
            history.push(`/Events/tournaments/${event.eventName}`)
        } else {
            history.push(`/account/admin/invoices`)
        }
    };

    useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location])

    return (
    <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
            <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                    <img src={Logo} style={{marginLeft: "auto", marginRight: "auto"}}/><br/>
                    
                    
                        {subTitle ? 
                        <>
                        <h6 className="text-sm text-success alert alert-success font-bold" style={{fontSize:'15pt'}}>
                            {subTitle}
                        </h6><br/>
                        </>:""
                        }
                    
                    <h6 className="text-xl text-white alert alert-success font-bold" style={{fontSize:'25pt'}}>
                        Invoice Details
                    </h6><br/>
                </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form className="row">
                    <div className="col-md-6">
                        <h6 className="text-warning text-xl font-bold" style={{fontSize:'15pt'}}>
                            Card Information:
                        </h6><br/>
                        <div className="flex flex-wrap">
                            <div className="w-full col-12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Name on Card: <span className="text-danger">{invoice.cardName}</span>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full col-12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Card Ending : <span className="text-danger">{invoice.cardLastFour}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h6 className="text-warning text-xl font-bold" style={{fontSize:'15pt'}}>
                                Billing Address:
                            </h6><br/>
                            <div className="flex flex-wrap">
                                <div className="w-full col-12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Address : <span className="text-danger">{invoice.billingSt}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        City : <span className="text-danger">{invoice.billingCity}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    State : <span className="text-danger">{invoice.billingState}</span>
                                    </label>
                                </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Zip code: <span className="text-danger">{invoice.billingZipcode}</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <h6 className="text-warning text-xl font-bold" style={{fontSize:'15pt'}}>
                            Order Details:
                        </h6><br/>
                        <div className="w-full col-md-12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Team Name: <span className="text-danger">{invoice.teamName}</span>
                                </label>
                                <label
                                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Head Couch: <span className="text-danger">{invoice.firstName} {invoice.lastName}</span>
                                </label>
                                <label
                                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Tournament Name: <span className="text-danger">{invoice.tournamentName}</span>
                                </label>
                                <hr/>
                                <label
                                    className="block uppercase mt-2 text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Cost Per Team : <span className="text-danger">{"$" + invoice.costPerTeam ? invoice.costPerTeam:""}</span>
                                </label>
                                <label
                                    className="block uppercase mt-2 text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Entry Fee : <span className="text-danger">{"$" + invoice.entryFee}</span>
                                </label>
                                <label
                                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Gate Fee: <span className="text-danger">{"$" + invoice.gateFee}</span>
                                </label>
                                <hr/>
                                <label
                                    className="block uppercase mt-2 text-blueGray-600 text-sm font-bold mb-2"
                                    htmlFor="grid-password"
                                    >
                                    Total: <span className="text-danger">{"$" + invoice.totalFee }</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-8 ml-auto mr-auto mt-6">
                        <button
                        className="bg-success text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        onClick={back}
                        >
                        Done
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}
