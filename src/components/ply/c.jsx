import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import './ply.css'
import {  useLoader } from "@react-three/fiber";


function Model({ url }) {
  const { scene } = useLoader(PLYLoader, url)
  return <primitive object={scene} dispose={null} ></primitive>
}
  
  export default Model