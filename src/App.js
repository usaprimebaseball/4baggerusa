import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Account from "dashboard/Account";
import Auth from "layouts/Auth";

// views without layouts
import AboutUs from "views/AboutUs";
import ContactUs from "views/ContactUs";
import Rules from "views/Rules";
import Index from "views/Index";
import EventsMainPage from "views/events/EventsMainPage";
import Checkout from "components/Forms/CheckoutForm";
import EnrollmentInvoicePage from "views/events/EnrollmentInvoicePage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/account" component={Account} />
                <Route path="/auth" component={Auth} />
                <Route exact path={`/Events/tournaments/:eventName/checkout`} component={Checkout} />
                <Route exact path={`/Events/tournaments/:eventName/invoice`} component={EnrollmentInvoicePage} />

                {/* add routes without layouts */}
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/rules" component={Rules} />
                <Route path="/Events" component={EventsMainPage} />
                <Route path="/" exact component={Index} />
                {/* add redirect for first page */}
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;

