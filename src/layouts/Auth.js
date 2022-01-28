import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Account from "components/Dashboard/Account";
import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();

  
  useEffect(() => {
    const token = user?.token;

    if (token) {
    const decodedToken = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime());
    }

    setUser(JSON.parse(localStorage.getItem('profile')));

}, [location]);

  return (
    <>
    {!user?
    <>
    <Navbar transparent />
    <main>
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            backgroundImage:
              "url(" + require("assets/img/signup_bg_2.png").default + ")",
          }}
        ></div>
        <Switch>
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/signup" exact component={Register} />
          <Redirect from="/auth" to="/auth/login" />
        </Switch>
        <FooterSmall absolute />
      </section>
    </main></>:
    <Account />}
      
    </>
  );
}
