import s from './DrawSVGAha.module.scss';
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

const DrawSVGAha = () => {

    gsap.registerPlugin(GSDevTools)

    const rectRef = useRef()
    const lineRef = useRef()


    useEffect(() => {

        GSDevTools.create()


        const spiralLength = rectRef.current.getTotalLength()

        gsap.set(rectRef.current, {
          strokeDasharray: spiralLength,
          strokeDashoffset: -spiralLength / 1.5,
        })

        gsap.to(rectRef.current, {
          strokeDashoffset: spiralLength / 1.5, duration: 3
        })

        gsap.set(lineRef.current, {strokeDasharray: "0 300", strokeDashoffset: 150})
        gsap.to(lineRef.current, {strokeDasharray: "300 0", strokeDashoffset: 300, ease: "none", duration: 1})



      }, []
    )

    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>

        <div className={s.wrapper}>
          <svg className={s.svg} xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 600 600">
            <rect className={s.rect} ref={rectRef} y="132" width="501" height="212"></rect>
          </svg>


          <svg className={s.svg} xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 600 600">
            <line className={s.line} ref={lineRef} x1="0" x2="300" y1="100" y2="100"></line>
          </svg>


        </div>

      </div>


    );
  }
;

export default DrawSVGAha;