import React, { useState } from 'react';
import states from 'json/states';
import Form from "utilities/Forms";
import { Link } from "react-router-dom";

const Director = () => {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    
    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            name: {
            value: name,
            isRequired: true,
            },
            email: {
            value: email,
            isRequired: true,
            isEmail: true,
            },
            password: {
            value: password,
            isRequired: true,
            minLength: 6,
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

    const register = (e) => {
        e.preventDefault();

        const validate = validateRegister();

        if (validate) {
            setValidate({});
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
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

    const handleNumberChange = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    };
    
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
                
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="First Name"
            />
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
                
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Last Name"
            />
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    
                />
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="(000)000-0000"
                    value={phone}
                    onChange={handleNumberChange}
                    mask="+1\(999) 999-9999"
                />
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    
                />
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
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Tax ID"
                />
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
                
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Street"
            />
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
                
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="city"
            />
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
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="State"
            >
                <option disabled selected >-- State --</option>
                {states.map((state) => {
                return <option key={state.abbreviation}>{state.name}</option>
                })}
            </select>
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
                
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Zipcode"
            />
            </div>
        </div>
        
        <hr/><br/>

        <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>The following is where we will deposit all of your team entry fees: <span style={{color:'red'}}>*</span></span><br/><br/>
        
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    
                />
            </div>

            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    DDA/checking account <span style={{color:'red'}}>*</span>
                </label>
                <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="..."
                    
                />
            </div>
            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Confirm DDA/checking account <span style={{color:'red'}}>*</span>
                </label>
                <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="..."
                    
                />
            </div>

            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    routing number <span style={{color:'red'}}>*</span>
                </label>
                <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="..."
                    
                />
            </div>

            <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    confirm routing number<span style={{color:'red'}}>*</span>
                </label>
                <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="..."
                    
                />
            </div>  
        </div>
        
        <hr/><br/>

        <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>Please complete the following info for each field/complex where you throw tournaments: <span style={{color:'red'}}>*</span></span><br/><br/>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            name of field complex <span style={{color:'red'}}>*</span>
          </label>
          <input
            type="text"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Field name"
            
          />
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
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="# of fields"
            
          />
        </div>

        <hr/><br/>

        <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>City and state where fields/complex are located: <span style={{color:'red'}}>*</span></span><br/><br/>
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
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="city"
                
            />
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
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="State"
            >
                <option disabled selected >Choose your state..</option>
            {states.map((state) => {
                return <option key={state.abbreviation}>{state.name}</option>
                })}
            </select>
            </div>
        </div><hr/><br/>

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
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
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
                        validate.validate && validate.validate.password
                            ? "is-invalid "
                            : ""
                        }`}
                        name="password"
                        id="password"
                        value={passwordConfirm}
                        placeholder="Password"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
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

export default Director;