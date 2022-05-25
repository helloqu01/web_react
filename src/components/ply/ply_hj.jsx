import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import './ply.css'
import { Component, useRef } from 'react';
import React from "react";


//  OBJLoader(THREE);
var teethmMesh;
var scene;

class Obj extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      op_num: props.op_num,
      vertex : props.is_vertex,
      is_wire: props.is_wire,
      controls_type: props.controls_type,
      rotate_type: props.rotate_type,
    }
    
    console.log("Value: " + props.op_num +", "+props.is_vertex+", " +props.is_wire+", "+props.controls_type+", "+props.rotate_type);
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 15;
    this.camera.position.y = 5;

    this.renderer = new THREE.WebGLRenderer({ antialias: true ,  preserveDrawingBuffer: true});
    this.renderer.setClearColor("#FFFFFF");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
  

    const controls = new OrbitControls(this.camera, this.renderer.domElement);




    // if(this.props.rotate_type == "0"){
    //   const controls = new TransformControls(this.camera, this.renderer.domElement)
    //   window.addEventListener('dragging-changed', function (event) {
        
    //     controls.enabled = !event.value
    //   })
    //   // tcontrols.attach(mesh)
    //   scene.add(controls)
      
    //   controls.setMode('rotate');//회전
     
    // }else{

    // }
    if (this.props.controls_type == false){      
      const controls = new DragControls( [teethmMesh], this.camera, this.renderer.domElement );
      controls.addEventListener( 'dragstart', function ( event ) {
        controls.enabled= false
      } );
      controls.addEventListener( 'dragend', function ( event ) {
        controls.enabled= true
      } );
      scene.add(controls)
    }







    //Default Loding Manager
    THREE.DefaultLoadingManager.onLoad = () =>{ 
      console.log( 'Loading Complete!');
      this.renderScene();
      this.start();
    };

    THREE.DefaultLoadingManager.onError = function ( url ) {
      console.log( 'There was an error loading ' + url );    
    };


    //LIGHTS
    var lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    scene.add(lights[0]);
   
    var loader = new PLYLoader();
    loader.load("2022-04-07-Test-HD.ply", function(geometry){
      geometry.computeVertexNormals();

      const material = new THREE.MeshLambertMaterial  ({
        color: 0xffffff,
          metalness: 0,
          roughness: 0,
          transparent: true,
          opacity  : 1, 
          vertexColors: true,
          transmission: 1.0,
          side: THREE.DoubleSide,
          clearcoat: 1.0,
          clearcoatRoughness: 0.25,
          wireframe: false
      });

      teethmMesh = new THREE.Mesh(geometry, material);
      teethmMesh.rotateX(-Math.PI / 2)
      teethmMesh.scale.set(0.2, 0.2, 0.2);
      
      scene.add(teethmMesh)

    })

  
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => { 
    if (teethmMesh){      
      setOpacity(teethmMesh,this.props.op_num);
      setVertexColor(teethmMesh, this.props.is_vertex);
      setWireFrame(teethmMesh, this.props.is_wire);
      
    }

  


    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {

      

    if (this.renderer) this.renderer.render(scene, this.camera);
  };

  render() {
    return (
      <div
        // style={{ width: "800px", height: "800px" }}
        ref={
          mount => {
            this.mount = mount;            
        }}
      />      
    );
  }
}



function setOpacity(obj, opacity) {
  obj.traverse(child => {
    if (child instanceof THREE.Mesh) {
      child.material.opacity = opacity;      
    }
  });
}

function setVertexColor(obj, isColor){
  obj.traverse(child => {
    if(child instanceof THREE.Mesh){
      child.material.vertexColors = isColor;
    }
  });
}

function setWireFrame(obj, isWire){
  obj.traverse(child => {
    if(child instanceof THREE.Mesh){
      child.material.wireframe = isWire;
      // console.log("WireFram: " + isWire);
    }
  });
}
export default Obj

