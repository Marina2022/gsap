import s from './SplitScreen.module.scss';

import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const SplitScreenAnimation = () => {

  gsap.registerPlugin(ScrollTrigger);

  const refs = useRef([])
  const squareRef = useRef()

  const setRef = (el) => {
    if (refs.current && !refs.current.includes(el)) refs.current.push(el)
  }

  useEffect(() => {
    refs.current.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        animation: gsap.fromTo(squareRef.current, {y: 300}, {y: -300})

      })
    })
  }, []);


  return (
    <div className="container">
      <Link className={s.homeLink} to="/">Home</Link>


      <div className={s.spacer}></div>

      <div className={s.row}>
        <div className={s.left}>

          <div className={s.text} ref={setRef}>
            <p>Много букаф</p>
            <p>Много букаф</p>
            <p>Много букаф</p>
            <p>Много букаф</p>
            <p>Много букаф</p>
            <p>Много букаф</p>
            <p>Много букаф</p>
          </div>

          <div className={s.spacerSmall}></div>
          <div className={s.text} ref={setRef}>
            <p>Много букаф! Да да</p>
            <p>Много букаф! Да да</p>
            <p>Много букаф! Да да</p>
            <p>Много букаф! Да да</p>
            <p>Много букаф! Да да</p>
            <p>Много букаф! Да да</p>
            <p>Много букаф! Да да</p>
          </div>

        </div>
        <div className={s.right}>
          <div className={s.square}>
            <div className={s.inner} ref={squareRef}>
            </div>

          </div>
        </div>
      </div>


      <div className={s.spacer}></div>

    </div>
  )
    ;
};

export default SplitScreenAnimation;
