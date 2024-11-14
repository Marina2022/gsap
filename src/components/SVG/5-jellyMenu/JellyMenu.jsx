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
    const wireLineRef = useRef()
    const wireBallRef = useRef()

    useEffect(() => {
      const tl = gsap.timeline()
        .to(wireBallRef.current, {
          attr: {
            cy: 300 - 40
          }, duration: 1, ease: 'none'
        })
        .to(wireLineRef.current, {
          attr: {
            d: "M 101 199 C 102 338 301 329 300 200"
          }, duration: .5, ease: 'none'
        }, .5)

      
      const master = gsap.timeline({repeat: 10})

      master
        .add(tl.tweenTo(1, {ease: 'power2.inOut', repeat: 1, yoyo: true}))
        .to(wireLineRef.current, {
          attr: {
            d: "M 101 199 C 223 179 248 197 300 200"
          }, duration: .1, ease: 'none', repeat: 1, yoyo: true
        }, 1.5)
      
      
    }, []);


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
          <svg className={s.menu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width='500' height='300'>
            <line ref={lineRef} className={s.line} x1="48" y1="195" x2="48" y2="196"></line>
            <ellipse onClick={handleMenuClick} cx="49" cy="195" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="149" cy="196" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="250" cy="196" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="450" cy="195" rx="19" ry="19"></ellipse>
            <ellipse onClick={handleMenuClick} cx="350" cy="196" rx="19" ry="19"></ellipse>
          </svg>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width='400' height='400'>
            <path ref={wireLineRef} className={s.wireLine}
                  d="M 101 199 C 227 200 249 200 300 200"></path>            
            
            <ellipse ref={wireBallRef} className={s.wireBall} cx="201" cy="59"
                     rx="40" ry="40"></ellipse>
          </svg>
        </div>
      </div>

    );
  }
;

export default JellyMenu;