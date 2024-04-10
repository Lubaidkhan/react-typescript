import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Lists from './Components/Lists'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <Lists items={["coffee","tea"]} render={(item:string)=><span>{item}</span>}/>
   
  )
}

export default App
