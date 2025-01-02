import logo from './logo.svg';
import './App.css';
import React from 'react';
import movie1 from './images/movie1.jpg';
import movie2 from './images/movie2.jpg';
import movie3 from './images/movie3.jpg';

function App() {
  let btn = <button>First Button</button>
  let button2 = React.createElement('button', 'null', 'Hello world');
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 style={{color: 'red'}}>Hello my world</h1>
        {btn}
        {button2} */}
        <h1>Movie world</h1>
        <div className='movies'>
        <img src={movie1} alt='movie1'/>
        <img src={movie2} alt='movie2'/>

        <img src={movie3} alt='movie3'/>
     </div>
     <div className='movies mt'>
        <img src={movie3} alt='movie1'/>
        <img src={movie2} alt='movie2'/>

        <img src={movie1} alt='movie3'/>
     </div>
      </header>
    </div>
  );
}

export default App;
