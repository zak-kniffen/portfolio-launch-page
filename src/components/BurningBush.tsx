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
    const stairsClick = (e: any) => {
        if(e.target.className == "stairs"){
            window.location.href = "https://www.zelda.com/";
        }
    }

    
    return (
        <p data-testid="bushSprite" aria-details="" className="image" onClick={stairsClick} onMouseEnter={myChange}></p>
    );
};

export default BurningBush;