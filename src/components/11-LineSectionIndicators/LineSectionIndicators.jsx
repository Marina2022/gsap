import s from './LineSectionIndicators.module.scss';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";

const LineSectionIndicators = () => {

  const sectionRefs = useRef([])
  const lineRefs = useRef([])
  const lineSectionsRef = useRef([])
  const setSectionRef = (el) => {
    sectionRefs.current && !sectionRefs.current.includes(el) && sectionRefs.current.push(el)
  }

  //наверное, не надо эту рефку:
  const setLineRef = (el) => {
    lineRefs.current && !lineRefs.current.includes(el) && lineRefs.current.push(el)
  }

  useEffect(() => {

    if (sectionRefs.current.length > 0) {
      
      // способ 1 - но ease сделать не получится
      // sectionRefs.current.forEach(sectionElement => {
      //   const lineElement = sectionElement.querySelector(`.${s.line}`)
      //
      //   ScrollTrigger.create({
      //     trigger: sectionElement,
      //     start: "top 300",
      //     end: "bottom 200",
      //     animation: gsap.fromTo(lineElement, {y: -100}, {y: 200, ease: "none"}),
      //     scrub: true,
      //     markers: true
      //   })
      // })
      
      // способ 2
     
        ScrollTrigger.create({          
          trigger: lineSectionsRef.current,
          start: "top 300",
          end: "bottom 300",
          animation: gsap.fromTo(lineRefs.current, {y: -100}, {y: 200, ease: "none", stagger: .4, duration: .5}),
          scrub: .5,
          markers: true
        })      
    }

  }, [])

  return (
    <div className="container indicatorWrapper">
      <Link className={s.homeLink} to="/">Home</Link>
      <div className={s.spacer}>
        <h1>scroll down</h1>
      </div>
      <div className={s.lineSections} ref={lineSectionsRef}>
        <div className={s.lineSection} ref={setSectionRef}>
          <div className={s.number}>1</div>
          <div className={s.lineHolder}>
            <div className={s.line} ref={setLineRef}></div>
          </div>
        </div>
        <div className={s.lineSection} ref={setSectionRef}>
          <div className={s.number}>2</div>
          <div className={s.lineHolder}>
            <div className={s.line} ref={setLineRef}></div>
          </div>
        </div>
        <div className={s.lineSection} ref={setSectionRef}>
          <div className={s.number}>3</div>
          <div className={s.lineHolder}>
            <div className={s.line} ref={setLineRef}></div>
          </div>
        </div>
        <div className={s.lineSection} ref={setSectionRef}>
          <div className={s.number}>4</div>
          <div className={s.lineHolder}>
            <div className={s.line} ref={setLineRef}></div>
          </div>
        </div>
        <div className={s.lineSection} ref={setSectionRef}>
          <div className={s.number}>5</div>
          <div className={s.lineHolder}>
            <div className={s.line} ref={setLineRef}></div>
          </div>
        </div>
      </div>
      <div className={s.spacer}></div>
      <div className={s.spacer}></div>
      <div className={s.spacer}></div>

    </div>
  );
};

export default LineSectionIndicators;