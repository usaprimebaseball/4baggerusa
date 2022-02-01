import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from "react-router-dom";
import decode from 'jwt-decode';

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import UserDetails from "Dashboard/UserDetails.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import AdminSidebar from 'components/Sidebar/AdminSidebar';
import AdminAction from 'components/Cards/userActionsCards/AdminAction';

// views

export default function Account() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const history = useHistory();

  const routing = (route) => {
    history.push(route);
  }
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
    {
    !user?routing(`/auth/login`):
    
    <>
      {user?.result.role === 'admin' ? <AdminSidebar />:<Sidebar />}
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <Switch>
          <Route exact path={`/account/${user.result.role === 'other' ? 'user':user.result.role}/${user.result._id}/users`} component={AdminAction} />
          <Route exact path={`/account/${user.result.role === 'other' ? 'user':user.result.role}/${user.result._id}`} component={UserDetails} />
        
        </Switch>
      <FooterAdmin />
      </div>
      </>
      }
    </>
  );
}
