import React, { useState } from 'react';


const BurningBush = () => {

    const [ bushPicture, setBushPicture ] = useState('');
    const myChange = (e: any) => {
        
        e.target.className = "burnt";
        
    }

    
    return (
        <p className="image" onMouseLeave={myChange}> </p>
    );
};

export default BurningBush;