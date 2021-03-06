import React, { useState, useEffect } from 'react';
import Country from './Country';

const AllCountry = () => {
    const [countrys, setCountrys] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountrys(data))
    }, [])

    return (
        <div>
            {
                countrys.map(country => <Country key={country.alpha3Code} country={country}></Country>)
            }
        </div>
    );
};

export default AllCountry;