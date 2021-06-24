import React from 'react';
import logo from './logo.svg';
import triforce from './clipart1751770.png';
import BurningBush from './components/BurningBush'
import './App.css';

function App() {
  return (
    <div className="App">

      <h1 id="myName" >Software by Zak Kniffen</h1>
      <div id="flexTop">
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
      
      
      
      
      </div>
      <div id="flexLeft">
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
      
      
      
      </div>
      <div id="flexRight">
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
      
      

      </div>
      <div id="pageBottom">
        <div id="flexBottom">
        
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
      <BurningBush/>
        

        </div>
      </div>

      <header className="App-header">
        

        <div className="container">
        <svg id="triangle" viewBox="0 0 100 100">
            	<a href="https://arcane-badlands-41044.herokuapp.com"><polygon points="50 15, 75 50, 25 50" fill="#f0f00f" stroke="#cebe05" strokeWidth="2"/></a>
              <a href="https://www.bing.com/"><polygon points="0 85, 25 50, 50 85" fill="#f0f00f" stroke="#cebe05" strokeWidth="2"/></a>
              <a href="https://duckduckgo.com/"><polygon points="50 85, 75 50, 100 85" fill="#f0f00f" stroke="#cebe05" strokeWidth="2"/></a>
              <a href="https://arcane-badlands-41044.herokuapp.com"><text x="38" y="45" className="small">JAVA</text></a>
              <a href="https://www.bing.com/"><text x="10" y="80" className="small">MERN</text></a>
              <a href="https://duckduckgo.com/"><text x="60" y="80" className="small">MEAN</text></a>
            
        </svg>
     
     </div>   

      </header>
      
  

    </div>
  );
}

export default App;
