import React, { useState, useEffect } from 'react';
import { createPopper } from "@popperjs/core";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actionType from '../../constants/actionTypes';
const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');
    
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <a
            className="btn btn-success text-white hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
            href="/"
          >
            <i className="fas fa-user-circle"></i>&nbsp;
            Account
          </a>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          to={`/account/${user?.result.role === "admin" ? "admin/":""}${user?.result._id}`}
          className="text-info hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold text-lightBlue"
        >
          <i className="fas fa-tachometer-alt"></i>&nbsp;
          Dashboard
        </Link>
        <Link
          to="/"
          className="text-info hover:text-blueGray-500 0 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold text-lightBlue"
          onClick={logout}
        >
          <i className="fas fa-sm fa-sign-out-alt"></i>&nbsp;
          Log Out
        </Link>
      </div>
    </>
  );
};

export default UserDropdown;
