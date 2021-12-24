import './App.css';
import react from 'react';
import Card from './components/card/Card';
import reactImg from "./assets/react.svg"
import { categories } from './helper/data';

console.log(categories);

function App() {

  return (
    <div className="App">
      <img id='reactImg' src={reactImg} alt="react img" />
      <div className='languages'>
        <h1>Languages</h1>
        <div className='card-container'>
        {categories.map((card, index)=>(
                  <Card key={index} {...card}/>
          ))}
        </div>
      
      </div>
    </div>
  );
}

export default App;
