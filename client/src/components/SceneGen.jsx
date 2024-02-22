import React, { Suspense } from 'react'
import {useLoader, Canvas} from "@react-three/fiber"
import {OrbitControls} from '@react-three/drei'




export default function Scene(props){

    const {eventViewer} = props

    return(
        <div style={ eventViewer?{height: "100%", width: "100%"}: {height: "100%", width:"50%"}}>
            <Canvas>
            <Suspense fallback={null}>
                <directionalLight position={[0,0,1]} intensity={1} />
                <ambientLight intensity={eventViewer? 5 : 0.5} />
            {props.children}
           {!eventViewer && <OrbitControls enableZoom={ false} maxPolarAngle={ Math.PI / 2} minPolarAngle={Math.PI / 2} />}
           {eventViewer && <OrbitControls />}
            </Suspense>
            </Canvas>
        </div>
    )
}