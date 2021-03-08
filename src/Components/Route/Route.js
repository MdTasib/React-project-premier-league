import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import PostDetails from './Post/PostDetails';


const BasicRoute = () => {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path='/home'><Home /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/post/:id'><PostDetails /></Route>
                        <Route path='/'><Home /></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default BasicRoute;