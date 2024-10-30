import s from './LineGrowing.module.scss';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

const LineGrowing = () => {

  const svgRef = useRef()
  const containerRef = useRef()
  const papaRef = useRef()
  
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
   
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      markers: true,
      animation: gsap.to(svgRef.current, {y: 1850, ease: "none"}),
    })

    ScrollTrigger.create({
      trigger: papaRef.current,
      start: "top 40%",
      end: "bottom 40%",                 
      animation: gsap.timeline().to(papaRef.current, {x: -200, repeat: 1, yoyo: true}).to(svgRef.current, {x: -100, repeat: 1, yoyo: true}, "<" ),
      toggleActions: "restart none none restart"
    })

  }, [])


  return (
    // <div className={s.wrapper} ref={wrapperRef}>
    <div className={s.wrapper} ref={containerRef}>
      <Link className={s.homeLink} to="/">Home</Link>
      
      <div className={s.blue} ref={svgRef}>mamma</div>
      <div className={s.red} ref={papaRef}>pappa</div>
           
     

    </div>
// </div>
)
  ;
};

export default LineGrowing;