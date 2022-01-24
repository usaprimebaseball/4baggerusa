import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import states from 'json/states';
import { Link } from "react-router-dom";
import Form from "utilities/Forms";

const Team = () => {

    const [accountData, setAccountData] = useState({
        role: "team", teamName: "", firstName: "", lastName: "", email: "", phoneNumber: "", city: "", state: "", ageGroup: "", 
        division: "", password: "", passwordConfirm: "", agreeBtn: ""
    });
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    
    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            teamName: {
                value: accountData.teamName,
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
            city: {
                value: accountData.city,
                isRequired: true,
            },
            state: {
                value: accountData.state,
                isRequired: true,
            },
            ageGroup: {
                value: accountData.ageGroup,
                isRequired: true,
            },
            division: {
                value: accountData.division,
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
            setValidate(false);
        } else {
            setPasswordMatch(true);
            setValidate(true);
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
            setAccountData({...accountData, firstName: ""});
            setAccountData({...accountData, lastName: ""});
            setAccountData({...accountData, email: ""});
            setAccountData({...accountData, phoneNumber: ""});
            setAccountData({...accountData, teamName: ""});
            setAccountData({...accountData, city: ""});
            setAccountData({...accountData, state: ""});
            setAccountData({...accountData, ageGroup: ""});
            setAccountData({...accountData, division: ""});
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
        <div className="teamForm">
            <div className="relative w-full mb-3">
                <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
                >
                Team Name <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.teamName
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.companyName}
                    placeholder="Team Name"
                    onChange={(e) => setAccountData({...accountData, teamName: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.teamName
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.teamName
                    ? validate.validate.teamName[0]
                    : ""}
                </div>
            </div>
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Head Coach First Name <span style={{color:'red'}}>*</span>
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
                    Head Coach Last Name <span style={{color:'red'}}>*</span>
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
                    Head Coach Email <span style={{color:'red'}}>*</span>
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
                    Head Coach Number <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
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

            <div className='row'>
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
            </div>

            <div className="relative w-full mb-3">
                <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
                >
                Team Profile <span style={{color:'red'}}>*</span>
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
                    Age group <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                        type="select"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.ageGroup
                            ? "is-invalid "
                            : ""
                        }`}                    placeholder="Name"
                        >
                        <option disabled selected >Select age group..</option>
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

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Division <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                        type="select"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.division
                            ? "is-invalid "
                            : ""
                        }`}                        placeholder="Name"
                        >
                        <option disabled selected >Select division..</option>
                        <option value="aa">AA</option>
                        <option value="aaa">AAA</option>
                        <option value="majors">Majors</option>
                        <option value="showcase">Showcase</option>
                        <option value="highSchool">High School</option>
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.division
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.division
                            ? validate.validate.division[0]
                            : ""}
                    </div>
                </div>
            </div>
            <hr/><br/>

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
                value={accountData.agreeBtn}
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

export default Team;