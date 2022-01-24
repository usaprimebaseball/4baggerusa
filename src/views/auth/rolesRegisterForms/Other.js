import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Form from "utilities/Forms";


const Other = () => {
    const [accountData, setAccountData] = useState({
        role: "other", userName: "", firstName: "", lastName: "", email: "", phoneNumber: "", password: "", passwordConfirm: "", agreeBtn: ""
    });
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    
    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            userName: {
                value: accountData.userName,
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
    return(
        <div className="userForm">
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    User Name <span style={{color:'red'}}>*</span>
                </label>
                <input
                    type="text"
                        className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            validate.validate && validate.validate.firstName
                            ? "is-invalid "
                            : ""
                        }`}
                        value={accountData.userName}
                        placeholder="User Name"
                        onChange={(e) => setAccountData({...accountData, userName: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.userName
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.userName
                        ? validate.validate.userName[0]
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

export default Other;