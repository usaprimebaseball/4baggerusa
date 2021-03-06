import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "utilities/Forms";
import { signin } from 'actions/auth';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminsignin } from "actions/auth";

const initialState = { email: "", password: "" }

export default function Login() {

  const [accountData, setAccountData] = useState(initialState);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [admin, setAdmin] = useState(false);
  const error = useSelector(state => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const validateForm = () => {
      let isValid = true;

      let validator = Form.validator({
          email: {
              value: accountData.email,
              isRequired: true,
              isEmail: true,
          },
          password: {
              value: accountData.password,
              isRequired: true,
              minLength: 6,
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

  const login = (e) => {
      e.preventDefault();
      const validate = validateForm();

      if (validate) {
          setValidate({});
          setAccountData({...accountData, email: ""});
          setAccountData({...accountData, password: ""});

          if (admin) {
            dispatch(adminsignin(accountData, history));
          } else {
            dispatch(signin(accountData, history));
          }
      }
  };

  const toggleAdmin = () => {
    if (admin) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  }

  const togglePassword = (e) => {
      if (showPassword) {
          setShowPassword(false);
      } else {
          setShowPassword(true);
      }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-" style={{paddingTop:"55px"}}>
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blue text-xl font-bold" style={{color:'#0EA5E9'}}>
                    Sign in
                  </h6><br/>
                  <h6 className="text-success text-sm font-bold">
                    Welcome Back!
                  </h6>
                  <div className="text-center mt-6">
                    {admin ?
                    <button
                    className="btn-info text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleAdmin}
                  >
                    Not Admin ?<br/>
                    Click here to sign in.
                  </button>:
                  <button
                  className="btn-danger text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  onClick={toggleAdmin}
                >
                  Admin ?<br/>
                  Click here to sign in.
                </button>
                    }
                  </div>
                  {error.length > 0?
              <div className="alert mt-1 uppercase alert-danger" role="alert">
                  <h2><span className='text-danger font-bold'>ERROR</span>: {error[error.length - 1]}</h2>
              </div>:""}
                </div>
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                </div>
                <form >
                  <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
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

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <div>
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
                        <br/>
                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm "
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
                  
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-success text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={login}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/signup" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
