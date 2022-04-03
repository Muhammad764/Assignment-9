import React from 'react';
import images from '../Images/headphone.png'
import './Home.css'

const Home = () => {
    return (
        <div >
            <div className='flex place-content-around mt-10'>
                <div>
                <h1 className='text-4xl font-bold py-8 '>Your Next Headphone</h1>
                <h2 className='text-4xl font-bold'>Get The Best</h2>
                <p className='text-base py-3'>We made quality products.<br/>Get your dream headphone and enjoy every moment</p>
                <button className='bg-green-500 py-2 rounded shadow text-white font-medium hover:bg-emerald-700 px-3'>See Details</button>
            </div>
            <div className='img'>
                <img src={images} alt="" />
            </div>
            </div>
            <div>
                <p className='text-4xl font-bold mt-36 mb-20'>Customer Reviews</p>


                <button className='bg-indigo-600 py-2 rounded shadow text-white font-medium hover:bg-violet-700 px-8 mb-20'>See All Reviews</button>

            </div>
          
        </div>
        
    );
};

export default Home;