import {gsap} from 'gsap';
import s from './SvgBasics.module.scss';
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

const SvgBasics = () => {


  const svgBookRef = useRef()
  const monsterRef = useRef()
  const boxesRef = useRef()


  // gsap.registerPlugin(GSDevTools)

  useEffect(() => {

    const t2 = gsap.timeline({defaults: {duration: .8}})
      .set(svgBookRef.current, {
        attr: {
          points: "200 100 200 200 200 100"
        }
      })
      .to(svgBookRef.current, {
        attr: {
          points: "100 200 200 200 300 200"
        },
        ease: 'bounce'
      })
      .to(svgBookRef.current, {
        attr: {
          points: "100 200 200 300 300 200"
        },
        ease: 'bounce'
      })
      .to(svgBookRef.current, {
        attr: {
          points: "200 200 200 100 200 200"
        }
      })

    gsap.to(monsterRef.current, {
      attr: {
        d: "M 65.603 201.536 C 65.603 201.536 41.962 7.092 119.385 39.598 C 196.808 72.104 215.721 120.568 265.957 121.749 C 316.193 122.93 343.38 -7.092 407.801 33.688 C 472.222 74.468 458.628 247.636 393.617 268.321 C 328.606 289.006 318.558 148.936 247.636 162.53 C 176.714 176.124 171.986 305.556 126.478 295.508 C 80.97 285.46 66.785 248.227 65.603 201.536 Z"
      }, duration: .7, repeat: 3, yoyo: true
    })

    gsap.timeline()
      .to(boxesRef.current, {
      y: -200
    })
      .to(boxesRef.current, {
        x: 200
      })


    GSDevTools.create()

    t2.play()


  }, []);


  return (
    <div className='container'>
      
      <Link to='/svg'>SVG-Home</Link>
      <div className={s.wrapper}>

        <svg className={s.svgBook} viewBox="0 0 200 400" width="400" height="400"
             xmlns="http://www.w3.org/2000/svg">
          <polyline ref={svgBookRef} points="100 200 200 200 300 200"></polyline>
        </svg>

        <svg className={s.monster} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">

          <path ref={monsterRef}
                d="M 33.097 196.217 C 33.097 196.217 37.825 39.007 147.163 81.56 C 256.501 124.113 221.631 136.525 265.957 121.749 C 310.283 106.973 339.243 21.277 403.664 62.057 C 468.085 102.837 514.184 208.038 449.173 228.723 C 384.162 249.408 313.239 193.262 242.317 206.856 C 171.395 220.45 142.435 277.778 96.927 267.73 C 51.419 257.682 34.279 242.908 33.097 196.217 Z"></path>
        </svg>


        <svg className={s.boxes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g ref={boxesRef}>
            <rect className={s.pink} y="300" width="100" height="100"></rect>
            <rect className={s.blue} x="200" y="200" width="100" height="100"></rect>
          </g>
        </svg>

      </div>
    </div>
  );
};

export default SvgBasics;