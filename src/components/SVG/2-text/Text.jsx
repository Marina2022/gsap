import s from './Text.module.scss';
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";
const Text = () => {
  
  const circleRefs = useRef([])
  

  gsap.registerPlugin(GSDevTools)
  
  const setRef = (el)=>{
    circleRefs.current && !circleRefs.current.includes(el) && circleRefs.current.push(el)
  }
  
  useEffect(() => {

    
    GSDevTools.create()
    
    gsap.timeline()
      .fromTo([circleRefs.current], {
      scale: 0, transformOrigin: "50% 50%", duration: .5
    },{
      scale: 5, stagger: {
        each: .1,
        // ease: 'power3'
      }
    })
         
    
    
  }, []);
  
  
  return (
    <div className='container'>
      <Link to='/svg'>SVG-Home</Link>

      <div className={s.wrapper}>
        <svg className={s.svg} width="500" height="500">
          <circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".2"/>
          <circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".2"/>
          <circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".2"/>
          <circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".2"/>
          {/*<circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".1"/>*/}
          {/*<circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".1"/>*/}
          {/*<circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".1"/>*/}
          {/*<circle ref={setRef} cx="250" cy="250" r="100" fill="red" fillOpacity=".1"/>*/}
          
        </svg>
      </div>
    </div>

  );
};

export default Text;