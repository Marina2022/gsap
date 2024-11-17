import s from './Draggable.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";
import {Draggable} from "gsap/Draggable";
import lion from '@/assets/lion.png'

gsap.registerPlugin(Draggable);

const DraggableComp = () => {

    // gsap.registerPlugin(GSDevTools)

    const dragMeRef = useRef()
    const circleMaskRef = useRef()
    const grayRef = useRef()
    const turbulenceRef = useRef()    
    const squareRef = useRef()
    const circleRef = useRef()

    useEffect(() => {
        // GSDevTools.create()
      }, []
    )

    useEffect(() => {
      gsap.set(circleMaskRef.current, {attr: {cx: 250, cy: 250}})

      Draggable.create(dragMeRef.current, {
        onDrag: function () {
          gsap.set(circleMaskRef.current, {attr: {cx: this.x + 250, cy: this.y + 250}})
          gsap.set(grayRef.current, {scale: 1.5, transformOrigin: `${this.x + 250}px ${this.y + 250}px`})
        }
      })
      
      Draggable.create(squareRef.current)
      Draggable.create(circleRef.current)


      gsap.to(turbulenceRef.current, {attr: {
          baseFrequency: 0.02
        }, repeat: -1, yoyo:true, duration: 2
      })
      

    }, []);


    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>
        <svg>
          <defs>
            <mask id="circleMask">
              <circle ref={circleMaskRef} r="250" style={{fill: "white"}} cx="125" cy="125"></circle>
            </mask>
          </defs>
        </svg>


        <div className={s.wrapper}>
          <svg className={s.draggerSvg} ref={dragMeRef} viewBox="0 0 500 500" width="500" height='500'>
            <circle className={s.dragger} stroke="wheat" r="250" cx="250" cy="250"></circle>
          </svg>
          <img className={s.lion} src={lion} alt=""/>
          <div className={s.imgWrapper}>
            <img ref={grayRef} className={s.grayLion} src={lion} alt=""/>
          </div>
        </div>

        <div className={s.warpWrapper}>
          <h1 className={s.title}>Памагитииии</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" >
            <defs>
              {/*<filter id="warp-filter-0" bx:preset="warp 1 50 0.1" color-interpolation-filters="sRGB" x="-50%" y="-50%"*/}
              <filter id="warp-filter-0" colorInterpolationFilters="sRGB" x="-50%" y="-50%"
                      width="200%" height="200%">
                <feComponentTransfer>
                  <feFuncR type="table" tableValues="1 0.5"></feFuncR>
                </feComponentTransfer>
                <feMerge result="a">
                  <feMergeNode></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
                <feTurbulence ref={turbulenceRef} type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="warp"></feTurbulence>
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="50" in="a"
                                   in2="warp"></feDisplacementMap>
              </filter>
            </defs>
            <rect className={s.rectWarp} x="122" y="110.58" width="338.34" height="221.75"                  ></rect>
          </svg>
        </div>


        <div className="goo">
          <h2>Drag the Small Square and Circle</h2>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0"
               style={{display: "none"}}>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                               result="goo"/>
              </filter>
            </defs>
          </svg>

          <div className="demo">
            <div className="draggables">
              <div className="drag square" ref={squareRef} ></div>
              <div ref={circleRef} className="drag circle"></div>
            </div>
            <div className="box"></div>
          </div>
        </div>
        <div style={{height: 800, width: 500}}></div>


      </div>
    );
  }
;

export default DraggableComp;