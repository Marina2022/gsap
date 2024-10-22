import s from './ParallaxCar.module.scss';
import road from '@/assets/road.png';
import carTop from '@/assets/carTop.png';
import branch from '@/assets/branch.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ParallaxCar = () => {
  const carRef = useRef();
  const roadRef = useRef();
  const wrapperRef = useRef();
  const branchesRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        // markers: true,
        start: 'top 25%',
        end: '+=300',
        scrub: .5,
        pin: true
      },
    });

    timeline.to(carRef.current, { y: -320 });
    timeline.to(roadRef.current, { y: 320 }, 0);
    timeline.to(branchesRef.current, { y: 420 }, 0);

    return () => {
      timeline.kill(); // Очистка при размонтировании
    };
  }, []);

  return (
    <div className="container">
      <Link className={s.homeLink} to="/">Home</Link>
      <div className="flexContainer">
        <h1>scroll down to trigger the animations</h1>
      </div>

      <div className={s.allWrapper} ref={wrapperRef}>
        <img className={s.road} ref={roadRef} src={road} alt="Road" />
        <img className={s.carTop} ref={carRef} src={carTop} alt="Car" />
        
        <div className={s.branches} ref={branchesRef}>
          <img className={s.branch1} src={branch} />
          <img className={s.branch2} src={branch} />
          <img className={s.branch3} src={branch} />
          <img className={s.branch4} src={branch} />
          <img className={s.branch5} src={branch} />
          <img className={s.branch6} src={branch} />
        </div>
      </div>

      <div className="flexContainer footer">
        <h1 className={s.h1}>more text</h1>
      </div>
    </div>
  );
};

export default ParallaxCar;
