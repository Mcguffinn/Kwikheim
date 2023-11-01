import './App.css'
import Sound from './sounds/birds.mp3'
import Sound2 from './sounds/meadows.mp3'
import Sound3 from './sounds/fireplace.mp3'
import {ScrollControls, Scroll, Environment, Sparkles,PositionalAudio, Float } from '@react-three/drei'
import { Smoke } from './models/Smoke'
import { Fire } from './models/Fire'
import { Forest } from './models/Forest'
import { useEffect, useRef } from 'react';
import ServerStats from './components/ServerStats'

function App() {

  const music = useRef()
  const music_2 = useRef()
  const music_3 = useRef()

  useEffect(() => {
    console.log(music);
  })
  
  return (
    <>
      <color attach='background' args={['#000000']} />
      <ambientLight intensity={5}/>
      <Environment preset='warehouse' />
      <ScrollControls pages={3} damping={0.25}>
        
        <Scroll>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Smoke scale={1} position={[-5, -2.5, 0]}/>
          <Smoke scale={1} position={[4, 1.5, 0]}/>
          
        </Float>

        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Fire scale={1} position={[-1,-12.5,0]}/>
          <Fire scale={1} position={[12,-14,-10]}/>

        </Float>
        <Float
          speed={0.4} // Animation speed, defaults to 1
          rotationIntensity={0.4} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          
          <Forest scale={1} position={[0,-20,-6] } rotation={[0, 60, 0]}/>
        </Float>
          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
          <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
          <group position={[0, 0, 0]}>
            <PositionalAudio ref={music} autoplay loop url={Sound} distance={6} />
          </group>    
          <group position={[0, -60, 0]}>
            <PositionalAudio ref={music_2} autoplay loop url={Sound2} distance={3} />
          </group>  
          <group position={[0, -41, 0]}>
            <PositionalAudio ref={music_3} autoplay loop url={Sound3} distance={8} />
          </group>
        </Scroll>
        <Scroll html style={{width: '100%'}}>
          <div className="frame">
            <div className="div-wrapper">
              <p className="text-wrapper">The the forest stirs...</p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <p className="text-wrapper">Are you ready?</p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <ServerStats/>
            </div>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  )
}
export default App
