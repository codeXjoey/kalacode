import reactLogo from './assets/react.svg'
import './App.css'
import Experience from './components/Experience.jsx'
import { Canvas } from '@react-three/fiber'
import Exp from './components/Exp'


function App() {

  return (
    <>
    {/* <Canvas
    gl={{
      alpha: false
    }}
    >
      <Experience/>
    </Canvas> */}
      
      <Exp></Exp>

    </>
  )
}

export default App
