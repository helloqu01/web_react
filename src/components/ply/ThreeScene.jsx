import React from 'react'
import {Canvas} from '@react-three/fiber'

const ThreeScene = ({Children}) => {
  return (
    <Canvas>
        {Children}
    </Canvas>
  )
}

export default ThreeScene