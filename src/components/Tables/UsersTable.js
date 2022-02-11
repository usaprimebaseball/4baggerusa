import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { getusers } from "actions/user";
import PropTypes from "prop-types";
import GoBack from "views/GoBackPage";
import { getuser } from "actions/user";

// components
export default function UsersTable({ color }) {
  const dispatch = useDispatch();
  window.scroll(0, 0);
  const users = useSelector((state) => state.users);
  const location = useLocation();
  const history = useHistory();

  const handleNameClick = (user) => {
    dispatch(getuser(user._id, history));
  };

  useEffect(() => {    
    dispatch(getusers());
}, [location]);

  return (
    <>
      <div
        style={{marginBottom: users.length === 0 ?"122px":"0"}}
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Accounts List
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center col-12 bg-transparent border-collapse ">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Full Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Role
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email Address
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
              {users ? users.map((user) => (
                 <tbody key={user._id}> 
                <tr>
                  <th>
                    <button type="button" onClick={() => handleNameClick(user)} className="btn-outline-info border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    {user.profileImage?<img
                          src={user.profileImage}
                          className="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        ></img>:user.firstName ? <Avatar className="bg-danger font-bold">{user.firstName.charAt(0)}</Avatar>:<Avatar className="bg-danger font-bold"></Avatar>}
                        
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                            {user.role === "team" ? user.firstName + " " + user.lastName + " / " + user.teamName:user.firstName + " " + user.lastName}

                        </span>
                      </button>
                  </th>
                  <td className="uppercase border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.role === "team" ? "Head Coach / Team": user.role}
                  </td>
                  <td className="uppercase border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.email}
                  </td>
                  <td className="uppercase border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.phoneNumber}
                  </td>
                  <td className="uppercase border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.active ? <i className="fas fa-circle text-success mr-2"> Active</i> :<i className="fas fa-circle text-danger mr-2"> Inactive</i>}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                    <button  onClick={() => handleNameClick(user)} className="btn btn-primary" variant="contained">
                      View Details / Manage Activation
                    </button>
                  </td>
                </tr>
                
              </tbody> 
              )):<GoBack />}
          </table>
        </div>
      </div>
    </>
  );
}

UsersTable.defaultProps = {
  color: "light",
};

UsersTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

