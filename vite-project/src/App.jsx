import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './assignment1/ans1/app'
import Comp2 from './assignment1/ans2/app'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp1/>
      {/* <Comp2/> */}
    </>
  )
}

export default App
