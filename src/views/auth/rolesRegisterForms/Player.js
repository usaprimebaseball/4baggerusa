import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import states from 'json/states';
import { Link } from "react-router-dom";

const Player = () => {
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState(new Date());

    const handleNumberChange = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    };

    return (
        <div className="playerForm">
            <div className="relative w-full mb-3">
                <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
                >
                Player Profile <span style={{color:'red'}}>*</span>
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
                        Email <span style={{color:'red'}}>*</span>
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
                        Phone Number <span style={{color:'red'}}>*</span>
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

            <div className="relative w-full mb-3">
                <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
                >
                High School Name <span style={{color:'red'}}>(If Applicable)</span>
                </label>
                <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Name"
                
                />
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

            <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>Date of Birth: <span style={{color:'red'}}>*</span></span><br/><br/>

            <div className="relative w-full mb-3">
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack>
                    <DatePicker
                    disableFuture
                    label="Date Picker"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={date}
                    onChange={(newDate) => {
                        setDate(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
                </LocalizationProvider>
            </div>
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Graduation Year <span style={{color:'red'}}>*</span>
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
                    College Commitment
                    </label>
                    <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="..."
                    
                    />
                </div>
            </div>

            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    player height <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring ease-linear transition-all duration-150"
                    placeholder="ft,in"
                    
                    />
                </div>  

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    player weight <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="lb"
                    
                    />
                </div>  
            </div>
            <hr/><br/>
            
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Throw <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option value="both">both</option>
                    </select>
                </div>  

                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    bat <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option value="both">both</option>
                    </select>
                </div>  
            </div>
            
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    primary position <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="c">C</option>
                    <option value="1b">1b</option>
                    <option value="2nd">2nd</option>
                    <option value="ss">ss</option>
                    <option value="3b">3b</option>
                    <option value="of">of</option>
                    <option value="rhp">rhp</option>
                    <option value="lhp">lhp</option>
                    </select>
                </div>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    secondary position <span style={{color:'red'}}>*</span>
                    </label>
                    <select
                    type="select"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    >
                    <option disabled selected >Select..</option>
                    <option value="c">C</option>
                    <option value="1b">1b</option>
                    <option value="2nd">2nd</option>
                    <option value="ss">ss</option>
                    <option value="3b">3b</option>
                    <option value="of">of</option>
                    <option value="rhp">rhp</option>
                    <option value="lhp">lhp</option>
                    </select>
                </div>
            </div>  

            <hr/><br/>

            <span className="uppercase" style={{color:"orange", fontWeight:'bold'}}>parent info: <span style={{color:'red'}}>*</span></span><br/><br/>
            <div className='row'>
                <div className="relative col-md-6 col-xs-12 mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Parent First Name <span style={{color:'red'}}>*</span>
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
                        Parent Last Name <span style={{color:'red'}}>*</span>
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
                        Parent Email <span style={{color:'red'}}>*</span>
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
                        Parent Phone Number <span style={{color:'red'}}>*</span>
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

export default Player;