import React from 'react';
import classes from '../../Components/app.module.css'
import { useHistory } from 'react-router-dom';


const Team = (props) => {
    const history = useHistory();

    const onClick = (id) => {
        const url = `/team/${id}`
        history.push(url);
    }

    const { strTeam, strTeamBadge, idTeam } = props.team;
    return (
        <div className={classes.col_4}>
            <div className={classes.team}>
                <img src={strTeamBadge} alt="" />
                <h3>{strTeam}</h3>
                <h4>Sports type : Football</h4>
                <button onClick={() => onClick(idTeam)} className={classes.btn}>Explore  &#x2192;</button>
            </div>
        </div>
    );
};

export default Team;