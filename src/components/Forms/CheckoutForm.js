import React, { useEffect, useState } from "react";
import states from 'json/states';
import Form from "utilities/Forms";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "assets/img/logo.png";
import { createteaminvoice } from "actions/invoice";

const initialState = {
    email: "", firstName: "", lastName: "", teamName: "", tournamentName: "", cardLastFour: "", billingSt: "", billingCity: "", billingState: "", billingZipcode: "", gateFee: "", entryFee: "", totalFee: ""
};

const initialPaymentFormState = {
    cardName: "", cardNumber: "", expDate: "", securityCode: "", billingCity: "", billingState: "", billingZipcode: "", billingSt: "", totalFee: ""
};

export default function Checkout() {

    const [accountData, setAccountData] = useState(initialState);
    const [paymentData, setPaymentData] = useState(initialPaymentFormState);

    const event = JSON.parse(localStorage.getItem('event'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const error = useSelector(state => state.errors);

    const [validate, setValidate] = useState({});

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const back = () => {
        history.push(`/Events/tournaments/${event.eventName}`)
    };

    const validateForm = () => {
        let isValid = true;

        let validator = Form.validator({
            cardName: {
                value: paymentData.cardName,
                isRequired: true
            },
            cardNumber: {
                value: paymentData.cardNumber,
                isRequired: true,
                minLength: 16,
                maxLength: 16
            },
            expDate: {
                value: paymentData.expDate,
                isRequired: true,
            },
            securityCode: {
                value: paymentData.securityCode,
                isRequired: true,
            },
            billingCity: {
                value: paymentData.billingCity,
                isRequired: true,
            },
            billingSt: {
                value: paymentData.billingSt,
                isRequired: true,
            },
            billingState: {
                value: paymentData.billingState,
                isRequired: true,
            },
            billingZipcode: {
                value: paymentData.billingZipcode,
                isRequired: true,
            },
            totalFee: {
                value: paymentData.totalFee,
                isRequired: true,
            }
        });

        if (validator !== null) {
            setValidate({
            validate: validator.errors,
            });

            isValid = false;
        }
        return isValid;
    };

    const checkout = (e) => {
        e.preventDefault();
        const validate = validateForm();
        

        if (validate) {
            setValidate({});

            setPaymentData({...paymentData, cardName: ""});
            setPaymentData({...paymentData, cardNumber: ""});
            setPaymentData({...paymentData, expDate: ""});
            setPaymentData({...paymentData, securityCode: ""});
            setPaymentData({...paymentData, billingSt: ""});
            setPaymentData({...paymentData, billingCity: ""});
            setPaymentData({...paymentData, billingZipcode: ""});

            dispatch(createteaminvoice(accountData));
            console.log(accountData);

        }


    };

    useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
    
    setAccountData({ ...accountData, email : user?.result.email, gateFee: event.gateFee, entryFee: event.entryFee, totalFee: event.entryFee + event.gateFee,
        firstName: user?.result.firstName, lastName: user?.result.lastName, tournamentName: event.eventName, teamName: user?.result.teamName
    });

    setPaymentData({ ...paymentData, totalFee: event.entryFee + event.gateFee });

    }, [location])

    return (
    <>
        <div className="" style={{paddingTop: "40px"}}>
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <img src={Logo} style={{marginLeft: "auto", marginRight: "auto"}}/><br/>
                            <h6 className="text-xl text-white alert alert-success font-bold" style={{fontSize:'25pt'}}>
                                Checkout
                            </h6><br/>
                            <button
                                className="btn-lg float-left btn-warning mb-1"
                                type="button"
                                onClick={back}
                                >
                                Back
                            </button>
                            {error.length > 0?
                            <div className="alert mt-5 uppercase alert-danger" role="alert">
                                <h2><span className='text-danger font-bold'>ERROR</span>: {error[error.length - 1]}</h2>
                            </div>:""}
                        </div>
                        
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form className="row">
                            <div className="col-md-6">
                                <h6 className="text-warning text-xl font-bold" style={{fontSize:'15pt'}}>
                                    Payment Info:
                                </h6><br/>
                                <div className="flex flex-wrap">
                                    <div className="w-full col-12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Name on Card
                                            </label>
                                            <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder={"Card Name"}
                                            onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value}, setAccountData({ ...accountData, cardName: e.target.value }))}
                                            />
                                            <div
                                            className={`invalid-feedback text-start ${
                                                validate.validate && validate.validate.cardName
                                                ? "d-block"
                                                : "d-none"
                                            }`}
                                            >
                                            {validate.validate && validate.validate.cardName
                                                ? validate.validate.cardName[0]
                                                : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full col-12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Card Number
                                            </label>
                                            <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder={"Card Number"}
                                            onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value}, setAccountData({...accountData, cardLastFour: e.target.value.slice(10, 16)}))}
                                            />
                                            <div
                                            className={`invalid-feedback text-start ${
                                                validate.validate && validate.validate.cardNumber
                                                ? "d-block"
                                                : "d-none"
                                            }`}
                                            >
                                            {validate.validate && validate.validate.cardNumber
                                                ? validate.validate.cardNumber[0]
                                                : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Expiration Date
                                            </label>
                                            <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Expiration"
                                            onChange={(e) => setPaymentData({...paymentData, expDate: e.target.value})}
                                            />

                                            <div
                                            className={`invalid-feedback text-start ${
                                                validate.validate && validate.validate.expDate
                                                ? "d-block"
                                                : "d-none"
                                            }`}
                                            >
                                            {validate.validate && validate.validate.expDate
                                                ? validate.validate.expDate[0]
                                                : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Security Code
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="security code"
                                                onChange={(e) => setPaymentData({...paymentData, securityCode: e.target.value})}
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                >
                                            </input>
                                            <div
                                                className={`invalid-feedback text-start ${
                                                    validate.validate && validate.validate.securityCode
                                                    ? "d-block"
                                                    : "d-none"
                                                }`}
                                                >
                                                {validate.validate && validate.validate.securityCode
                                                    ? validate.validate.securityCode[0]
                                                    : ""}
                                            </div>
                                        </div>
                                    </div>
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
                                            Team Name: <span className="text-danger">{user.result.teamName}</span>
                                        </label>
                                        <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Head Couch: <span className="text-danger">{user.result.firstName} {user.result.lastName}</span>
                                        </label>
                                        <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Tournament Name: <span className="text-danger">{event.eventName}</span>
                                        </label>
                                        <hr/>
                                        <label
                                            className="block uppercase mt-2 text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Entry Fee : <span className="text-danger">{"$" + event.entryFee}</span>
                                        </label>
                                        <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Gate Fee: <span className="text-danger">{"$" + event.gateFee}</span>
                                        </label>
                                        <hr/>
                                        <label
                                            className="block uppercase mt-2 text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Total: <span className="text-danger">{"$" + accountData.totalFee }</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <h6 className="text-warning text-xl mt-10 font-bold" style={{fontSize:'15pt'}}>
                                    Billing Address:
                                </h6><br/>
                                <div className="flex flex-wrap">
                                    <div className="w-full col-12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Address
                                            </label>
                                            <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder={"Street Address"}
                                            onChange={(e) => setPaymentData({...paymentData, billingSt: e.target.value}, setAccountData({...accountData, billingSt: e.target.value } ))}
                                            />
                                            <div
                                            className={`invalid-feedback text-start ${
                                                validate.validate && validate.validate.billingSt
                                                ? "d-block"
                                                : "d-none"
                                            }`}
                                            >
                                            {validate.validate && validate.validate.billingSt
                                                ? validate.validate.billingSt[0]
                                                : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            City
                                            </label>
                                            <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="City"
                                            onChange={(e) => setPaymentData({...paymentData, billingCity: e.target.value}, setAccountData({...accountData, billingCity: e.target.value }) )}
                                            />

                                            <div
                                            className={`invalid-feedback text-start ${
                                                validate.validate && validate.validate.billingCity
                                                ? "d-block"
                                                : "d-none"
                                            }`}
                                            >
                                            {validate.validate && validate.validate.billingCity
                                                ? validate.validate.billingCity[0]
                                                : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        State
                                        </label>
                                        <select
                                            type="select"
                                            onChange={(e) => setPaymentData({...paymentData, billingState: e.target.value}, setAccountData({...accountData, billingState: e.target.value }) )}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            >
                                            <option defaultValue={true} value="">-- State --</option>
                                            { states.map((state) => <option key={state.abbreviation}>{state.name}</option> )}
                                        </select>
                                        <div
                                            className={`invalid-feedback text-start ${
                                                validate.validate && validate.validate.billingState
                                                ? "d-block"
                                                : "d-none"
                                            }`}
                                            >
                                            {validate.validate && validate.validate.billingState
                                                ? validate.validate.billingState[0]
                                                : ""}
                                        </div>
                                    </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                                            htmlFor="grid-password"
                                            >
                                            Zip code
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="zip code"
                                                onChange={(e) => setPaymentData({...paymentData, billingZipcode: e.target.value}, setAccountData({...accountData, billingZipcode: e.target.value }))}
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                >
                                            </input>
                                            <div
                                                className={`invalid-feedback text-start ${
                                                    validate.validate && validate.validate.billingZipcode
                                                    ? "d-block"
                                                    : "d-none"
                                                }`}
                                                >
                                                {validate.validate && validate.validate.billingZipcode
                                                    ? validate.validate.billingZipcode[0]
                                                    : ""}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            
                            <div className="col-md-8 ml-auto mr-auto mt-6">
                                    <button
                                    className="bg-success text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={checkout}
                                    >
                                    Pay
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    );
}
