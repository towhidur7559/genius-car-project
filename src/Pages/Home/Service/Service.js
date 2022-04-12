import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,img,description,price}= service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <button className='btn btn-info'>Book: {name}</button>
        </div>
    );
};

export default Service;