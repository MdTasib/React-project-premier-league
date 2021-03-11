import React from 'react';
import classes from '../../Components/app.module.css';

const NotFound = () => {
    return (
        <div>
            <div className={classes.error}>
                <div className={classes.error_message}>
                    <h2>404</h2>
                    <p><strong>Page Not Found</strong></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;