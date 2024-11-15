import s from './Masks.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

const Masks = () => {

    gsap.registerPlugin(GSDevTools)


    const maskRectRef = useRef()
    const gradRef = useRef()
    const svgRef = useRef()
    const textRefTwo = useRef()

    useEffect(() => {

        GSDevTools.create()

      }, []
    )

    useEffect(() => {
      gsap.timeline()
        .from(maskRectRef.current, {
          xPercent: -100, duration: 2
        })
        .from(svgRef.current, {x: 300, duration: 2}, 0)
        .to(textRefTwo.current, {x: 500, duration:2})


    }, []);


    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>

        <div>
          <svg  ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" x1="250" y1="159" x2="250" y2="341" id="gradient-0"
                              gradientTransform="matrix(0.008521, -1.000521, 0.362565, -0.01183, 374.235238, 415.33416)">
                <stop offset="0" style={{stopColor: "rgb(100% 100% 100%)"}}></stop>
                <stop offset="1" style={{stopColor: "rgb(3, 3, 3)"}}></stop>
              </linearGradient>
              <mask id="mask-0">
                <rect ref={maskRectRef} className={s.mask} y="159" width="506" height="182"
                      style={{fill: 'url(#gradient-0)'}}
                      x="-6"></rect>
              </mask>
            </defs>
            <text className={s.text}
                  x="42" y="270">Mask reveal
            </text>
          </svg>
        </div>

        <div>
          <svg className={s.svg2} xmlns="http://www.w3.org/2000/svg" viewBox="0 200 500 200">
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" x1="250" y1="0" x2="250" y2="182" id="gradient-0"
                              gradientTransform="matrix(0.008521, -1.000521, 0.362565, -0.01183, 374.235238, 331.33416)">
                <stop offset="0" style={{stopColor: "rgb(100% 100% 100%)"}}></stop>
                <stop offset="1" style={{stopColor: "rgb(3, 3, 3)"}}></stop>
              </linearGradient>
              <mask id="mask-0">
                <rect y="161" width="506" height="182" style={{fill: "url(#gradient-0)"}} x="-6"></rect>
              </mask>
            </defs>
            <g style={{mask: "url(#mask-0)"}}>
              <text
                ref={textRefTwo}
                className={s.text}
                x="42" y="270">Mask reveal
              </text>
            </g>
          </svg>
        </div>

      </div>

    );
  }
;

export default Masks;