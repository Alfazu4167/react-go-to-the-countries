import React, { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    // console.log(country.population.population);
    const [visited, setVisited] = useState(false)
    const updateVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2 className='text-black'>Name: {country?.name?.common}</h2>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Population: {country?.population?.population} </p>
            <button onClick={updateVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;