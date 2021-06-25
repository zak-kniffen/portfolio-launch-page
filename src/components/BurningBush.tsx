import React, { useState } from 'react';


const BurningBush = (underneath: any) => {

    
    const myChange = (e: any) => {
        if (e.target.className == "stairs"){

        } else{
            setTimeout(function(){ e.target.className = "burning"; }, 250);
            setTimeout(function(){ e.target.className = "burningMirror"; }, 500);
            setTimeout(function(){ e.target.className = "burning"; }, 750);
            setTimeout(function(){ e.target.className = "burningMirror"; }, 1000);
            setTimeout(function(){ e.target.className = "burning"; }, 1250);
            setTimeout(function(){ e.target.className = "burningMirror"; }, 1500);
            setTimeout(function(){ e.target.className = underneath.underneath; }, 1750);
        }


        
        
    }

    
    return (
        <p className="image"  onMouseEnter={myChange}> </p>
    );
};

export default BurningBush;