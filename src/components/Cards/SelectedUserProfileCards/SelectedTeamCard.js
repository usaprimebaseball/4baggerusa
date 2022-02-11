
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import UpdateActivityModal from 'components/Modals/UpdateActivityModal';

// components

const SelectedTeamCard = () => {
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
              Account Information
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Team Name
                    </label>
                    <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.teamName}
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
                            Head Coach Email Address <span style={{color:'red'}}>(used for Login)</span>
                        </label>
                          <input
                              readOnly
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              value={user.email}
                          />
                    </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Head Coach Phone Number
                  </label>
                  <input
                    readOnly
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.phoneNumber}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Head Coach First Name
                  </label>
                  <input
                    readOnly
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.firstName}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Head Coach Last Name
                  </label>
                  <input
                    readOnly
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.lastName}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Age Group
                  </label>
                  <input
                        readOnly
                        type="select"
                        value={user.ageGroup}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                    </input>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Division
                    </label>
                    <input
                        readOnly
                        type="select"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"   
                        value={user.division}
                        >
                     </input>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Address Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    readOnly
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.city}
                    placeholder="City"
                    />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    State
                  </label>
                  <input
                        readOnly
                        type="select"
                        value={user.state}
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

export default SelectedTeamCard;