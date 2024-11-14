import './App.css'
import Gsap1 from "./components/1-gsap1/Gsap1.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Gsap2Pin from "@/components/2-Gsap2Pin/Gsap2Pin.jsx";
import BasicParallax from "@/components/3-BasicParallax/BasicParallax.jsx";
import ParallaxCar from "@/components/4-ParallaxCar/ParallaxCar.jsx";
import CarParallax from "@/components/5-CarParallax/CarParallax.jsx";
import PreventScroll from "@/components/6-PreventScroll/PreventScroll.jsx";
import BackToTopBtn from "@/components/7-BackToTopBtn/BackToTopBtn.jsx";
import ProgressBar from "@/components/8-ProgressBar/ProgressBar.jsx";
import TextStaggering from "@/components/9-TextStaggering/TextStaggering.jsx";
import RollingHeaders from "@/components/10-RollingHeaders/RollingHeaders.jsx";
import LineSectionIndicators from "@/components/11-LineSectionIndicators/LineSectionIndicators.jsx";
import LineGrowing from "@/components/12-LineGrowing/LineGrowing.jsx";
import Video from "@/components/13-Video/Video.jsx";
import DrawSvg from "@/components/14-DrawSVG/DrawSVG.jsx";
import Responsive from "@/components/15-Responsive/Responsive.jsx";
import SplitScreenAnimation from "@/components/16-SplitScreenAnimation/SplitScreenAnimation.jsx";
import HorizontalScrollPage from "@/components/17-HorizontalScroll/HorizontalScrollPage.jsx";
import HorizontalScroll from "@/components/17-HorizontalScroll/HorizontalScroll.jsx";
import HorizontalScroll1 from "@/components/18-Try/HorizontalScroll1.jsx";
import MainLayout from "@/components/19-Try-Normas/MainLayout.jsx";
import Comp from "@/components/19-Try-Normas/Comp.jsx";
import LenisScroll from "@/components/20-LenisScroll/LenisScroll.jsx";
import RootLenis from "@/components/20-LenisScroll/RootLenis.jsx";
import Svg from "@/pages/Svg.jsx";
import SvgBasics from "@/components/SVG/1-svg-basics/SvgBasics.jsx";
import Text from "@/components/SVG/2-text/Text.jsx";
import Characters from "@/components/SVG/3-Characters/Characters.jsx";

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
        <Route path='/back-to-top-btn' element={<BackToTopBtn/>}/>      
        <Route path='/progress-bar' element={<ProgressBar/>}/>      
        <Route path='/text-staggering' element={<TextStaggering/>}/>      
        <Route path='/rolling-headers' element={<RollingHeaders/>}/>      
        <Route path='/line-section-indicators' element={<LineSectionIndicators/>}/>      
        <Route path='/line-growing' element={<LineGrowing/>}/>      
        <Route path='/video' element={<Video/>}/>      
        <Route path='/draw-svg' element={<DrawSvg/>}/>      
        <Route path='/responsive' element={<Responsive/>}/>      
        <Route path='/split-screen-animation' element={<SplitScreenAnimation/>}/>      
        <Route path='/horizontal-scroll' element={<HorizontalScroll />}/>      
        <Route path='/horizontal-scroll-1' element={<HorizontalScroll1/>}/>      
        <Route path='/horizontal-scroll-2' element={<MainLayout/>}/>      
        <Route path='/horizontal-scroll-3' element={<RootLenis/>}/>      
        <Route path='/svg' element={<Svg/>}/>      
        <Route path='/svg-basics' element={<SvgBasics/>}/>      
        <Route path='/svg-text' element={<Text/>}/>      
        <Route path='/svg-characters' element={<Characters/>}/>      
      </Routes>
    </Router>
  )
}

export default App
