import './App.css'
import Gsap1 from "./components/1-gsap1/Gsap1.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Gsap2Pin from "@/components/2-Gsap2Pin/Gsap2Pin.jsx";
import BasicParallax from "@/components/3-BasicParallax/BasicParallax.jsx";
import ParallaxCar from "@/components/4-ParallaxCar/ParallaxCar.jsx";
import CarParallax from "@/components/5-CarParallax/CarParallax.jsx";
import PreventScroll from "@/components/6-PreventScroll/PreventScroll.jsx";

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/pin' element={<Gsap1/>}/>      
        <Route path='/pin-2' element={<Gsap2Pin/>}/>      
        <Route path='/parallax' element={<BasicParallax/>}/>      
        <Route path='/parallax-car' element={<ParallaxCar/>}/>      
        <Route path='/car-parallax' element={<CarParallax/>}/>      
        <Route path='/prevent-scroll' element={<PreventScroll/>}/>      

      </Routes>
    </Router>


  )
}

export default App
