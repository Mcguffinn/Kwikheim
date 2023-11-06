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
import logo from './assets/logo.png'

function App() {

  const music = useRef()
  const music_2 = useRef()
  const music_3 = useRef()

  useEffect(() => {
    console.log(music);
  })
  
  return (
    <>
      <color attach='background' args={['#09070d']} />
      <ambientLight intensity={3}/>
      <Environment preset='warehouse' />
      <ScrollControls pages={2} damping={0.20}>
        
        <Scroll>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Smoke scale={1} position={[0,-2,-4.5]}/>
          <Smoke scale={1} position={[0,-9,-4.5]}/>
          
        </Float>
        <Float
          speed={0.4} 
          rotationIntensity={0.4} 
          floatIntensity={0.1} 
          floatingRange={[1, 1]} 
        >
          <Fire scale={3} position={[0,-9,-4.5]}/>
          <Forest scale={1} position={[0,-10,-6] } rotation={[0, 60, 0]}/>
        </Float>
          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
          <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
          <group position={[0, 0, 0]}>
            <PositionalAudio ref={music} autoplay loop url={Sound} distance={6} />
          </group>    
          <group position={[0, -10, 0]}>
            <PositionalAudio ref={music_2} autoplay loop url={Sound2} distance={3} />
          </group>  
          <group position={[0, -20, 0]}>
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
            <div className="div-hero">
              
              <img src={logo} className="div-logo" alt="logo" />
              <p className="button-wrapper"><ServerStats/></p>
              {/* <button><p className="button-wrapper">ᛃᛟᛁᚾ</p></button> */}
            </div>
          </div>
              
        </Scroll>
      </ScrollControls>
    </>
  )
}
export default App
