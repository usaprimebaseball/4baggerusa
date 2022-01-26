/*eslint-disable*/
import React from 'react';

import Navbar from "../Navbars/navbar"

export default function IndexNavbar() {

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <Navbar />
      </nav>
    </>
  );
}
