import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import states from 'json/states';
import { Link } from "react-router-dom";

const Team = () => {

    const [phone, setPhone] = useState("");

    const handleNumberChange = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    };

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
                
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Team Name"
                />
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
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Head Coach Name"
                    />
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
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Head Coach Name"
                    />
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    
                    />
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
                multiple={false}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Zipcode"
                />
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    >
                    <option disabled selected >Select division..</option>
                    <option value="aa">AA</option>
                    <option value="aaa">AAA</option>
                    <option value="majors">Majors</option>
                    <option value="showcase">Showcase</option>
                    <option value="highSchool">High School</option>
                    </select>
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
                <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    
                />
                </div>

                <div className="relative col-md-6 col-xs-12 mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Confirm Password <span style={{color:'red'}}>*</span>
                </label>
                <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    
                />
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