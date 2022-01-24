import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import states from 'json/states';
import { Link } from "react-router-dom";
import Form from "utilities/Forms";

const Player = () => {
    const [accountData, setAccountData] = useState({
        role: "player", profileImage: "", firstName: "", lastName: "", email: "", phoneNumber: "", highSchoolName: "",
        street: "", city: "", state: "", zipcode: "", dob: new Date(), gradYear: "", collegeCommitment: "",
        height: "", weight: "",throw: "", bat: "", primPosition: "", seconPosition: "", parentFirst: "", parentLast: "", 
        parentEmail: "", parentPhone: "", password: "", passwordConfirm: "", agreeBtn: ""
    });
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            profileImage: {
                value: accountData.profileImage,
                isRequired: true,
            },
            firstName: {
                value: accountData.firstName,
                isRequired: true,
            },
            lastName: {
                value: accountData.lastName,
                isRequired: true,
            },
            email: {
                value: accountData.email,
                isRequired: true,
                isEmail: true,
            },
            phoneNumber: {
                value: accountData.phoneNumber,
                isRequired: true,
                type: Number,
                minLength: 10
            },
            highSchoolName: {
                value: accountData.highSchoolName,
                isRequired: false,
            },
            street: {
                value: accountData.street,
                isRequired: true,
            },
            city: {
                value: accountData.city,
                isRequired: true,
            },
            state: {
                value: accountData.state,
                isRequired: true,
            },
            zipcode: {
                value: accountData.zipcode,
                isRequired: true,
            },
            dob: {
                value: accountData.dob,
                isRequired: true,
            },
            gradYear: {
                value: accountData.gradYear,
                isRequired: true,
            },
            collegeCommitment: {
                value: accountData.collegeCommitment,
                isRequired: false,
            },
            height: {
                value: accountData.height,
                isRequired: true,
            },
            weight: {
                value: accountData.weight,
                isRequired: true,
            },
            throw: {
                value: accountData.throw,
                isRequired: true,
            },
            bat: {
                value: accountData.bat,
                isRequired: true,
            },
            primPosition: {
                value: accountData.primPosition,
                isRequired: true,
            },
            seconPosition: {
                value: accountData.seconPosition,
                isRequired: true,
            },
            parentFirst: {
                value: accountData.parentFirst,
                isRequired: true,
            },
            parentLast: {
                value: accountData.parentLast,
                isRequired: true,
            },
            parentEmail: {
                value: accountData.parentEmail,
                isRequired: true,
            },
            parentPhone: {
                value: accountData.parentPhone,
                isRequired: true,
            },
            password: {
                value: accountData.password,
                isRequired: true,
                minLength: 6,
            },
            passwordConfirm: {
                value: accountData.passwordConfirm,
                isRequired: true,
                minLength: 6,
            },
        });

        // Make sure our MUSt match fields are matching 

        if ( accountData.passwordConfirm !== accountData.password ) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }

        if (validator !== null) {
            setValidate({
            validate: validator.errors,
            });

            isValid = false;
        }
        return isValid;
    };

    const register = (e) => {
        e.preventDefault();

        const validate = validateRegister();

        if (validate) {
            setValidate({});
            setAccountData({...accountData, profileImage: ""});
            setAccountData({...accountData, firstName: ""});
            setAccountData({...accountData, lastName: ""});
            setAccountData({...accountData, email: ""});
            setAccountData({...accountData, phoneNumber: ""});
            setAccountData({...accountData, highSchoolName: ""});
            setAccountData({...accountData, street: ""});
            setAccountData({...accountData, city: ""});
            setAccountData({...accountData, state: ""});
            setAccountData({...accountData, zipcode: ""});
            setAccountData({...accountData, dob: ""});
            setAccountData({...accountData, gradYear: ""});
            setAccountData({...accountData, collegeCommitment: ""});
            setAccountData({...accountData, height: ""});
            setAccountData({...accountData, weight: ""});
            setAccountData({...accountData, throw: ""});
            setAccountData({...accountData, bat: ""});
            setAccountData({...accountData, primPosition: ""});
            setAccountData({...accountData, parentFirst: ""});
            setAccountData({...accountData, parentLast: ""});
            setAccountData({...accountData, parentEmail: ""});
            setAccountData({...accountData, parentPhone: ""});
            setAccountData({...accountData, password: ""});
            setAccountData({...accountData, passwordConfirm: ""});
            alert("Successfully Register User");
        }
    };

    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };

    const togglePasswordConfirm = (e) => {
        if (showPasswordConfirm) {
            setShowPasswordConfirm(false);
        } else {
            setShowPasswordConfirm(true);
        }
    }

    return (
        <div className="playerForm">
            <div className="relative w-full mb-3">
                <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
                >
                Player Profile <span style={{color:'red'}}>*</span>
                </label>
                <FileBase
                    type="file"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.profileImage
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.profileImage}
                    multiple={false}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.profileImage
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.profileImage
                        ? validate.validate.profileImage[0]
                        : ""}
                    </div>
            </div>
                    
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        First Name <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.firstName
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.firstName}
                        placeholder="First Name"
                        onChange={(e) => setAccountData({...accountData, firstName: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.firstName
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.firstName
                        ? validate.validate.firstName[0]
                        : ""}
                    </div>
                </div>

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Last Name <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.lastName
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.lastName}
                        placeholder="Last Name"
                        onChange={(e) => setAccountData({...accountData, lastName: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.lastName
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.lastName
                        ? validate.validate.lastName[0]
                        : ""}
                    </div>
                </div>
            </div>
                    
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Email <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="email"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={accountData.email}
                    placeholder="Email"
                    onChange={(e) =>setAccountData({...accountData, email: e.target.value})}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.email
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Phone Number <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.phoneNumber}
                    placeholder="Phone Number"
                    onChange={(e) =>setAccountData({...accountData, phoneNumber: e.target.value})}
                  />

                    <div
                        className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.phoneNumber
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.phoneNumber
                        ? validate.validate.phoneNumber[0]
                        : ""}
                    </div>
                </div>
            </div>

            <div className="relative w-full mb-3">
                <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
                >
                High School Name <span style={{color:'red'}}>(If Applicable)</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.highSchoolName
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.highSchoolName}
                    placeholder="High School Name"
                    onChange={(e) => setAccountData({...accountData, highSchoolName: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.highSchoolName
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.highSchoolName
                    ? validate.validate.highSchoolName[0]
                    : ""}
                </div>
            </div>

            <hr/><br/>
            <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>address: <span style={{color:'red'}}>*</span></span><br/><br/>

            <div className='row'>
            <div className="relative col-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Street <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.street
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.street}
                    placeholder="123 E Main ST"
                    onChange={(e) => setAccountData({...accountData, street: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.street
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.street
                    ? validate.validate.street[0]
                    : ""}
                </div>
                </div>

                <div className="relative col-4 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        City <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.city
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.city}
                        placeholder="city"
                        onChange={(e) => setAccountData({...accountData, city: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.city
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.city
                        ? validate.validate.city[0]
                        : ""}
                    </div>
                </div>

                <div className="relative col-4 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        State <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                        type="select"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.state
                            ? "is-invalid "
                            : ""
                        }`}
                        >
                        {states.map((state) => {
                        return <option key={state.abbreviation}>{state.name}</option>
                        })}
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.state
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.state
                            ? validate.validate.state[0]
                            : ""}
                    </div>
                </div>

                <div className="relative col-4 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Zip Code <span style={{color:'red'}}>*</span>
                </label>
                <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.zipcode
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.zipcode}
                        placeholder="Zipcode"
                        onChange={(e) => setAccountData({...accountData, zipcode: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.zipcode
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.zipcode
                        ? validate.validate.zipcode[0]
                        : ""}
                    </div>
                </div>
            </div>
            <hr/><br/>

            <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>Date of Birth: <span style={{color:'red'}}>*</span></span><br/><br/>

            <div className="relative w-full mb-3">
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack>
                    <DatePicker
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.dob
                        ? "is-invalid "
                        : ""
                    }`}
                    disableFuture
                    label="Date Picker"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={accountData.dob}
                    onChange={(newDate) => {
                        setAccountData({...accountData, dob: newDate})
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
                </LocalizationProvider>
                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.dob
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.dob
                    ? validate.validate.dob[0]
                    : ""}
                </div>
            </div>
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Graduation Year <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.gradYear
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.gradYear}
                        placeholder="graduation year"
                        onChange={(e) => setAccountData({...accountData, gradYear: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.gradYear
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.gradYear
                        ? validate.validate.gradYear[0]
                        : ""}
                    </div>
                </div>

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    College Commitment
                    </label>
                    <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.collegeCommitment
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.collegeCommitment}
                        placeholder="College Commitment"
                        onChange={(e) => setAccountData({...accountData, collegeCommitment: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.collegeCommitment
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.collegeCommitment
                        ? validate.validate.collegeCommitment[0]
                        : ""}
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    player height <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.height
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.height}
                        placeholder="ft, in"
                        onChange={(e) => setAccountData({...accountData, height: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.height
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.height
                        ? validate.validate.height[0]
                        : ""}
                    </div>
                </div>  

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    player weight <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.weight
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.weight}
                        placeholder="lb"
                        onChange={(e) => setAccountData({...accountData, weight: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.weight
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.weight
                        ? validate.validate.weight[0]
                        : ""}
                    </div>
                </div>  
            </div>
            <hr/><br/>
            
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Throw <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.throw
                        ? "is-invalid "
                        : ""
                    }`}                   
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option value="both">both</option>
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.throw
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.throw
                            ? validate.validate.throw[0]
                            : ""}
                    </div>
                </div>  

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    bat <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.bat
                        ? "is-invalid "
                        : ""
                    }`}
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option value="both">both</option>
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.bat
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.bat
                            ? validate.validate.bat[0]
                            : ""}
                    </div>
                </div>  
            </div>
            
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    primary position <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.primPosition
                        ? "is-invalid "
                        : ""
                    }`}
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="c">C</option>
                    <option value="1b">1b</option>
                    <option value="2nd">2nd</option>
                    <option value="ss">ss</option>
                    <option value="3b">3b</option>
                    <option value="of">of</option>
                    <option value="rhp">rhp</option>
                    <option value="lhp">lhp</option>
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.primPosition
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.primPosition
                            ? validate.validate.primPosition[0]
                            : ""}
                    </div>
                </div>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    secondary position <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.seconPosition
                        ? "is-invalid "
                        : ""
                    }`}
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="c">C</option>
                    <option value="1b">1b</option>
                    <option value="2nd">2nd</option>
                    <option value="ss">ss</option>
                    <option value="3b">3b</option>
                    <option value="of">of</option>
                    <option value="rhp">rhp</option>
                    <option value="lhp">lhp</option>
                    </select>
                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.seconPosition
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.seconPosition
                        ? validate.validate.seconPosition[0]
                        : ""}
                    </div>
                </div>
            </div>  

            <hr/><br/>

            <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>parent info: <span style={{color:'red'}}>*</span></span><br/><br/>
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Parent First Name <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.parentFirst
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.parentFirst}
                        placeholder="First Name"
                        onChange={(e) => setAccountData({...accountData, parentFirst: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.parentFirst
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.parentFirst
                        ? validate.validate.parentFirst[0]
                        : ""}
                    </div>
                </div>

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Parent Last Name <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.parentFirst
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.parentLast}
                        placeholder="last Name"
                        onChange={(e) => setAccountData({...accountData, parentLast: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.parentLast
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.parentLast
                        ? validate.validate.parentLast[0]
                        : ""}
                    </div>
                </div>
            </div>
                    
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Parent Email <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="email"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      validate.validate && validate.validate.parentEmail
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={accountData.parentEmail}
                    placeholder="Email"
                    onChange={(e) =>setAccountData({...accountData, parentEmail: e.target.value})}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.parentEmail
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.parentEmail
                      ? validate.validate.parentEmail[0]
                      : ""}
                  </div>
                </div>

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Parent Phone Number <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      validate.validate && validate.validate.parentPhone
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.parentPhone}
                    placeholder="Phone Number"
                    onChange={(e) =>setAccountData({...accountData, parentPhone: e.target.value})}
                  />

                    <div
                        className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.parentPhone
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.parentPhone
                        ? validate.validate.parentPhone[0]
                        : ""}
                    </div>
                </div>
            </div>

            <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>set your password: <span style={{color:'red'}}>*</span></span><br/><br/>

            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Password <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.password
                                ? "is-invalid "
                                : ""
                            }`}
                            name="password"
                            id="password"
                            value={accountData.password}
                            placeholder="Password"
                            onChange={(e) => setAccountData({...accountData, password: e.target.value})}
                        />

                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            onClick={(e) => togglePassword(e)}
                        >
                            <i
                            className={
                                showPassword ? "far fa-eye" : "far fa-eye-slash"
                            }
                            ></i>{" "}
                        </button>

                        <div
                            className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.password
                                ? "d-block"
                                : "d-none"
                            }`}
                        >
                            {validate.validate && validate.validate.password
                            ? validate.validate.password[0]
                            : ""}
                        </div>
                    </div>
                </div>

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Confirm Password <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="input-group">
                        <input
                            type={showPasswordConfirm ? "text" : "password"}
                            className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.passwordConfirm
                                ? "is-invalid "
                                : ""
                            }`}
                            name="password"
                            id="password"
                            value={accountData.passwordConfirm}
                            placeholder="Password"
                            onChange={(e) => setAccountData({...accountData, passwordConfirm: e.target.value})}
                        />

                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            onClick={(e) => togglePasswordConfirm(e)}
                        >
                            <i
                            className={
                                showPasswordConfirm ? "far fa-eye" : "far fa-eye-slash"
                            }
                            ></i>{" "}
                        </button>
                        <div
                            className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.passwordConfirm
                                ? "d-block"
                                : "d-none"
                            }`}
                        >
                            {validate.validate && validate.validate.passwordConfirm
                            ? validate.validate.passwordConfirm[0]
                            : ""}
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <label className="inline-flex items-center cursor-pointer">
                <input
                id="customCheckLogin"
                type="checkbox"
                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                I agree with the{" "}
                <a
                    href="/rules"
                    className="text-lightBlue-500"
                    onClick={(e) => e.preventDefault()}
                >
                    Privacy Policy
                </a>
                </span>
            </label>
        </div>
        {!passwordMatch ?
        <div className='alert alert-danger'>
           <i class="fas fa-exclamation-triangle"></i> Password is not matching the confirmation!
        </div>: ""}
        <div className="text-center mt-6">
            <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
                onClick={register}
            >
                Create Account
            </button>
        </div>
        <div className="text-center mt-6">
            <Link
                to="/auth/login"
                className="text-primary hover:text-blueGray-800 font-semibold block pb-2 text-sm"

            >
                Aready have an account ? Click here to log in
            </Link>
        </div>
    </div>        
    )
};

export default Player;