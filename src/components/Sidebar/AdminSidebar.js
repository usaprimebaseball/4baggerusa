/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "assets/img/logo.png";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function DirectorSidebar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')));
}, [location]);

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => collapseShow === "hidden"?  setCollapseShow("bg-white m-2 py-3 px-6"): setCollapseShow("hidden")}
          >
            {collapseShow === "hidden"?<i className="fas fa-bars"></i>:<i className="fas fa-times"></i>}
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <img src={Logo} style={{height:'85px'}}/>
          </Link>
          {/* User */}
          <ul className="mt-1 md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
              </div>
            </div>

            {/* Heading */}
            <h6 className="col-md-12 text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Menu
            </h6>
            {/* Navigation */}

            <ul className="col-md-12 md:flex-col md:min-w-full flex flex-col list-none">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to={`/account/${user.result.role}/${user.result._id}`}
                >
                  <i className="fas fa-tools mr-2 text-sm " />
                  Update Details
                </Link>

                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to={`/account/${user.result.role === 'other' ? 'user':user.result.role}/${user.result._id}/users`}
                >
                  <i className="fa fa-baseball-ball mr-2 text-sm " />
                  Users
                </Link>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
