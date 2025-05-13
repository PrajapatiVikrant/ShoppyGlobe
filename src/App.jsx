import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Page/Home'

function App() {
 

  return (
    <>
    <Navbar/>
    <Outlet/>
        
    </>
  )
}

export default App
