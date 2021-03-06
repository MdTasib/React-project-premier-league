import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NoMatch from './NoMatch';
import Friends from './Home';
import FriendDetails from './FriendDatails';

const RouterCompotent = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/home'><Friends /></Route>
                    <Route exact path='/'><Friends /></Route>
                    <Route path='/friend/:friendId'><FriendDetails /></Route>
                    <Route path='*'><NoMatch /></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default RouterCompotent;