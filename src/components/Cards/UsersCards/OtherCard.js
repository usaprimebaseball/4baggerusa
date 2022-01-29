
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Form from "utilities/Forms";
import decode from 'jwt-decode';
import { updateuser } from 'actions/user';
import { useDispatch } from 'react-redux';
// components
  
const initialState = {
    active: false, role: "other", userName: "", firstName: "", lastName: "", email: "", phoneNumber: ""
};


const OtherCard = () => {
  const [accountData, setAccountData] = useState(initialState);
  const [validate, setValidate] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const [id, setId] = useState({});

    const dispatch = useDispatch();
    // const history = useHistory();

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
            setAccountData({...accountData, userName: ""});
            setAccountData({...accountData, firstName: ""});
            setAccountData({...accountData, lastName: ""});
            setAccountData({...accountData, email: ""});
            setAccountData({...accountData, phoneNumber: ""});
            dispatch(updateuser(id, accountData));
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
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Account Information
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    User Name
                    </label>
                    <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.userName}
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
              </div>
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

export default OtherCard;