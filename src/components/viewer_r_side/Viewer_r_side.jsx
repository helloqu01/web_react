import React from 'react'
import './viewer_r_side.css'
import eye from '../../icon/Eye.png'
import EyeSlash from '../../icon/EyeSlash.png'


const viewer_side = () => {

  function toggleImg() {
    if(document.getElementById("range").value =="10"){
      document.getElementById("range").value="0";
      document.getElementById("img").src=EyeSlash;
    }else{
      document.getElementById("range").value="10";
      document.getElementById("img").src=eye;
    };
  }

  return (
    <div className='r_container'>
        <div className='side-container'>
            <div className='data_name'>3D 데이터</div>
            <div className="bar">
              <button className='eye' onClick={toggleImg}><i><img id="img" src={eye}></img></i></button>
              <input id="range" type="range" min="1" max="10"/>
            </div>
           
        </div>
        
    </div>
  )
}

export default viewer_side