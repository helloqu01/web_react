import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import OBJLoader from "three-obj-loader";
import { useLoader } from '@react-three/fiber'

class ThreeScene extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();

    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#263238");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 20;
    this.camera.position.y = 5;

    //Camera Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    //LIGHTS
    var lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    //Simple Box with WireFrame
    this.addModels();

    this.renderScene();
    //start animation
    this.start();
  }

  addModels() {
    // -----Step 1--------
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial({
      color: "#0F0"
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);



    // -----Step 4--------
    //Loading 3d Models
    //Loading Material First

      // PLY file
      // var loader = new PLYLoader();
      // loader.load("2022-04-07-Test-HD.ply", function(geometry, mesh, scene) {
     
      //     geometry.computeVertexNormals();
      //     // var material = new THREE.MeshPhongMaterial( { color: 0xffffff, transparent : true, opacity  : op_num, vertexColors: num, wireframe: false} );
      //     const material = new THREE.MeshPhysicalMaterial({
      //       color: 0xffffff,
      //       metalness: 0,
      //       roughness: 0,
      //       transparent: true,
      //       transmission: 1.0,
      //       side: THREE.DoubleSide,
      //       clearcoat: 1.0,
      //       clearcoatRoughness: 0.25
      //   })
    
      //   mesh = new THREE.Mesh(geometry, material);
      //   this.scene.add();

       
      // });


      var objLoader = new THREE.OBJLoader();
      objLoader.setMaterials();
      objLoader.load(
        "./assets/freedom.obj",
        function(object) {
          freedomMesh = object;
          freedomMesh.position.setY(3); //or  this
          freedomMesh.scale.set(0.02, 0.02, 0.02);
          scene.add(freedomMesh);
        },
        function(xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function(error) {
          console.log("An error happened" + error);
        }
      );





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
    // -----Step 3--------
    //Rotate Models
    if (this.cube) this.cube.rotation.y += 0.01;
    if (this.freedomMesh) this.freedomMesh.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: "1500px", height: "800px" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
