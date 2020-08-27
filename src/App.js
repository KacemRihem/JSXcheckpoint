import React from 'react';
import './style.css';

function App() {
  return (
    <div>

      <div style={{ border: "solid 1px black", maxWidth: "100vw" }} >

      <h1 className="title red"> Hello Halitta </h1>

      <br />

      <img src={process.env.PUBLIC_URL ,"./couv.jpg" }  /> <br />

      <img src={process.env.PUBLIC_URL , "./couverture facebook-04.jpg"} width="400" />

      </div >

      <video width="320" height="240" controls>

      <source src="VideoBoost.mp4" type="video/mp4" />

      </video> 
    </div>
    
  );
}

export default App;
