import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import UserDetails from "dashboard/UserDetails";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import AdminSidebar from 'components/Sidebar/AdminSidebar';
import UserActivity from 'components/Cards/userActionsCards/AdminActions/UserActivity';
import CreateEvent from 'components/Cards/userActionsCards/DirectorActions/CreateEvent';

import DirectorSidebar from 'components/Sidebar/DirectorSidebar';

// views

export default function Account() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const history = useHistory();

  const routing = (route) => {
    history.push(route);
  }
  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')));
}, [location]);

  return (
    <>
    {
    !user?routing(`/auth/login`):
    
    <>
      {user?.result.role === 'admin' ? <AdminSidebar />:user?.result.role === 'director' ? <DirectorSidebar />:<Sidebar />}
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <Switch>
          <Route exact path={`/account/${user.result.role === 'other' ? 'user':user.result.role}/${user.result._id}/users`} component={UserActivity} />
          <Route exact path={`/account/${user.result.role === 'other' ? 'user':user.result.role}/${user.result._id}/createtournament`} component={CreateEvent} />
          <Route exact path={`/account/${user.result.role === 'other' ? 'user':user.result.role}/${user.result._id}`} component={UserDetails} />
          <Route exact path={`/account/`} component={UserDetails} />
          <Route exact path={`/account/${user.result.role === 'other' ? 'user':user.result.role}/`} component={UserDetails} />
        </Switch>
      <FooterAdmin />
      </div>
      </>
      }
    </>
  );
}
