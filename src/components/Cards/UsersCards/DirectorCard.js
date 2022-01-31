
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Form from "utilities/Forms";
import states from 'json/states';
import decode from 'jwt-decode';
import { updatedirector } from 'actions/user';
// components

const initialState = {
    active: false, role: "director", firstName: "", lastName: "", email: "", phoneNumber: "", companyName: "", taxId: "",
    street: "", city: "", state: "", zipcode: "", checkingName: "", checkingNum: "",
    routingNum: "", fieldComplexName: "", numOfFields: "", fieldComplexCity: "", fieldComplexState: ""
};

const DirectorCard = () => {
    const [accountData, setAccountData] = useState(initialState);
    const [validate, setValidate] = useState({});
    const [id, setId] = useState({});
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const [isUpdated, setIsUpdated] = useState(false);

    const dispatch = useDispatch();
    // const history = useHistory();

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
            routingNum: {
                value: accountData.routingNum,
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
            setAccountData({...accountData, routingNum: ""});
            setAccountData({...accountData, fieldComplexName: ""});
            setAccountData({...accountData, numOfFields: ""});
            setAccountData({...accountData, fieldComplexCity: ""});
            setAccountData({...accountData, fieldComplexState: ""});
            dispatch(updatedirector(id, accountData));
            window.scroll(0,0);
            setIsUpdated(true);

        }
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime());
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
        setAccountData(user.result)
        setId(user.result._id)
    }, [location]);


    return (
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
          {isUpdated?
              <div class="alert mt-1 uppercase alert-success" role="alert">
                  <h2><span className='text-success font-bold'>SUCCESS</span>: Updated Successfully!</h2>
              </div>:""}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Director Information
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
                    Company Name
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.companyName}
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
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Tax ID
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.taxId}
                        onChange={(e) => setAccountData({...accountData, taxId: e.target.value})}
                    />
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.v
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
            The following is where we will deposit all of your team entry fees
            </h6>
            <div className="flex flex-wrap">
                <div className="col-12">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Name on checking account
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.checkingName}
                        placeholder={"Checking Name"}
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
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        DDA/Checking account number
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={user.result.checkingNum}
                        placeholder="Parent Last"
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
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Routing Number
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue={user.result.routingNum}
                            placeholder="Parent Last"
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
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Name of field complex
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue={user.result.fieldComplexName}
                            placeholder="Parent Last"
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
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Number of fields 
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue={user.result.numOfFields}
                            placeholder="Parent Last"
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
                </div>
            </div>
            
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            City and State where fields/complex are located
            </h6>
            <div className="flex flex-wrap">
            <div className="col-md-6">
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
                <div className="col-md-6">
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

export default DirectorCard;