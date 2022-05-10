import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import './ply.css'

function Ply({num, op_num}) {
    
    var camera, scene, renderer;
    


    init();
    animate();

    function init() {
   
      camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      );

      camera.position.set(50, 50, 50);
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      // PLY file
      var loader = new PLYLoader();
      loader.load("2022-04-07-Test-HD.ply", function(geometry) {
        geometry.computeVertexNormals();
        var material = new THREE.MeshPhongMaterial( { color: 0xffffff, transparent : true, opacity  : op_num, vertexColors: num, wireframe: true} );
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotateX(-Math.PI / 2)
      
        scene.add(mesh)
      });
      
      // Lights
      scene.add(new THREE.HemisphereLight(0xffffff, 0x111122));
      // renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      let control = new OrbitControls(camera, renderer.domElement);

    }
    
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }


  }
  
  export default Ply