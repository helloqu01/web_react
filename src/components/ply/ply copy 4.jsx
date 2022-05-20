import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import './ply.css'
import { useRef } from 'react';

function Ply({num, op_num, controls_type,rotate_type, personInfo2}) {

    var camera, scene, renderer, tcontrols;
    var ch_num = 2;
    if(ch_num == 1){
      init();
      animate();
    }else{
      init2();
      animate2(op_num);
    }
    

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
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotateX(-Math.PI / 2)
        scene.add(mesh)
        mesh.geometry.attributes.position.needsUpdate = true;

      });

      var canvas1Ref = personInfo2.current;
      renderer = new THREE.WebGLRenderer( { canvas: canvas1Ref, antialias: true, preserveDrawingBuffer: true } );
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
  
      let control = new OrbitControls(camera, renderer.domElement);
      control.enableDamping = true
      control.update();

    }
    
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
   
    function init2(num) {
      var loader = new PLYLoader();
      loader.load("2022-04-07-Test-HD.ply", function(geometry) {
        geometry.computeVertexNormals();
        
        // var material = new THREE.MeshPhongMaterial( { color: 0xffffff, transparent : true, opacity  : op_num, vertexColors: num, wireframe: false} );
        const material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 0,
          roughness: 0,
          transparent: true,
          opacity  : 1, 
          vertexColors: num,
          transmission: 1.0,
          side: THREE.DoubleSide,
          clearcoat: 1.0,
          clearcoatRoughness: 0.25
      })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotateX(-Math.PI / 2)
        scene.add(mesh)
        mesh.geometry.attributes.position.needsUpdate = true;

      });
    }

    function animate2(op_num) {
      camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      );

      camera.position.set(75, 20, 0);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      requestAnimationFrame(animate);

      op_num = op_num;

      console.log(op_num);
      
      var canvas1Ref = personInfo2.current;
      renderer = new THREE.WebGLRenderer( { canvas: canvas1Ref, antialias: true, preserveDrawingBuffer: true } );
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
  
      let control = new OrbitControls(camera, renderer.domElement);
      control.enableDamping = true
      control.update();

      renderer.render(scene, camera);
    }
   

  }

  
  
  export default Ply