//Land.js 
import react from 'react';
import {Canvas} from "@react-three/fiber";
import {Experience} from "../components/Experience";
import Header from "../components/Header";
import {OrbitControls} from "@react-three/drei";

const Land = () =>{
    return(
        // <Canvas shadows camera={{position: [0,2, 5], fov:30}}>
        //     <color attach="background" args={["#ececec"]} />
        //     <Experience />
        // </Canvas>
        <div style={{ height: '50vh'}}>
        <Canvas style={{ height: '100%', width: '100%' }} shadows camera={{position: [0,2, 5], fov:10}}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} enablePan={false} minDistance={5} maxDistance={5}/>
          <Experience />
        </Canvas>
      </div>
    );
};

export default Land;
