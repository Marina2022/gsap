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

        <div style={{height: 800, width: 500}}></div>

      </div>
    );
  }
;

export default DraggableComp;