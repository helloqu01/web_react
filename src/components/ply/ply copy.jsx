import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import './ply.css'

const Ply = () => {
    var container;
    var camera, scene, renderer;
        
    init();
    animate();

    function init() {
      container = document.createElement("div");
      container.className = 'testClass';
      document.body.appendChild(container);

      
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      );

      camera.position.set(30, 30, 30);
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      // PLY file
      var loader = new PLYLoader();
      loader.load("2022-04-07-Test-HD.ply", function(geometry) {
        geometry.computeVertexNormals();
        var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200, vertexColors: THREE.VertexColors, wireframe: true} );
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
      container.appendChild(renderer.domElement);
      let control = new OrbitControls(camera, renderer.domElement);

    }
    
    
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }


 
  }
  
  export default Ply