import React, { useRef, Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import './App.css';

import background from './_C3A9430.jpg';

function Top()
{
  const ref = useRef();
  const Gltf = useLoader(GLTFLoader, '/mesh top.gltf');
  useFrame(() =>
  {
    ref.current.rotation.y += 0.001;
  })
  console.log(Gltf);

  return (
    <primitive
      ref={ref}
      object={Gltf.scene}
      position={[0, -11, 0]}
      scale={10} />
  )
}

function Scene(props)
{
  return (
    <>
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <Top />
      </Suspense>
      <OrbitControls maxDistance={20} minDistance={8} />
    </>
  );
};

function App()
{
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>

        <h1>Bleach</h1>

        <Canvas
          camera={{
            position: [0, 0, 2.2],
          }}
          style={{ height: '100vh' }}
        >

          <Scene />

        </Canvas>

      </div>
    </>
  );
};

export default App;
