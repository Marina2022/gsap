import s from './PreventScroll.module.scss';
import {useEffect, useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(GSDevTools);

const getScaleFactor = (x1, y1, x2, y2, width) => {
  const radius = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
  const diameter = radius * 2
  const factor = diameter / width
  return factor
}
const PreventScroll = () => {

  const circleRef = useRef()
  const moreContentRef = useRef()
  const animationWrapperRef = useRef()
  const headingOneRef = useRef()
  const headingTwoRef = useRef()
  const logoRef = useRef()
  const headingsRef = useRef([])
  const rotatorRef = useRef()
  const heroRef = useRef()

  useEffect(() => {
    // GSDevTools.create()

    const tl2 = gsap.timeline({paused: true})
    tl2.set(rotatorRef.current, {opacity: 1})

    headingsRef.current.forEach(el => {
      tl2.from(el, {scale: 0, opacity: 0, stagger: 1}, "<")
      tl2.to(el, {scale: 2, opacity: 0, stagger: 1}, "<+1")
    })

    

    const enableScroll = () => {
      gsap.set(moreContentRef.current, {display: 'block'})
      
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        pin: true,
        scrub: .8,
        animation: tl2
      })
    }
    
    const tl = gsap.timeline({onComplete: enableScroll})
      .to(circleRef.current, {x: "98vw"})
      .to(circleRef.current, {
        scale: getScaleFactor(0, 0, window.innerWidth, window.innerHeight, 100),
        x: "50vw",
        duration: 1
      })           
      .set(animationWrapperRef.current, {opacity: 1}, "<+=.5")
      .from(headingOneRef.current, {xPercent: -100, opacity: 0, duration: 1}, "<+0.25")
      .from(headingTwoRef.current, {xPercent: 100, opacity: 0, duration: 1}, "<+0.25")
      .from(logoRef.current, {scale: .3, opacity: 0, duration: .5}, "<+0.5")
      .to(headingOneRef.current, {y: -100, opacity: 0}, "<")
      .to(headingTwoRef.current, {y: 100, opacity: 0}, "<")
      
   
    

    return () => tl.kill()


  }, []);

  const setRef = (el) => {
    if (headingsRef.current && !headingsRef.current.includes(el)) {
      headingsRef.current.push(el)
    }
  }

  return (
    <div>

      <div className={s.circle} ref={circleRef}></div>


      <div className={s.hero} ref={heroRef}>
        <div className={s.animationWrapper} ref={animationWrapperRef}>
          <div className={s.logo} ref={logoRef}><img src="https://assets.codepen.io/32887/company-logo.svg"/></div>
          <div className={s.words}>
            <div className={s.headings}>
              <h1 ref={headingOneRef}>The Company</h1>
              <h2 ref={headingTwoRef}>Welcome to this site</h2>
            </div>
            <div className={s.rotator} ref={rotatorRef}>
              <h1 ref={setRef}>Our mission is to be the best</h1>
              <h1 ref={setRef}>Our values align with your values</h1>
              <h1 ref={setRef}>We have integrity and honor</h1>
              <h1 ref={setRef}>Our customers are extremely satisfied</h1>
              <h1 ref={setRef}>There is no competition</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={s.moreContent} ref={moreContentRef}>
        <h1>More Content</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque lacus, commodo sit amet odio quis, ultrices
          convallis risus. Maecenas dictum sapien urna, vitae finibus tellus porta imperdiet. Pellentesque quis mi in
          enim sollicitudin commodo sed in augue. Morbi ut magna non ex fermentum hendrerit. Nam ac nulla tortor.</p>
        <p> Proin sagittis erat enim, id vestibulum eros pretium dignissim. Nunc fringilla hendrerit leo pellentesque
          bibendum. Mauris nec eleifend leo. Sed posuere et mauris ut posuere. Proin commodo augue sed eleifend
          convallis. Sed malesuada nibh fermentum, tincidunt nunc sit amet, fringilla mi.</p>
        <p> Proin sagittis erat enim, id vestibulum eros pretium dignissim. Nunc fringilla hendrerit leo pellentesque
          bibendum. Mauris nec eleifend leo. Sed posuere et mauris ut posuere. Proin commodo augue sed eleifend
          convallis. Sed malesuada nibh fermentum, tincidunt nunc sit amet, fringilla mi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque lacus, commodo sit amet odio quis, ultrices
          convallis risus. Maecenas dictum sapien urna, vitae finibus tellus porta imperdiet. Pellentesque quis mi in
          enim sollicitudin commodo sed in augue. Morbi ut magna non ex fermentum hendrerit. Nam ac nulla tortor.</p>
        <p> Proin sagittis erat enim, id vestibulum eros pretium dignissim. Nunc fringilla hendrerit leo pellentesque
          bibendum. Mauris nec eleifend leo. Sed posuere et mauris ut posuere. Proin commodo augue sed eleifend
          convallis. Sed malesuada nibh fermentum, tincidunt nunc sit amet, fringilla mi.</p>
      </div>

    </div>
  );
};

export default PreventScroll;