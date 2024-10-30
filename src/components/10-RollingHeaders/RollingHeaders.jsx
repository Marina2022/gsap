import s from './RollingHeaders.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const RollingHeaders = () => {

  const refs = useRef([])
  const setRef = (el) => {
    if (refs.current && !refs.current.includes(el)) {
      refs.current.push(el)
    }
  }

  useEffect(() => {
    refs.current.forEach(ref=>{
      gsap.set(ref, {transformPerspective: 800})
            
      ScrollTrigger.create({
        trigger: ref,        
        start: "top 90%",
        end: "top 10%",
        onEnter: ()=>gsap.fromTo(ref, {rotateX: -90}, {rotateX: 0}),
        onEnterBack: ()=>gsap.to(ref, {rotateX: 0}),
      })

      ScrollTrigger.create({
        trigger: ref,        
        start: "top bottom",
        end: "bottom top",
        onLeave: ()=>gsap.set(ref,  {rotateX: 90}),
        onLeaveBack: ()=>gsap.to(ref,  {rotateX: -90}),
      })
      
    })
  }, []);


  return (
    <div className={`container ${s.rollingHeadersContainer}`}>
      <Link className={s.homeLink} to="/">Home</Link>
      <div className={s.wrapper}>
        <h1>3D Roll onEnter / onLeave / onEnterBack / onLeaveBack</h1>
        <div className={s.space}></div>
        <div className={s.heading3dWrapper} >
          <div className={s.heading3d} ref={setRef}>
            <div><h2>Performance</h2></div>
            <div><h2>Performance</h2></div>
            <div><h2>Performance</h2></div>
          </div>
        </div>
        <p>ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. e est. Mauris placerat
          eleifend Mauris placerat eleifend leo.</p><p>morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <p>malesuada fames ac turpis egestas. e est. Mauris placerat eleifend. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
          est. Mauris placerat</p>
        <p>e est. Mauris placerat eleifend libero sit amet quam egestas semper. Aenean e est. Mauris placerat eleifend
          ultricies mi vitae est. Mauris placerat eleifendante. Donec eu leo.</p>


        <div className={s.heading3dWrapper} >
          <div className={s.heading3d} ref={setRef}>
            <div><h2>Engine</h2></div>
            <div><h2>Engine</h2></div>
            <div><h2>Engine</h2></div>
          </div>
        </div>
        <p>tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
          placerat eleifend </p>
        <p>Pellentesque habitant morbi tristique senectusec eu libero sit amet quam egestas semper. Aenean ultricies mi
          vitae est. Mauris placerat eleifend leo.</p>

        <div className={s.heading3dWrapper} >
          <div className={s.heading3d} ref={setRef}>
            <div><h2>Interior</h2></div>
            <div><h2>Interior</h2></div>
            <div><h2>Interior</h2></div>
          </div>
        </div>
        <p> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
          eget, tempor sit amet, ante. Donec eu libero sit amet quam egesltricies mi vitae est. Mauris</p>
        <p>tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenet. Mauris placerat eleifend </p>
        <p>Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.ricies eget, .</p>
        <p>malesuada fames ac turpis egestas. Vestibulum torcerat</p>
        <p>Pellentesque habitant morbi tristique senectusec eu libero sit amet quam egestas semper. Aenean ultricies mi
          vitae est. Mauris placerat eleifend leo.</p>


        <div className={s.heading3dWrapper} >
          <div className={s.heading3d} ref={setRef}>
            <div><h2>Handling</h2></div>
            <div><h2>Handling</h2></div>
            <div><h2>Handling</h2></div>
          </div>
        </div>
        <p>tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
          est. Mauris placerat eleifend leo.</p>
        <p>Vestibulum tortor quam, morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
          semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>


        <div className={s.heading3dWrapper} >
          <div className={s.heading3d} ref={setRef}>
            <div><h2>Summary</h2></div>
            <div><h2>Summary</h2></div>
            <div><h2>Summary</h2></div>
          </div>
        </div>
        <p>Tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
          est. Mauris placerat eleifend leo.</p>
        <p>malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
          ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat</p>
      </div>
    </div>
  );
};

export default RollingHeaders;