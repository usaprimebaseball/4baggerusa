
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Form from "utilities/Forms";
import { updateadmin } from 'actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from '@material-ui/core';
// components
  
const initialState = {
    role: "admin", firstName: "", lastName: "", email: "", phoneNumber: ""
};


const AdminCard = () => {
  const [accountData, setAccountData] = useState(initialState);
  const [validate, setValidate] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const [id, setId] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  const error = useSelector(state => state.errors);
  const dispatch = useDispatch();

    const validateForm = () => {
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
        window.scroll(0,0);
        const validate = validateForm();

        if (validate) {
            setValidate({});
            setAccountData({...accountData, firstName: ""});
            setAccountData({...accountData, lastName: ""});
            setAccountData({...accountData, email: ""});
            setAccountData({...accountData, phoneNumber: ""});
            dispatch(updateadmin(id, accountData));
            setIsUpdated(true);
        }
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));

        setAccountData(user.result);

        setId(user.result._id);
    }, [location]);

    return (
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
          {error.length > 0?
              <div className="alert mt-1 uppercase alert-danger" role="alert">
                  <h2><span className='text-danger font-bold'>ERROR</span>: {error[error.length - 1]}</h2>
              </div>:
                isUpdated ? <div className="alert mt-1 uppercase alert-success" role="alert">
                    <h2><span className='text-success font-bold'>SUCCESS</span>: Updated Successfully!</h2>
                </div>:""}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Account Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
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
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
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
                            className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Email Address <span style={{color:'red'}}>(used for Login)</span>
                        </label>
                        <Tooltip title="To update email. Please contact support">
                          <input
                              disabled
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              defaultValue={user.result.email}
                              onChange={(e) =>setAccountData({...accountData, email: e.target.value})}
                          />
                        </Tooltip>
                    </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
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

export default AdminCard;