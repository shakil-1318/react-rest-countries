import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, flag, population, languages } = props.country

    console.log(props.country)

    return (
        <div className='country'>
            <h3>This is: {name}</h3>
            <h5>City is: {capital}</h5>
            <img src={flag} alt="" />
            <h5>Population is: {population}</h5>
            <h6>Language: {languages[0].name}</h6>
        </div>
    );
};

export default Country;