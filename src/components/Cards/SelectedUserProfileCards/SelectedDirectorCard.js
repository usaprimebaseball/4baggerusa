import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import UpdateActivityModal from 'components/Modals/UpdateActivityModal';

// components

const SelectedDirectorCard = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('selectedUser')));
    const [show, setShowModal] = useState(false);
    window.scroll(0, 0);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('selectedUser')));
    }, [location]);


    return (
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <UpdateActivityModal active ={user.active} show = {show} setShowModal = {setShowModal} user = {user} history = {history}/>
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Tournament Director Information
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
                    value={user.firstName}
                    readOnly
                  />
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
                    value={user.lastName}
                    readOnly
                  />
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
                          <input
                              disabled
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              value={user.email}
                              readOnly
                          />
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
                        value={user.phoneNumber}
                        readOnly
                        />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Company Name
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.companyName}
                        readOnly
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                    >
                    Tax ID
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.taxId}
                    />
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
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Address
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.street}
                        readOnly
                        placeholder={"Street Address"}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        City
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.city}
                        readOnly
                        placeholder="City"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        State
                        </label>
                        <input
                            type="text"
                            value={user.state}
                            readOnly
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            >
                        </input>
                    </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Zipcode
                        </label>
                        <input
                            type="text"
                            value={user.zipcode}
                            readOnly
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            >
                        </input>
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
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Name on checking account
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.checkingName}
                        readOnly
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        DDA/Checking account number
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.checkingNum}
                        readOnly
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Routing Number
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={user.routingNum}
                            readOnly
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Name of field complex
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={user.fieldComplexName}
                            readOnly
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Number of fields 
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={user.numOfFields}
                            readOnly
                        />
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
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    City
                    </label>
                    <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.city}
                    readOnly
                    />
                </div>
                </div>
                <div className="col-md-6">
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        State
                        </label>
                        <input
                            type="text"
                            value={user.state}
                            readOnly
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            >
                        </input>
                    </div>
                </div>
            <hr/>
            <div className="w-full px-4 text-center">
                <hr/>
                  <div className="relative">
                    {user.active ? 
                      <button type="button" onClick={() => setShowModal(true)} className="mt-10 col-md-8 btn-lg btn-danger" variant="contained">
                      Deactivate
                    </button>:
                    <button type="button" onClick={() => setShowModal(true)} className="mt-10 col-md-8 btn-lg btn-success" variant="contained">
                      Activate
                    </button>
                      }
                  </div>
              </div>
            </div>
          </form>
        </div>
    )
}

export default SelectedDirectorCard;