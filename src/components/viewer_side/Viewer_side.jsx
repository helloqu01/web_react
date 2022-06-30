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
// import Ply from '../ply/ply'
import Obj from '../ply/ply_hj'
//import PlyModel from '../ply/plyModel'

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from 'three/examples/jsm/controls/DragControls'

import ThreeScene from '../ply/ThreeScene'
import { useRef } from 'react';
import html2canvas from 'html2canvas'

import Viewer_nav from '../viewer_nav/Viewer_nav'
import { useLocation } from 'react-router-dom';


const Viewer_side = ( ) => {

  const location = useLocation();
  console.log(location)
  console.log(location.state.content.viewContent)

  const data = location.state.content.viewContent;
  const [data_info, setdata_info] = useState(data.case_name);
 
  const [data_status, setdata_status] = useState(data.status);
  const personInfo2 = useRef();
  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    // Axios.get('http://3.35.10.95:3001/api/get').then((Response)=>{
      Axios.get('http://15.164.100.143/api/get').then((Response)=>{
      setViewContent(Response.data);
      console.log(Response.data)
    })
  }, [])
  


  const [activeNav, setActiveNav] = useState('#')
  
  const [num, setNum] = useState(true)
  const [op_num, setop_num] = useState("1")
  


  const [controls_type, setcontrols_type] = useState(true)

  const [rotate_type, setrotate_type] = useState("0")

  const [is_wire, set_wireframe] = useState(false)

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

  function SetWireFram(){
    if(is_wire == false) {
      setActiveNav('#wire');
      set_wireframe(true);
    }
    else {
      setActiveNav('#wire');
      set_wireframe(false);
    }
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





  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className='container'id="container">
      <Viewer_nav data_info = {data_info} data_status ={data_status}/>

   
       


      <div className="l_container">
          <div className='bar-container'>
              <div id="dragControls" onClick={set_controls_type} className={activeNav === '#arrows_move' ? 'active' : ''} ><img src={arrows_move}></img></div>
              <div id="TransformControls"   onClick={set_rotate_type} className={activeNav === '#ArrowCounterClockwise' ? 'active' : ''}><i> <img src={ArrowCounterClockwise}></img></i></div>
              {/* <div onClick={() => setActiveNav('#zoom_In')} className={activeNav === '#zoom_In' ? 'active' : ''}><i> <img src={zoom_In}></img></i></div> */}
              {/* <div onClick={() => setActiveNav('#research')} className={activeNav === '#research' ? 'active' : ''}><i><img src={research}></img></i></div> */}
              {/* <div onClick={() => setActiveNav('#Info')} className={activeNav === '#Info' ? 'active' : ''} ><i> <img src={Info}></img></i></div> */}
              <div onClick = {color} className={activeNav === '#color' ? 'active' : ''} ><i> <img src={Info}></img></i></div>
              {/* <div onClick = {SetWireFram }className={activeNav === '#wire' ? 'active' : ''}><i> <img src={zoom_In}></img></i></div> */}
          </div>

          {/* <canvas className="box" id="bar2" ref={personInfo2}> </canvas> */}

          <Obj path = {data.path} op_num={op_num} is_vertex ={num} is_wire ={is_wire} controls_type={controls_type} rotate_type={rotate_type}/>
         
           {/* <PlyModel />   */}
         {/* <Ply personInfo2={personInfo2} num={num} op_num={op_num} controls_type={controls_type} rotate_type={rotate_type}/> */}
        
     
      
        
      </div>

      <div className='r_container'>
        <div className='side-container'>
            {/* <div className='data_name'>{viewContent[0]?.id} {data.name}  {data.path} {data.case_id}</div> */}
            <div className='data_name'><p>{data.path}</p></div>
            <div className="bar">
              <button className='eye' onClick={toggleImg}><i><img id="img" src={eye}></img></i></button>
              <input className='range' id="range" type="range" min="1" max="10" onClick={SetValue} />
            </div>
           
        </div>



        {/* <div id="mySidenav" className="sidenav">
          <div className ="closebtn_div"> <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >X</a></div>
         
            <div className='side-container'>
            <div className='data_name'>3D 데이터{viewContent[0]?.id} {data.name}  {data.path} {data.case_id}</div>
            <div className="bar">
              <button className='eye' onClick={toggleImg}><i><img id="img" src={eye}></img></i></button>
              <input className='range' id="range" type="range" min="1" max="10" onClick={SetValue} />
            </div>
           
        </div>
        <button onClick={onDownloadBtn} id="exportBtn">내보내기</button>
        </div>
        <p onClick={openNav} >open</p> */}

    </div>

    </div>

  )
}

export default Viewer_side