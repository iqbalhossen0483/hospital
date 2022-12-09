import React from 'react';

const SingleService = (props) => {
    const { name, img, description } = props.service;
    return (
        <div className="mt-10 px-4 w-3/4 mx-auto">
            <img className="mx-auto" src={img} alt="" />
            <p className="text-center text-2xl font-semibold my-4">{name}</p>
            <p className="text-justify">{description}</p>
        </div>
    );
};

export default SingleService;