import { useState } from 'react';
import './App.css'
import LightBall from './components/light-ball';

function App() {
  const [value, setValue] = useState(true);
  function turnOff(){
    setValue(!value)
  }
  return (
    <div className="App">
      <h1 className='text-light'>React Christmas Lights</h1>
      <h1>{value}</h1>
      <div className='balls'>
        <LightBall light={value} color="red"></LightBall>
        <LightBall light={value} color="orange"></LightBall>
        <LightBall light={value} color="yellow"></LightBall>
        <LightBall light={value} color="green"></LightBall>
        <LightBall light={value} color="blue"></LightBall>
        <LightBall light={value} color="purple"></LightBall>
        <LightBall light={value} color="pink"></LightBall>
      </div>
      <div className='utilities'>
        <button onClick={(() => turnOff())}> {value === true ? 'ON' : 'OFF'} </button>
      </div>
      <footer class="footer">Criado por <a href="https://github.com/GustavoGajdeczka">Gustavo Gajdeczka</a></footer>
    </div>
  );
}

export default App;
