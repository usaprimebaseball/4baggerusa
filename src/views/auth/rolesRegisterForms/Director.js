import React, { useState } from 'react';
import states from 'json/states';
import Form from "utilities/Forms";
import { directorsignup } from 'actions/auth';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const initialState = {
    active: false, role: "director", firstName: "", lastName: "", email: "", phoneNumber: "", companyName: "", taxId: "",
    street: "", city: "", state: "", zipcode: "", checkingName: "", checkingNum: "", confirmCheckingNum: "",
    routingNum: "", confirmRoutingNum: "",fieldComplexName: "", numOfFields: "", fieldComplexCity: "", fieldComplexState: "", password: "", passwordConfirm: "", agreeBtn: ""
};

const Director = () => {
    const [accountData, setAccountData] = useState(initialState);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [checkingNumMatch, setCheckingNumMatch] = useState(true);
    const [routingNumMatch, setRoutingNumMatch] = useState(true);

    const dispatch = useDispatch();
    const history = useHistory();

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
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
            companyName: {
                value: accountData.companyName,
                isRequired: true,
            },
            taxId: {
                value: accountData.taxId,
                isRequired: true,
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
                maxLength: 2
            },
            zipcode: {
                value: accountData.zipcode,
                isRequired: true,
            },
            checkingName: {
                value: accountData.checkingName,
                isRequired: true,
            },
            checkingNum: {
                value: accountData.checkingNum,
                isRequired: true,
            },
            confirmCheckingNum: {
                value: accountData.confirmCheckingNum,
                isRequired: true,
            },
            routingNum: {
                value: accountData.routingNum,
                isRequired: true,
            },
            confirmRoutingNum: {
                value: accountData.confirmRoutingNum,
                isRequired: true,
            },
            fieldComplexName: {
                value: accountData.fieldComplexName,
                isRequired: true,
            },
            numOfFields: {
                value: accountData.numOfFields,
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

        if ( accountData.confirmRoutingNum !== accountData.routingNum ) {
            setRoutingNumMatch(false);
        } else {
            setRoutingNumMatch(true);
        }

        if ( accountData.confirmCheckingNum !== accountData.checkingNum ) {
            setCheckingNumMatch(false);
        } else {
            setCheckingNumMatch(true);
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

        console.log(accountData);
        
        const validate = validateRegister();

        if (validate) {
            setValidate({});
            setAccountData({...accountData, firstName: ""});
            setAccountData({...accountData, lastName: ""});
            setAccountData({...accountData, email: ""});
            setAccountData({...accountData, phoneNumber: ""});
            setAccountData({...accountData, companyName: ""});
            setAccountData({...accountData, taxId: ""});
            setAccountData({...accountData, street: ""});
            setAccountData({...accountData, city: ""});
            setAccountData({...accountData, state: ""});
            setAccountData({...accountData, zipcode: ""});
            setAccountData({...accountData, checkingName: ""});
            setAccountData({...accountData, checkingNum: ""});
            if (accountData.confirmCheckingNum === accountData.checkingNum ) {
                setAccountData({...accountData, confirmCheckingNum: ""})
            };
            setAccountData({...accountData, routingNum: ""});
            setAccountData({...accountData, confirmCheckingNum: ""});
            setAccountData({...accountData, fieldComplexName: ""});
            setAccountData({...accountData, numOfFields: ""});
            setAccountData({...accountData, fieldComplexCity: ""});
            setAccountData({...accountData, fieldComplexState: ""});
            setAccountData({...accountData, password: ""});
            setAccountData({...accountData, passwordConfirm: ""});

            dispatch(directorsignup(accountData, history));
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
        <div className="directorForm">
        
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
                    Last name <span style={{color:'red'}}>*</span>
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
                    Director Email <span style={{color:'red'}}>*</span>
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
                    Director Phone Number <span style={{color:'red'}}>*</span>
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
                    Company Name <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.companyName
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.companyName}
                    placeholder="Company Name"
                    onChange={(e) => setAccountData({...accountData, companyName: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.companyName
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.companyName
                    ? validate.validate.companyName[0]
                    : ""}
                </div>
            </div>

            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Tax ID <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.taxId
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.taxId}
                    placeholder="Tax ID"
                    onChange={(e) => setAccountData({...accountData, taxId: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.taxId
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.taxId
                    ? validate.validate.taxId[0]
                    : ""}
                </div>
            </div>
        </div>
        
        <hr/><br/>
        <span className="uppercase text-info font-bold">address: <span style={{color:'red'}}>*</span></span><br/><br/>
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
                    value={accountData.state}
                    onChange={(e) => setAccountData({...accountData, state: e.target.value})}
                    className={`form-control ${
                        validate.validate && validate.validate.state
                          ? "is-invalid "
                          : ""
                      }`}
                    >
                    <option defaultValue={true} value="">-- State --</option>
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

        <span className="uppercase text-info font-bold">The following is where we will deposit all of your team entry fees: <span style={{color:'red'}}>*</span></span><br/><br/>
        
        <div className='row'>
            <div className="relative col-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Name on checking account <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.checkingName
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.checkingName}
                    placeholder="name of checking account"
                    onChange={(e) => setAccountData({...accountData, checkingName: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.checkingName
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.checkingName
                    ? validate.validate.checkingName[0]
                    : ""}
                </div>
            </div>

            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    DDA/checking account <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.checkingNum
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.checkingNum}
                    placeholder="DDA/checking account"
                    onChange={(e) => setAccountData({...accountData, checkingNum: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.checkingNum
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.checkingNum
                    ? validate.validate.checkingNum[0]
                    : ""}
                </div>
            </div>
            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Confirm DDA/checking account <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.confirmCheckingNum
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.confirmCheckingNum}
                    placeholder="Confirm DDA/checking account"
                    onChange={(e) => setAccountData({...accountData, confirmCheckingNum: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.confirmCheckingNum
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.confirmCheckingNum
                    ? validate.validate.confirmCheckingNum[0]
                    : ""}
                </div>
            </div>

            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    routing number <span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.routingNum
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.routingNum}
                    placeholder="routing number"
                    onChange={(e) => setAccountData({...accountData, routingNum: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.routingNum
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.routingNum
                    ? validate.validate.routingNum[0]
                    : ""}
                </div>
            </div>

            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    confirm routing number<span style={{color:'red'}}>*</span>
                </label>
                <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.confirmRoutingNum
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.confirmRoutingNum}
                    placeholder="confirm routing number"
                    onChange={(e) => setAccountData({...accountData, confirmRoutingNum: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.confirmRoutingNum
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.confirmRoutingNum
                    ? validate.validate.confirmRoutingNum[0]
                    : ""}
                </div>
            </div>  
        </div>
        
        <hr/><br/>

        <span className="uppercase text-info font-bold">Please complete the following info for each field/complex where you throw tournaments: <span style={{color:'red'}}>*</span></span><br/><br/>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
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
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            number of fields <span style={{color:'red'}}>*</span>
          </label>
          <input
                type="text"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.numOfFields
                        ? "is-invalid "
                        : ""
                    }`}
                    value={accountData.numOfFields}
                    placeholder="number of fields"
                    onChange={(e) => setAccountData({...accountData, numOfFields: e.target.value})}
                />

                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.numOfFields
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.numOfFields
                    ? validate.validate.numOfFields[0]
                    : ""}
                </div>
        </div>

        <hr/><br/>

        <span className="uppercase text-info font-bold">City and state where fields/complex are located: <span style={{color:'red'}}>*</span></span><br/><br/>
        <div className='row'>
            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
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
                    placeholder="City"
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
            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
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
                    placeholder="State"
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
        </div><hr/><br/>

        <span className="uppercase text-info font-bold">set your password: <span style={{color:'red'}}>*</span></span><br/><br/>

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
                onChange={(e) => setAccountData({...accountData, agreeBtn: e.target.checked})}
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
            {!accountData.agreeBtn ?
                <div className='alert alert-warning font-bold'>
                <i class="fas fa-exclamation-triangle"></i> YOU MUST AGREE WITH THE PRIVACY POLICY TO COMPLETE REGISTRATION!
            </div>: ""}
        </div>

        {!passwordMatch ?
        <div className='alert alert-danger'>
            <i class="fas fa-exclamation-triangle"></i> Password is not matching the confirmation!
        </div>: ""}

        {!checkingNumMatch ? 
        <div className='alert alert-danger'>
            <i class="fas fa-exclamation-triangle"></i> Checking Account Number is not matching it's confirmation!
        </div>:""}

        {!routingNumMatch ? 
        <div className='alert alert-danger'>
           <i class="fas fa-exclamation-triangle"></i> Routing Number is not matching the confirmation!
        </div>:""}

        <div className="text-center mt-6">
            <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
                onClick={register}
            >
                Create Account
            </button>
        </div>
    </div>
    )
};

export default Director;