import React from "react";
import './light-ball.css'

function LightBall(props) {
  return ( 
    <div>
      <div className="ball" style={{background: props.light ? props.color : 'grey', animation: props.light ? `glow-${props.color} 1s infinite`: ''}}>
      </div>
    </div>
   );
}

export default LightBall;