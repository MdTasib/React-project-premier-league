import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Home/Header';
import classes from '../../Components/app.module.css';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.png';
const TeamDetails = () => {

    const { idTeam } = useParams();

    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(response => response.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [])


    const { strTeamBadge, strAlternate, strTeam, strCountry, strGender, strLeague, intFormedYear, strDescriptionEN, strDescriptionDE, strTeamFanart4, strTwitter, strFacebook, strYoutube } = teamDetails;

    return (
        <div>
            <Header logo={strTeamBadge}></Header>
            <div className={`${classes.details_section}`}>
                <div className={`${classes.container}`}>
                    <div className={`${classes.details} ${classes.row}`}>
                        <div className={`${classes.details_info}`}>
                            <h2>{strTeam || strAlternate}</h2>
                            <p><strong>&#x267B; Founded :</strong> {intFormedYear}</p>
                            <p><strong>&#x2691; League : </strong>{strLeague}</p>
                            <p><strong>&#9917; Country : </strong>{strCountry}</p>
                            <p><strong>웃 Gender : </strong>{strGender}</p>
                        </div>
                        <div className={`${classes.details_img}`}>
                            <img src={strTeamFanart4} alt="" />
                        </div>
                    </div>
                    <div className={classes.description}>
                        <p><strong>Team Description : </strong>{strDescriptionEN || strDescriptionDE}</p>
                    </div>
                    <div className={`${classes.social}`}>
                        <a href={`https://${strTwitter}`} target="_blank"><img src={twitter} alt="" /></a>
                        <a href={`https://${strFacebook}`} target="_blank"><img src={facebook} alt="" /></a>
                        <a href={`https://${strYoutube}`} target="_blank"><img src={youtube} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;