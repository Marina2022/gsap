import s from './DrawSVG.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MotionPathPlugin} from "gsap/MotionPathPlugin";


gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(GSDevTools)
const DrawSvg = () => {

  const lineRef = useRef()
  const theLineRef = useRef()
  const ballRef = useRef()
  const ballRef2 = useRef()
  const ballRef3 = useRef()
  const ballRef4 = useRef()
  const textRef1 = useRef()
  const textRef2 = useRef()
  const textRef3 = useRef()
  const svgRef = useRef()

  useEffect(() => {

    // if (GSDevTools) {
    //   GSDevTools.create()  
    // }


    gsap.to(lineRef.current, {strokeDashoffset: 0, duration: 3})

    const length = theLineRef.current.getTotalLength();

    gsap.set(theLineRef.current, {strokeDashoffset: length, strokeDasharray: length})
    
    gsap.to(svgRef.current, {autoAlpha: 1})

    const pulse = gsap.timeline({
      defaults: {
        transformOrigin: "center",
        ease: "elastic(2.5,1)",
        autoAlpha: 1,
        scale: 2
      }
    })      
      .to([ballRef2.current, textRef1.current], {}, ".84")
      .to([ballRef3.current, textRef2.current], {}, "1.41")
      .to([ballRef4.current, textRef3.current], {}, "1.97")

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,        
      }
    })
      .to(ballRef.current, {autoAlpha: 1}, 0.01)
      .to(theLineRef.current, {strokeDashoffset: 0, duration: 4, ease: "none"}, 0)
      .to(ballRef.current, {
        motionPath: {
          path: theLineRef.current,
          align: theLineRef.current,
          alignOrigin: [0.5, 0.5],
        },
        duration: 4,
        ease: "none"
      }, "<")
      .add(pulse, 0)
    
  }, []);

    

    

  return (
    <div className="container drawSVGComponent ">
      <Link className={s.homeLink} to="/">Home</Link>

      <svg ref={svgRef} id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
        <path className="line01 line" d="M 10 200  600 200"></path>
        <path className="line02 line" d="M 10 400  600 400"></path>
        <path className="line03 line" d="M 10 600  600 600"></path>
        <path className="line04 line" d="M 10 800  600 800"></path>
        <path className="line05 line" d="M 10 1000  600 1000"></path>
        
        <text className="text01" x="30" y="190" ref={textRef1}>2018</text>
        <text className="text02" x="30" y="390" ref={textRef2}>2019</text>
        <text className="text03" x="30" y="590" ref={textRef3}>2020</text>

        <path className="theLine" ref={theLineRef}
              d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
              fill="none" stroke="white" strokeWidth="10px"/>


        <circle className="ball ball01" r="20" cx="50" cy="100" ref={ballRef}></circle>
        <circle className="ball ball02" r="20" cx="278" cy="201" ref={ballRef2}></circle>
        <circle className="ball ball03" r="20" cx="327" cy="401" ref={ballRef3}></circle>
        <circle className="ball ball04" r="20" cx="203" cy="601" ref={ballRef4}></circle>

      </svg>

      <svg>
        <line ref={lineRef} x1="0" x2="300" y1="10" y2="10" stroke="yellow" strokeWidth="2" strokeDasharray="300"
              strokeDashoffset="300"/>

      </svg>
    </div>
  );
};

export default DrawSvg;