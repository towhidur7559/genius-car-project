import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,img,description,price,id}= service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={() =>navigateToServiceDetail(id)} className='btn btn-info'>Book: {name}</button>
        </div>
    );
};

export default Service;