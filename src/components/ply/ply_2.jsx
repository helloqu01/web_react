import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls, useTexture } from "@react-three/drei";

function ply_2() {
    const vaseMesh = useLoader(PLYLoader, "2022-04-07-Test-HD.ply");
    // const vaseTex = useTexture("/texture.png");
    // const vaseTex = useLoader(THREE.TextureLoader, "/texture.png")
    // return <primitive object={vaseMesh} />;
    return (
      <>
        <mesh>
          <geometry geometry={vaseMesh} scale={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
        <mesh>
          <boxBufferGeometry args={[4, 4, 4]} />
          <meshPhongMaterial color={"hotpink"} />
        </mesh>
      </>
    );
  }export default ply_2