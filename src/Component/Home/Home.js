import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import images from '../Image/headphone.png'
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('fakeData.json') 
            .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div >
            <div className='flex place-content-around mt-10'>
                <div>
                <h1 className='text-4xl font-bold py-8 mt-10'>Your Next Headphone</h1>
                <h2 className='text-4xl font-bold'>Get The Best</h2>
                <p className='text-base py-3'>We made quality products.<br/>Get your dream headphone and enjoy every moment.<br/>We Believe in quality product  </p>
                <button className='bg-green-500 py-2 rounded shadow text-white font-medium hover:bg-emerald-700 px-3 mt-5'>See Details</button>
            </div>
            <div className='img mt-4'>
                <img src={images} alt="" />
            </div>
            </div>

            <div>
                <p className='text-4xl font-bold mt-24 mb-20'>Customer Reviews</p>
                     
                <div className='grid md:grid-cols-3 gap-8 mt-10 m-20'>
                    {
                    reviews.slice(0,3).map(cards => <Card key={cards.id}cards={cards}></Card>)
                    }
               </div>

                <div className='mb-20'>
                     <NavLink className='bg-indigo-600 py-2 rounded shadow text-white font-medium hover:bg-violet-700 px-8 mb-5' to="/review">See All Reviews</NavLink>
               </div>
              
            </div>
          
        </div>
        
    );
};

export default Home;