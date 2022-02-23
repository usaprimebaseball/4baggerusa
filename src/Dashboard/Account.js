import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import UserDetails from "dashboard/UserDetails";
import SelectedUserDetails from "dashboard/SelectedUserDetails";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import AdminSidebar from 'components/Sidebar/AdminSidebar';
import UserActivity from 'components/Cards/userActionsCards/AdminActions/UserActivity';
import CreateEvent from 'components/Cards/userActionsCards/DirectorActions/CreateEvent';
import DirectorSidebar from 'components/Sidebar/DirectorSidebar';
import Invoices from 'components/Cards/userActionsCards/AdminActions/Invoices';
import SelectedInvoicePage from 'dashboard/SelectedInvoicePage';

// views

export default function Account() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [selectedUser, setSelectedUser] = useState(JSON.parse(localStorage.getItem('selectedUser')));
  const invoice = JSON.parse(localStorage.getItem('invoice'));

  const location = useLocation();
  const history = useHistory();

  const routing = (route) => {
    history.push(route);
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));

    setSelectedUser(JSON.parse(localStorage.getItem('selectedUser')));
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
          {user?.result.role === "admin" ? 
          <>
            <Route exact path={`/account/admin/users`} component={UserActivity} />
            <Route exact path={`/account/admin/invoices`} component={Invoices} />
            {invoice? <Route exact path={`/account/admin/invoices/${invoice._id}`} component={SelectedInvoicePage} /> : ""}
            <Route exact path={`/account/admin/${user.result._id}`} component={UserDetails} />
            <Route exact path={`/account/admin`} component={UserDetails} />
            {selectedUser? <Route exact path={`/account/users/${selectedUser.firstName}`} component={SelectedUserDetails} /> : ""}
          </>
          :
          <>
            <Route exact path={`/account/${user.result._id}/createtournament`} component={CreateEvent} />
            <Route exact path={`/account/${user?.result.role === 'admin' ? "admin/":""}${user.result._id}`} component={UserDetails} />
            <Route exact path={`/account/${user?.result.role === 'admin' ? "admin/":""}`} component={UserDetails} />
          </>
          }
          
        </Switch>
      <FooterAdmin />
      </div>
      </>
      }
    </>
  );
}
