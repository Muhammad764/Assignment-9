import React from 'react';
import {StarIcon} from '@heroicons/react/solid'


const Card = (props) => {
    const {name,picture,about}= props.cards

    return (
        <div className='bg-slate-100 p-4 rounded font-sans font-semibold shadow border-4 border-transparent'>
            <img className='rounded' src={picture} alt="" />
            <h1 className='bg-indigo-500 rounded py-2 mt-2 shadow'>{name}</h1> 
            <div>
                <p className='font-normal mt-2'>{about.slice(0,150)}</p>
            </div>
            <div className='ml-28 text-yellow-500'>
                <p className='w-20 h-20 flex'>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                </p>
            </div>
        </div>
    );
};

export default Card;