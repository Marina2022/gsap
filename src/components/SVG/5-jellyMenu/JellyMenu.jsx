import s from './JellyMenu.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

const JellyMenu = () => {

    // gsap.registerPlugin(GSDevTools)


    useEffect(() => {

        // GSDevTools.create()


      }, []
    )

    const lineRef = useRef()

    const handleMenuClick = (e) => {
      
      const cx = e.target.getAttribute("cx")
      
      gsap.timeline()
        .to(lineRef.current,
          {
            attr: {
              x1: cx
            }, duration: .3, 
            ease: "sine"
          }          
        )
        .to(lineRef.current,
          {
            attr: {
              x2: cx
            }, ease: "elastic"
          }, "-=0.1")
    }

    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>

        <div className={s.wrapper}>
          <svg className={s.menu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <line ref={lineRef} className={s.line} x1="48" y1="195" x2="48" y2="196"></line>
            <ellipse onClick={handleMenuClick} cx="49" cy="195" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="149" cy="196" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="250" cy="196" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="450" cy="195" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="350" cy="196" rx="19" ry="19"></ellipse>
          </svg>


        </div>

      </div>

    );
  }
;

export default JellyMenu;