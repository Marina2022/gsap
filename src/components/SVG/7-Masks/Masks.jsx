import s from './Masks.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

const Masks = () => {

    // gsap.registerPlugin(GSDevTools)

    const maskRectRef = useRef()
    const svgRef = useRef()
    const textRefTwo = useRef()
    const thirdMaskRef = useRef()
    const gradRefTwo = useRef()

    useEffect(() => {
        // GSDevTools.create()
      }, []
    )

    useEffect(() => {
      gsap.timeline()
        .from(maskRectRef.current, {
          xPercent: -100, duration: 2
        })
        .from(svgRef.current, {x: 300, duration: 2}, 0)
        .to(textRefTwo.current, {x: 500, duration: 2})
        .fromTo(thirdMaskRef.current, {xPercent: -100, duration: 2}, {xPercent: 100, duration: 2})
        .fromTo(gradRefTwo.current, {attr: {cx: 0}}, {attr: {cx: 500}, duration:2})
    }, []);


    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>

        <div>
          <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
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

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
            <defs>
              <radialGradient gradientUnits="userSpaceOnUse" cx="252" cy="149" r="100" id="gradient-1">
                <stop offset="0" style={{stopColor: "rgb(255, 255, 255)"}}></stop>
                <stop offset="0.5" style={{stopColor: "rgb(255, 255, 255)"}}></stop>
                <stop offset="1"></stop>
              </radialGradient>
              <mask id="mask-1">
                <ellipse ref={thirdMaskRef} className={s.maskTwo} cx="252" cy="149" rx="100"
                         ry="100"></ellipse>
              </mask>
            </defs>
            <rect className={s.maskTwoRect} width="500" height="300"></rect>
            <text
              className={s.thirdText} style={{mask: "url(#mask-1)"}}
              x="79" y="172">Spotlight
            </text>
          </svg>
        </div>


        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300" >
            <defs>
              <radialGradient ref={gradRefTwo} gradientUnits="userSpaceOnUse" cx="251.93" cy="149.36" r="250" id="gradient2"
                              gradientTransform="matrix(1, -0.002571, 0.002571, 0.999997, -0.383998, 0.648197)">
                <stop offset="0" style={{stopColor: "rgb(255, 255, 255)"}}></stop>
                <stop offset="0.21" style={{stopColor: "rgb(255, 255, 255)"}}></stop>
                <stop offset="0.39" style={{stopColor: "rgb(122, 122, 122)"}}></stop>
                <stop offset="1" style={{stopColor: "rgb(64, 64, 64)"}}></stop>
              </radialGradient>
              <mask id="mask2">
                <rect width="500" height="300" style={{fill: "url(#gradient2)"}}></rect>
              </mask>
            </defs>
            <rect width="500" height="300" className={s.maskTwoRect}></rect>
            <text className={s.thirdText} style={{mask: "url(#mask2)"}}
                  x="79" y="172">Spotlight
            </text>
          </svg>
        </div>
      </div>
    );
  }
;

export default Masks;