import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, alpha3Code, population, flag } = props.country;

    const history = useHistory();
    const handleCountry = countryName => {
        history.push(`/country/${countryName}`);
    }

    const countrInfo = {
        border: '1px solid red',
        padding: '10px',
        margin: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={countrInfo}>
            <img style={{ width: '250px' }} src={flag} alt="" />
            <h2>Name :{name} </h2>
            <p>Population : {population}</p>
            <p>Nick Name : {alpha3Code}</p>
            <Link to={`/country/${name}`}><button>Show More</button></Link><br />
            <button onClick={() => handleCountry(name)}>Click Me</button>
        </div>
    );
};

export default Country;