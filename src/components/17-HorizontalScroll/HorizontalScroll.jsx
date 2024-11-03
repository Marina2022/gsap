import s from './HorizontalScroll.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import useMobileScreen from "@/hooks/useMobileScreen.js";


gsap.registerPlugin(ScrollTrigger);
const HorizontalScroll = () => {
  
  const wrapperRef = useRef()
  const listRef = useRef()


  const isMobile = useMobileScreen()
  
  useEffect(() => {
    
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      pin: true,
      start: "top 40%",
      end: ()=> "+=" + listRef.current.offsetWidth - wrapperRef.current.offsetWidth + 60,
      markers: 1,
      animation: gsap.to(listRef.current, {x: ()=> -1 * (listRef.current.offsetWidth - wrapperRef.current.offsetWidth + 60)}),
      scrub: 1,
      // invalidateOnRefresh: true           
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
    
  }, [isMobile]);
  
  return (
    <div className="container">
      <Link className={s.homeLink} to="/">Home</Link>
      <div className={s.spacer}></div>
      <div className={s.wrapper} ref={wrapperRef}>

        <ul className={s.innerPart} ref={listRef}>
          <li>1.Japan</li>
          <li>2.China</li>
          <li>3.Mexico</li>
          <li>4.Brazil</li>
          <li>5.France</li>
          <li>6.German</li>
          <li>7.Poland</li>
        </ul>

      </div>
      <div className={s.spacer}></div>
    </div>
  );
};

export default HorizontalScroll;