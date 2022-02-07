import React, { useState, useEffect } from 'react';
import states from 'json/states';
import Form from "utilities/Forms";
import { createevent } from 'actions/event';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const initialState = {
    createdBy: "", live: false, eventName: "", startDate: "", endDate: "", costPerTeam: "", ageGroup: "", maxTeamsNum: "", fieldComplexName: "",
    fieldComplexStreet: "", fieldComplexState: "", fieldComplexCity: "", fieldComplexZipcode: ""
};

const CreateEventForm = () => {
    const [accountData, setAccountData] = useState(initialState);
    const [validate, setValidate] = useState({});
    const [isCreated, setIsCreated] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();

    const validateForm = () => {
        let isValid = true;

        let validator = Form.validator({
            eventName: {
                value: accountData.eventName,
                isRequired: true,
            },
            startDate: {
                value: accountData.startDate,
                isRequired: true,
            },
            endDate: {
                value: accountData.startDate,
                isRequired: true,
            },
            ageGroup: {
                value: accountData.ageGroup,
                isRequired: true,
            },
            maxTeamsNum: {
                value: accountData.maxTeamsNum,
                isRequired: true,
            },
            costPerTeam: {
                value: accountData.costPerTeam,
                isRequired: true,
            },
            fieldComplexName: {
                value: accountData.fieldComplexName,
                isRequired: true,
            },
            fieldComplexStreet: {
                value: accountData.fieldComplexStreet,
                isRequired: true,
            },
            fieldComplexCity: {
                value: accountData.fieldComplexCity,
                isRequired: true,
            },
            fieldComplexState: {
                value: accountData.fieldComplexState,
                isRequired: true,
            },
            fieldComplexZipcode: {
                value: accountData.fieldComplexZipcode,
                isRequired: true,
            },
        });


        if (validator !== null) {
            setValidate({
            validate: validator.errors,
            });

            isValid = false;
        }
        return isValid;
    };

    const create = (e) => {
        e.preventDefault();

        console.log(accountData);
        
        const validate = validateForm();

        if (validate) {
            setValidate({});
            setAccountData({...accountData, createdBy: user.result.firstName + ' ' + user.result.lastName});
            setAccountData({...accountData, eventName: ""});
            setAccountData({...accountData, startDate: ""});
            setAccountData({...accountData, endDate: ""});
            setAccountData({...accountData, fieldComplexName: ""});
            setAccountData({...accountData, fieldComplexStreet: ""});
            setAccountData({...accountData, fieldComplexCity: ""});
            setAccountData({...accountData, fieldComplexState: ""});
            setAccountData({...accountData, fieldComplexZipcode: ""});
            setAccountData({...accountData, maxTeamsNum: ""});
            setAccountData({...accountData, ageGroup: ""});
            setAccountData({...accountData, costPerTeam: ""});

            // window.scroll(0,0);
            // setIsCreated(true);
            dispatch(createevent(accountData));
        }
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
        setAccountData({...accountData, createdBy: user.result.firstName + ' ' + user.result.lastName});
    }, [location]);
    
    return(
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
          {isCreated?
              <div className="alert mt-1 uppercase alert-success" role="alert">
                  <h2><span className='text-success font-bold'>SUCCESS</span>: Created Successfully!</h2>
              </div>:""}
              <hr className=''/>
            <h6 className="text-warning text-sm mt-3 mb-6 font-bold text-xl">
              Create New Tournament
            </h6>
            <div className="">
        
                <div className='row'>
                    <div className="relative col-md-6 col-xs-12 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Event Name <span style={{color:'red'}}>*</span>
                        </label>
                        <input
                        type="text"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                                validate.validate && validate.validate.eventName
                                ? "is-invalid "
                                : ""
                            }`}
                            value={accountData.eventName}
                            placeholder="Event Name"
                            onChange={(e) => setAccountData({...accountData, eventName: e.target.value})}
                        />

                        <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.eventName
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.eventName
                            ? validate.validate.eventName[0]
                            : ""}
                        </div>
                    </div>

                    <div className="relative col-md-3 col-xs-12 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Start Date <span style={{color:'red'}}>*</span>
                        </label>
                        <input
                        type="date"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                                validate.validate && validate.validate.startDate
                                ? "is-invalid "
                                : ""
                            }`}
                            value={accountData.startDate}
                            placeholder="Last Name"
                            onChange={(e) => setAccountData({...accountData, startDate: e.target.value})}
                        />

                        <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.startDate
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.startDate
                            ? validate.validate.startDate[0]
                            : ""}
                        </div>
                    </div>
                    <div className="relative col-md-3 col-xs-12 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            End Date <span style={{color:'red'}}>*</span>
                        </label>
                        <input
                        type="date"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                                validate.validate && validate.validate.endDate
                                ? "is-invalid "
                                : ""
                            }`}
                            value={accountData.endDate}
                            placeholder="Last Name"
                            onChange={(e) => setAccountData({...accountData, endDate: e.target.value})}
                        />

                        <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.endDate
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.endDate
                            ? validate.validate.endDate[0]
                            : ""}
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className="relative col-md-4 col-xs-12 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Cost Per Team <span style={{color:'red'}}>*</span>
                        </label>
                        <input
                            type="text"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.costPerTeam
                                ? "is-invalid "
                                : ""
                            }`}
                            id="costPerTeam"
                            value={accountData.costPerTeam}
                            placeholder="Cost per team"
                            onChange={(e) =>setAccountData({...accountData, costPerTeam: e.target.value})}
                        />

                        <div
                            className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.costPerTeam
                                ? "d-block"
                                : "d-none"
                            }`}
                        >
                            {validate.validate && validate.validate.costPerTeam
                            ? validate.validate.costPerTeam[0]
                            : ""}
                        </div>
                    </div>

                    <div className="relative col-md-4 col-xs-12 mb-3">
                        <label
                        className="block uppercase text-white text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Age group <span style={{color:'red'}}>*</span>
                        </label>
                        <select
                            type="select"
                            onChange={(e) => setAccountData({...accountData, ageGroup: e.target.value})}
                            className={`form-control ${
                                validate.validate && validate.validate.ageGroup
                                    ? "is-invalid "
                                    : ""
                            }`}
                            placeholder="Name"
                            >
                            <option defaultValue={true} value="">Select age group..</option>
                            <option value="5u">5U</option>
                            <option value="6u">6U</option>
                            <option value="7u">7U</option>
                            <option value="8u">8U</option>
                            <option value="9u">9U</option>
                            <option value="10u">10U</option>
                            <option value="11u">11U</option>
                            <option value="12u">12U</option>
                            <option value="13u">13U</option>
                            <option value="14u">14U</option>
                            <option value="15u">15U</option>
                            <option value="16u">16U</option>
                            <option value="175u">17U</option>
                            <option value="18u">18U</option>
                        </select>
                        <div
                            className={`invalid-feedback text-start ${
                                validate.validate && validate.validate.ageGroup
                                ? "d-block"
                                : "d-none"
                            }`}
                            >
                            {validate.validate && validate.validate.ageGroup
                                ? validate.validate.ageGroup[0]
                                : ""}
                        </div>
                    </div>

                    <div className="relative col-md-4 col-xs-12 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Max Teams Number <span style={{color:'red'}}>*</span>
                        </label>
                        <input
                            type="text"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.maxTeamsNum
                                ? "is-invalid "
                                : ""
                            }`}
                            id="maxTeamsNum"
                            name="maxTeamsNum"
                            value={accountData.maxTeamsNum}
                            placeholder="Max teams number"
                            onChange={(e) =>setAccountData({...accountData, maxTeamsNum: e.target.value})}
                        />

                        <div
                            className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.maxTeamsNum
                                ? "d-block"
                                : "d-none"
                            }`}
                        >
                            {validate.validate && validate.validate.maxTeamsNum
                            ? validate.validate.maxTeamsNum[0]
                            : ""}
                        </div>
                    </div>
                    <div className="relative col-md-4 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-white text-sm font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        name of field complex <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.fieldComplexName
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.fieldComplexName}
                        placeholder="name of field complex"
                        onChange={(e) => setAccountData({...accountData, fieldComplexName: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.fieldComplexName
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.fieldComplexName
                        ? validate.validate.fieldComplexName[0]
                        : ""}
                    </div>
                </div>  
                </div>
                
                <hr/><br/>
                <span className="uppercase text-info font-bold">address: <span style={{color:'red'}}>*</span></span><br/><br/>
                <div className='row'>
                    <div className="relative col-12 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Street <span style={{color:'red'}}>*</span>
                        </label>
                        <input
                        type="text"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                                validate.validate && validate.validate.fieldComplexStreet
                                ? "is-invalid "
                                : ""
                            }`}
                            value={accountData.fieldComplexStreet}
                            placeholder="123 E Main ST"
                            onChange={(e) => setAccountData({...accountData, fieldComplexStreet: e.target.value})}
                        />

                        <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.fieldComplexStreet
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.fieldComplexStreet
                            ? validate.validate.fieldComplexStreet[0]
                            : ""}
                        </div>
                    </div>

                    <div className="relative col-4 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            City <span style={{color:'red'}}>*</span>
                        </label>
                        <input
                        type="text"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                                validate.validate && validate.validate.fieldComplexCity
                                ? "is-invalid "
                                : ""
                            }`}
                            value={accountData.fieldComplexCity}
                            placeholder="city"
                            onChange={(e) => setAccountData({...accountData, fieldComplexCity: e.target.value})}
                        />

                        <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.fieldComplexCity
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.fieldComplexCity
                            ? validate.validate.fieldComplexCity[0]
                            : ""}
                        </div>
                    </div>

                    <div className="relative col-4 mb-3">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            State <span style={{color:'red'}}>*</span>
                        </label>
                        <select
                            type="select"
                            value={accountData.fieldComplexState}
                            onChange={(e) => setAccountData({...accountData, fieldComplexState: e.target.value})}
                            className={`form-control ${
                                validate.validate && validate.validate.fieldComplexState
                                ? "is-invalid "
                                : ""
                            }`}
                            >
                            <option defaultValue={true} value="">-- State --</option>
                            { states.map((state) => <option key={state.abbreviation}>{state.name}</option> )}
                        </select>
                        <div
                            className={`invalid-feedback text-start ${
                                validate.validate && validate.validate.fieldComplexState
                                ? "d-block"
                                : "d-none"
                            }`}
                            >
                            {validate.validate && validate.validate.fieldComplexState
                                ? validate.validate.fieldComplexState[0]
                                : ""}
                        </div>
                    </div>

                    <div className="relative col-4 mb-3">
                    <label
                        className="block uppercase text-white text-sm font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Zip Code <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                        type="text"
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                                validate.validate && validate.validate.fieldComplexZipcode
                                ? "is-invalid "
                                : ""
                            }`}
                            value={accountData.fieldComplexZipcode}
                            placeholder="Zipcode"
                            onChange={(e) => setAccountData({...accountData, fieldComplexZipcode: e.target.value})}
                        />

                        <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.fieldComplexZipcode
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.fieldComplexZipcode
                            ? validate.validate.fieldComplexZipcode[0]
                            : ""}
                        </div>
                    </div>
                </div>
                
                <hr/>

                <div className="text-center mt-6">
                    <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        onClick={create}
                    >
                        Create Tournament
                    </button>
                </div>
            </div>
        </form>
    </div>
    )
};

export default CreateEventForm;