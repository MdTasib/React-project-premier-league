import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
    const { countryName } = useParams();

    let [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [])
    console.log(country)

    let { name, alpha3Code, population, flag } = country;

    return (
        <div>
            <img style={{ width: '250px' }} src={flag} alt="" />
            <h2>Name :{country.name} </h2>
            <p>Population : {population}</p>
            <p>Nick Name : {alpha3Code}</p>
        </div>
    );
};

export default CountryInfo;

