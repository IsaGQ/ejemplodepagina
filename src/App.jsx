import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Autenthication from '../views/Autenthication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Autenthication />
      
    </>
  )
}

export default App
