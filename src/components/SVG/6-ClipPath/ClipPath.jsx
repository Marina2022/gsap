import s from './ClipPath.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

const ClipPath = () => {

    // gsap.registerPlugin(GSDevTools)


    useEffect(() => {

        // GSDevTools.create()

      }, []
    )


    const circleRef = useRef()
    const imgRef = useRef()
    const imgWrapperRef = useRef()
    const innerDivRef = useRef()

    const barsRef = useRef([])

    const setRef = (el) => {
      barsRef.current && !barsRef.current.includes(el) && barsRef.current.push(el)
    }

    useEffect(() => {
           

      gsap.timeline({})
        .from(circleRef.current, {
          scale: 0, duration: 1, transformOrigin: "50% 50%"
        }, 0)
        .to(innerDivRef.current, {
          duration: 1.5, scale: 0.8, transformOrigin: "50% 50%"
        }, 0)
      
        .from(barsRef.current, {
          scaleX:0, stagger: {each: .2, from: 'random'} 
        })
      
      

    }, []);


    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>

        <div className={s.wrapper}>
          <svg className={s.svg} id="svg" width="300" height="300">
            <defs>
              <clipPath id="circleClip">
                <circle ref={circleRef} r="150" cx="150" cy="150"/>
              </clipPath>
            </defs>
          </svg>

          <div ref={imgWrapperRef} className={s.imgWrapper} style={{clipPath: 'url("#circleClip")'}}>
            <div ref={innerDivRef} className={s.innerDiv}>
            </div>
          </div>
        </div>


        <div className={s.moreWrapper}>
          <svg className={s.moreSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <defs>
              <clipPath id="clip">
                <rect ref={setRef} width="500" height="100" y="400"></rect>
                <rect ref={setRef} width="500" height="100" y="300"></rect>
                <rect ref={setRef} width="500" height="100" y="200"></rect>
                <rect ref={setRef} width="500" height="100" y="100"></rect>
                <rect ref={setRef} width="500" height="100" y="0"></rect>
              </clipPath>
            </defs>

          </svg>

          <div className={s.imgWrapperMore} style={{clipPath: "url(#clip)"}}>
            <div className={s.divcheg}></div>
          </div>
        </div>

      </div>

    );
  }
;

export default ClipPath;