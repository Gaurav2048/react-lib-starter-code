import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyComponent } from 'react-lib-xyz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyComponent text='Check TS' />
    </>
  )
}

export default App
