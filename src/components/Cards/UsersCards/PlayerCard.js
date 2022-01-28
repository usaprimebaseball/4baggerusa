
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Form from "utilities/Forms";
import states from 'json/states';
import decode from 'jwt-decode';
import FileBase from 'react-file-base64';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import { updateplayer } from 'actions/user';

// components

const initialState = {
    active: false, role: "player", profileImage: "", firstName: "", lastName: "", email: "", phoneNumber: "", highSchoolName: "",
    street: "", city: "", state: "", zipcode: "", dob: new Date(), gradYear: "", collegeCommitment: "",
    height: "", weight: "",pThrow: "", bat: "", primPosition: "", seconPosition: "", parentFirst: "", parentLast: "", 
    parentEmail: "", parentPhone: ""
};

const PlayerCard = () => {
    const [accountData, setAccountData] = useState(initialState);
    const [validate, setValidate] = useState({});
    const [id, setId] = useState({});
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    const dispatch = useDispatch();

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
            pThrow: {
                value: accountData.pThrow,
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
            }
        });

        // Make sure our MUSt match fields are matching 


        if (validator !== null) {
            setValidate({
            validate: validator.errors,
            });

            isValid = false;
        }
        return isValid;
    };

    const update = (e) => {
        e.preventDefault();
        
        console.log(accountData);

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
            setAccountData({...accountData, pThrow: ""});
            setAccountData({...accountData, bat: ""});
            setAccountData({...accountData, primPosition: ""});
            setAccountData({...accountData, parentFirst: ""});
            setAccountData({...accountData, parentLast: ""});
            setAccountData({...accountData, parentEmail: ""});
            setAccountData({...accountData, parentPhone: ""});
            dispatch(updateplayer(id, accountData));
        }
    };

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));

        setAccountData(user.result);

        setId(user.result._id);
    }, [location]);

    return (
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Upload Your Image
            </h6>
          <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <FileBase
                    type="file"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.profileImage
                        ? "is-invalid "
                        : ""
                    }`}
                    defaultValue={user.result.profileImage}
                    onDone={({base64}) => setAccountData({...accountData, profileImage: base64})}
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
              </div>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Player Information
            </h6>
            <div className="flex flex-wrap">
                
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.firstName}
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
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Last Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.lastName}
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
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Email Address
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue={user.result.email}
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
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Phone Number
                        </label>
                        <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.phoneNumber}
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
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    High School Name
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.highSchoolName}
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
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Date of Birth
                    </label>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack>
                                <DatePicker
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    disableFuture
                                    label="Date Picker"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    value={accountData.dob}
                                    onChange={(newDate) => {
                                        setAccountData({...accountData, dob: newDate });
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
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Graduation Year
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.gradYear}
                        onChange={(e) => setAccountData({...accountData, gradYear: e.target.value})}
                    />
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.v
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.gradYear
                            ? validate.validate.gradYear[0]
                            : ""}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    collegeCommitment
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.collegeCommitment}
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
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Player Height
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.height}
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
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Weight
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.weight}
                        onChange={(e) => setAccountData({...accountData, Weight: e.target.value})}
                    />
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.Weight
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.Weight
                            ? validate.validate.Weight[0]
                            : ""}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Throw
                    </label>
                    <select
                    type="select"
                    defaultValue={user.result.pThrow}
                    onChange={(e) => setAccountData({...accountData, pThrow: e.target.value})}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"      
                    placeholder="Name"
                    >
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option value="both">both</option>
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.pThrow
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.pThrow
                            ? validate.validate.pThrow[0]
                            : ""}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Bat
                    </label>
                    <select
                    type="select"
                    defaultValue={user.result.bat}
                    onChange={(e) => setAccountData({...accountData, bat: e.target.value})}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    >
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
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                        Primary Position
                        </label>
                        <select
                        type="select"
                        defaultValue={user.result.primPosition}
                        onChange={(e) => setAccountData({...accountData, primPosition: e.target.value})}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                        >
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
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                        Secondary Position
                        </label>
                        <select
                        type="select"
                        defaultValue={user.result.seconPosition}
                        onChange={(e) => setAccountData({...accountData, seconPosition: e.target.value})}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                        >
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
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Address Information
            </h6>
            <div className="flex flex-wrap">
                <div className="w-full col-12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Address
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.street}
                        placeholder={"Street Address"}
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
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        City
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.city}
                        placeholder="City"
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
                </div>
                <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    State
                    </label>
                    <select
                        type="select"
                        defaultValue={user.result.state}
                        onChange={(e) => setAccountData({...accountData, state: e.target.value})}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                        { states.map((state) => <option key={state.abbreviation}>{state.name}</option> )}
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
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Zipcode
                        </label>
                        <input
                            type="text"
                            defaultValue={user.result.zipcode}
                            onChange={(e) => setAccountData({...accountData, zipcode: e.target.value})}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            >
                        </input>
                        <div
                            className={`invalid-feedback text-start ${
                                validate.validate && validate.validate.v
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
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Parent Information
            </h6>
            <div className="flex flex-wrap">
                <div className="col-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Parent First
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.parentFirst}
                        placeholder={"Parent First"}
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
                </div>
                <div className="col-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Parent Last
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.parentLast}
                        placeholder="Parent Last"
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
                <div className="col-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Parent Email
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue={user.result.parentEmail}
                            placeholder="Parent Last"
                            onChange={(e) => setAccountData({...accountData, parentEmail: e.target.value})}
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
                </div>
                <div className="col-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Parent Phone
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue={user.result.parentPhone}
                            placeholder="Parent Last"
                            onChange={(e) => setAccountData({...accountData, parentPhone: e.target.value})}
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
            <hr/>
            <button
            className="mt-10 col-12 btn-lg btn-success"
            type="button"
            onClick={update}
            >
                Save Updates
            </button>
            </div>
          </form>
        </div>
    )
}

export default PlayerCard;