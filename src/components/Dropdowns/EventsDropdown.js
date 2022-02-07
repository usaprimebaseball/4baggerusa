import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
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
  return (
    <>
      <a
        className="text-white btn btn-success hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
      <i className="fas fa-chevron-circle-down"></i>&nbsp;
       Events
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          to="/admin/dashboard"
          className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
          Events / Tournaments
        </Link>
        <hr/>
        <Link
          to="/admin/settings"
          className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
          Showcases
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
