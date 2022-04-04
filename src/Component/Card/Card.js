import React from 'react';


const Card = (props) => {
    const {name,picture,about}= props.cards

    return (
        <div className='bg-slate-100 p-4 rounded font-sans font-semibold shadow border-4 border-transparent'>
            <img src={picture} alt="" />
            <h1 className='bg-indigo-400 rounded py-2 mt-2'>{name}</h1> 
            <div>
                <p className='font-normal mt-2'>{about.slice(0,150)}</p>
            </div>
        </div>
    );
};

export default Card;