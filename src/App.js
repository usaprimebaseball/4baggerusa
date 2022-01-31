import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Account from "components/Dashboard/Account";
import Auth from "layouts/Auth.js";

// views without layouts

import AboutUs from "views/AboutUs.js";
import ContactUs from "views/ContactUs.js";
import Rules from "views/Rules";
import Index from "views/Index.js";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/account" component={Account} />
                <Route path="/auth" component={Auth} />
                {/* add routes without layouts */}
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/rules" component={Rules} />
                <Route path="/" exact component={Index} />
                {/* add redirect for first page */}
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;

