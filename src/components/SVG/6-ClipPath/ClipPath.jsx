import s from './ClipPath.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

const ClipPath = () => {

    gsap.registerPlugin(GSDevTools)


    useEffect(() => {

        GSDevTools.create()

      }, []
    )


    const circleRef = useRef()
    const imgRef = useRef()
    const imgWrapperRef = useRef()
    const innerDivRef = useRef()

    useEffect(() => {

      gsap.timeline({defaults: {transformOrigin: "50% 50%"}})
        .from(circleRef.current, {
          scale: 0, duration: 1
        }, 0)
        .to(innerDivRef.current, {
          duration: 1.5, scale: 0.8
        }, 0)

    }, []);


    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>


        {/*style="clip-path: '#svg'"*/}
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
      </div>

    );
  }
;

export default ClipPath;