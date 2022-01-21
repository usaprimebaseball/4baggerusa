import React, { useState } from 'react';


const Other = () => {
    const [phone, setPhone] = useState("");

    const handleNumberChange = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    };

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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    
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
    </div>
    )
};

export default Other;