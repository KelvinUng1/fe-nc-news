
import Navbar from "./Components/Navbar"
import Home from "./Components/home"
import Articles from "./Components/Articles"
import { Route, Routes } from "react-router-dom"
function App() {
  
  return (
    <>
   
    <Navbar />
    <Routes>
      <Route path="/" element ={<Home />}></Route>
      <Route path="/articles" element ={<Articles />}></Route>
    </Routes>
    
    
    </>
  )
}

export default App
