import React from 'react'
import {useLoader, useFrame} from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'

export default function RenderItem(props){
    const {path , rotateObject, useMaterial} = props

    const object = useGLTF(path)
    
   const myMesh = React.useRef()

   useFrame(({clock})=>{
    
    if(rotateObject){
    myMesh.current.rotation.z = clock.getElapsedTime() * -1}
    else {

    }
   })


    return(<>
    <mesh ref={myMesh}>
    
    <primitive object={object.scene}
                scale={4}
                position={[0,0,0]}
                
                />
    </mesh>
    </>)

   


}
