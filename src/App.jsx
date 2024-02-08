import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
/*import CardContainer from './components/CardContainer' */
import Form from './components/Form'
import NavBar from './components/NavBar'
import Map from './components/Map'
import Jumbotron from './components/Jumbotron'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
    <Jumbotron />
    <Card />
    <Map />
    <Form />
    </>
  )
}

export default App