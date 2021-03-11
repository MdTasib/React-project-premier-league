import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import Header from './Header';
import classes from '../../Components/app.module.css';


const Home = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`)
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (

        < div >
            <Header />
            <div className={classes.inner}>
                <div className={`${classes.row} ${classes.container}`}>
                    {
                        teams.map((team, idTeam) => <Team key={idTeam} team={team} />)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;