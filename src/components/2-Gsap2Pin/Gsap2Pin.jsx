import s from './Gsap2Pin.module.scss'
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";
import {Link} from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Gsap2Pin = () => {

  const orangeRef = useRef()
  const orangeBlockRef = useRef()


  useGSAP(() => {

    ScrollTrigger.create({
      trigger: orangeRef.current,
      //trigger: orangeBlockRef.current,
      start: "top 450px",
      end: "bottom 450px",
      // end: "bottom +=300",      
      // markers: true,
      pin: true,
      pinSpacing: true,
    })
    
  })


  return (
    <div>
      <Link className={s.homeLink} to="/">Home</Link>
      <div className={s.block}>Content content 1</div>
      <div className={s.block}>Content content 2</div>
      <div className={s.block}>Content content 3</div>
      <div className={s.block}>Content content 4</div>
      <div className={s.block}>Content content 5</div>
      <div className={s.orangeBlock} ref={orangeBlockRef}>
        <div ref={orangeRef} className={s.orangeSquare}></div>
        
      </div>
      <div className={s.block}>Content content 6</div>
      <div className={s.block}>Content content 7</div>
      <div className={s.block}>Content content 8</div>
      <div className={s.block}>Content content 9</div>
      <div className={s.block}>Content content 0</div>
      <div className={s.block}>Content content 10</div>

    </div>
  );
};

export default Gsap2Pin;