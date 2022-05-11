import React from 'react'
import './viewer_side.css'
import arrows_move from '../../icon/arrows_move.png';
import ArrowCounterClockwise from '../../icon/ArrowCounterClockwise.png';
import zoom_In from '../../icon/zoom_In.png';
import research from '../../icon/research.png';
import Info from '../../icon/Info.png';
import {useState} from 'react'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import eye from '../../icon/Eye.png'
import EyeSlash from '../../icon/EyeSlash.png'
import Axios from 'axios';
import { useEffect} from 'react';
import Ply from '../ply/ply'


const Viewer_side = () => {

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((Response)=>{
      setViewContent(Response.data);
      console.log(Response.data)
    })
  }, [])
  


  const [activeNav, setActiveNav] = useState('#')
  
  const [num, setNum] = useState(true)
  const [op_num, setop_num] = useState("1")

  const [controls_type, setcontrols_type] = useState(true)

  const [rotate_type, setrotate_type] = useState("0")


  function set_rotate_type() {
    if(controls_type == "0"){
      setActiveNav('#ArrowCounterClockwise');
      setrotate_type("0");
    }else{
      setActiveNav('#ArrowCounterClockwise');
      setrotate_type("1");
    };
}
  
  function set_controls_type() {
    if(controls_type == false){
      setActiveNav('#arrows_move');
      setcontrols_type(true);
    }else{
      setActiveNav('#arrows_move');
      setcontrols_type(false);
    };
}


  function color() {
      if(num == false){
        setActiveNav('#color');
        setNum(true);
        
      }else{
        setActiveNav('#color');
        setNum(false);
        
      };
      
  }

  function toggleImg() {
    if(document.getElementById("range").value =="10"){
      document.getElementById("range").value="0";
      document.getElementById("img").src=EyeSlash;
      setop_num("0");
    }else{
      document.getElementById("range").value="10";
      document.getElementById("img").src=eye;
      setop_num("10");
    };
  }
  
  function SetValue()
  {
    var  input_value = document.getElementById('range').value;
    setop_num(input_value*0.1);
  }


  const onDownloadBtn = () => {
    // dom-to-image
    domtoimage
      .toBlob(document.querySelector('body'))
      .then((blob) => {
        // FileSaver
        saveAs(blob, 'card.png');
      });
  };


  return (

    <div className='container'>
      <div className="l_container">
          <div className='bar-container'>
              <div onClick={set_controls_type} className={activeNav === '#arrows_move' ? 'active' : ''} ><img src={arrows_move}></img></div>
              <div onClick={set_rotate_type} className={activeNav === '#ArrowCounterClockwise' ? 'active' : ''}><i> <img src={ArrowCounterClockwise}></img></i></div>
              <div  onClick={() => setActiveNav('#zoom_In')} className={activeNav === '#zoom_In' ? 'active' : ''}><i> <img src={zoom_In}></img></i></div>
              <div  onClick={() => setActiveNav('#research')} className={activeNav === '#research' ? 'active' : ''}><i><img src={research}></img></i></div>
              <div onClick={() => setActiveNav('#Info')} className={activeNav === '#Info' ? 'active' : ''} ><i> <img src={Info}></img></i></div>
              <div onClick={color} className={activeNav === '#color' ? 'active' : ''} ><i> <img src={Info}></img></i></div>
          </div>

        
         <Ply num={num} op_num={op_num} controls_type={controls_type} rotate_type={rotate_type}/>

     



    
         
        
      </div>

      <div className='r_container'>
        <div className='side-container'>
            <div className='data_name'>3D 데이터{viewContent[0]?.name}</div>
            <div className="bar">
              <button className='eye' onClick={toggleImg}><i><img id="img" src={eye}></img></i></button>
              <input id="range" type="range" min="1" max="10" onClick={SetValue}/>
            </div>
           
        </div>
        <button onClick={onDownloadBtn} id="exportBtn">내보내기</button>
    </div>

    </div>

  )
}

export default Viewer_side