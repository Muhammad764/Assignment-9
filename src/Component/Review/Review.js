import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Review = () => {
    const [card, setCard] = useState([])
    
    useEffect(() => {
        fetch('fakeData.json') 
            .then(res => res.json())
     .then (data => setCard(data))   
    },[])
    return (
        <div className='grid md:grid-cols-3 gap-8 mt-10 m-20'>
            {
                card.map(cards => <Card key={cards.id} cards={cards}></Card>)
                
            }
            
                
        
           
        </div>
    );
};

export default Review;