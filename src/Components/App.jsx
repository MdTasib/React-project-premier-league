import React from 'react';
import Home from './Home/Home';
import '../Components/app.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TeamDetails from './Team/TeamDetails';
import NotFound from './404/NotFound';

const Index = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/home'><Home /></Route>
                    <Route path='/teams'><Home /></Route>
                    <Route path='/team/:idTeam'><TeamDetails /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route path='*'><NotFound /></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Index;