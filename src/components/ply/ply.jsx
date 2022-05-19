import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import './ply.css'
import { useRef } from 'react';

function Ply({num, op_num, controls_type,rotate_type, personInfo2}) {

  // console.log(personInfo2);
  // console.log(personInfo2.current);
  
  // const personInfo = useRef();
    var camera, scene, renderer, tcontrols;
    

  //   window.addEventListener('DOMContentLoaded', (event) => {
      
  // });

 
    init();
    animate();


     function init() {
   
      camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      );

      camera.position.set(75, 20, 0);
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);



   
      // PLY file
      var loader = new PLYLoader();
      loader.load("2022-04-07-Test-HD.ply", function(geometry) {
        geometry.computeVertexNormals();
        
        // var material = new THREE.MeshPhongMaterial( { color: 0xffffff, transparent : true, opacity  : op_num, vertexColors: num, wireframe: false} );
        const material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 0,
          roughness: 0,
          transparent: true,
          opacity  : op_num, 
          vertexColors: num,
          transmission: 1.0,
          side: THREE.DoubleSide,
          clearcoat: 1.0,
          clearcoatRoughness: 0.25
      })
        console.log(num);
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotateX(-Math.PI / 2)
        scene.add(mesh)

        mesh.geometry.attributes.position.needsUpdate = true;
       
        if(controls_type == false){
          let controls = new DragControls( [mesh], camera, renderer.domElement );
          controls.addEventListener( 'dragstart', function ( event ) {
            control.enabled= false
          } );
          controls.addEventListener( 'dragend', function ( event ) {
            control.enabled= true
          } );
        }else{

        }

        if(rotate_type == "0"){
          tcontrols = new TransformControls(camera, renderer.domElement)
          window.addEventListener('dragging-changed', function (event) {
            
            control.enabled = !event.value
          })
          // tcontrols.attach(mesh)
          scene.add(tcontrols)
          
          tcontrols.setMode('rotate');//회전
         
        }else{

        }


      


      });
      
      // scene.add(new THREE.HemisphereLight(0xffffff, 0x111122));
      // renderer
      // renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });

      //renderer
      
      // var canvasElm = document.getElementById('#bar2');

      // console.log(canvasElm);
      var canvas1Ref = personInfo2.current;
      console.log(canvas1Ref);
      renderer = new THREE.WebGLRenderer( { canvas: canvas1Ref, antialias: true, preserveDrawingBuffer: true } );

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      // document.addEventListener("DOMContentLoaded", () => {
      //   var canvas1Ref =personInfo.current;
      //   canvas1Ref.appendChild(renderer.domElement);


        
      //   var container = document.body.getElementById('#bar2');
      //   console.log(container);


      // });

      // var canvas1Ref = personInfo2.current;
      // setTimeout(() =>   
      // canvas1Ref.appendChild(renderer.domElement), 1000);

      // var canvas1Ref =personInfo.current;
      // setTimeout(() =>   
      // canvas1Ref.appendChild(renderer.domElement), 1000);


  
      let control = new OrbitControls(camera, renderer.domElement);
      control.enableDamping = true
      control.update();

 

    }
    
    function animate() {
      requestAnimationFrame(animate);
      render()
    }
    function update(time) {
      time *= 0.001; // second unit
    }
    function render(time) {
      renderer.render(scene, camera)
      update(time)
    }


  //   return (
  //     <>
  //         <div className="box" id="bar1" ref={personInfo}> {/*div.box 요소에 ref 부여함*/}
  //         </div>
         
  //     </>
  // );

  }

  
  
  export default Ply