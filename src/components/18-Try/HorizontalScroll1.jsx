import {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import useLocoScroll1 from "@/hooks/useLocoScroll1.js";
import s from "@/components/17-HorizontalScroll/HorizontalScroll.module.scss";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll1 = () => {
  const wrapperRef = useRef(null);
  const listWrapperRef = useRef(null);
  const squareRef = useRef(null);
  const [refSet, setRefSet] = useState(false);

  useLocoScroll1(refSet, wrapperRef);

  const setRef = (el) => {
    wrapperRef.current = el;
    setRefSet(true);
  };

  
  
  useEffect(() => {
    if (!wrapperRef.current || !listWrapperRef.current) return;

    const tween = gsap.to(listWrapperRef.current, {
      x: () => -1 * (listWrapperRef.current.offsetWidth - wrapperRef.current.offsetWidth),
      ease: "none",
    });
    
    // const tween1 = gsap.to(squareRef.current, {
    //   rotate: 180, y: -200,
    //   ease: "none",
    // });

    const scrollTrigger = ScrollTrigger.create({
      scroller: wrapperRef.current,
      trigger: listWrapperRef.current,
      start: "top 90%",
      end: () => "+=" + (listWrapperRef.current.offsetWidth - wrapperRef.current.offsetWidth + 60),
      //animation: tween1,
      animation: tween,
      scrub: true,
      markers: true,
      // pin: true,
      invalidateOnRefresh: true,
    });

    return () => {
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [refSet]);

  return (
    <div className="container" ref={setRef} data-scroll-section>
      <Link className={s.homeLink} to="/">Home</Link>
      <div className={s.spacer}></div>
      {/*<div className={s.square} ref={squareRef}>squareRef</div>*/}
      <div className={s.wrapper} ref={wrapperRef}>
        <ul className={s.innerPart} ref={listWrapperRef}>
          <li><div>Japan</div></li>
          <li><div>China</div></li>
          <li><div>Mexico</div></li>
          <li><div>Brazil</div></li>
          <li><div>France</div></li>
          <li><div>Germany</div></li>
          <li><div>Poland</div></li>
        </ul>
      </div>
      <div className={s.spacer}></div>
    </div>
  );
};

export default HorizontalScroll1;
