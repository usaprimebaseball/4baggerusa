import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
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
                <Route path="/admin" component={Admin} />
                <Route path="/auth" component={Auth} />
                {/* add routes without layouts */}
                <Route path="/aboutus" exact component={AboutUs} />
                <Route path="/contactus" exact component={ContactUs} />
                <Route path="/rules" exact component={Rules} />
                <Route path="/4baggerusa" exact component={Index} />
                {/* add redirect for first page */}
                <Redirect from="*" to="/4baggerusa" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;

