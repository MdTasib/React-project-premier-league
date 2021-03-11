import React from 'react';
import classes from '../../Components/app.module.css'



const Header = ({ logo }) => {
    return (
        <div>
            <div className={classes.header}>
                {
                    window.location.pathname === '/' ? <h4 className={classes.title}>UEFA</h4> : <img src={logo} alt="" />
                }
            </div>
        </div >
    );
};

export default Header;