import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AllCountry from './AllCountry';
import NoMatch from './NoMatch';
import CountryInfo from './CountryInfo';

const CountryRoute = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/home'><AllCountry /></Route>
                    <Route exact path='/'><AllCountry /></Route>
                    <Route path='/country/:countryName'><CountryInfo /></Route>
                    <Route path='*'><NoMatch /></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default CountryRoute;