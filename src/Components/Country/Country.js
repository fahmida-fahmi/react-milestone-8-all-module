import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,area,population, region,flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Area: {area}</p>
            <p>Name: {population}</p>
            <p>Region: {region}</p>
            
        </div>
    );
};

export default Country;