

import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import Logo from "assets/img/logo.png";
import useStyles from './styles';
import EventsDropdown from "components/Dropdowns/EventsDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

import * as actionType from '../../constants/actionTypes';

    
export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');
        
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    
    const [navbarOpen, setNavbarOpen] = React.useState(false);  
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <div
            className={
              "lg:flex flex-grow items-center text-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="text-white hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center">
              <EventsDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="text-white hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href=""
                >
                  Live Events
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                    to=""
                    className="text-white hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"

                  >
                  Players
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                    to="/aboutus"
                    className="text-white hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"

                  >
                  About Us
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                    to="/rules"
                    className="text-white hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"

                  >
                  Rules
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                    to="/contactus"
                    className="text-white hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"

                  >
                    Contact Us
                  </Link>
              </li>
                {user ? (
                  
                  <div className="flex items-center">
                    <UserDropdown />
                  </div>
                ):(
                  <div className="row">
                    <li className="flex items-center">
                    <Link
                      to="/auth/login"
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"

                    >
                      <i class="fas fa-sign-in-alt fa-fw"></i>&nbsp;
                      Login
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link
                      to="/auth/signup"
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"

                    >
                      <i class="fa fa-user-plus fa-fw"></i>&nbsp;
                      Register
                    </Link>
                  </li>
                  </div>
                )}
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
