import s from './TextStaggering.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Splitting from 'splitting'


gsap.registerPlugin(ScrollTrigger);

const TextStaggering = () => {

  const toSplitRef = useRef()
  const quoteRef = useRef()
  const quoteWrapperRef = useRef()

  useEffect(() => {

    window.addEventListener('resize', () => window.location.reload())

    setTimeout(
      () => {
        const results = Splitting({
          target: toSplitRef.current,
          by: "lines",
        });

        let innerText = ''
        results[0].lines.forEach(lineMaybe => {
          let line = ''
          lineMaybe.forEach(word => {
            line += line ? ' ' + word.innerText : word.innerText
          })
          innerText += `<div class="animDiv"><div>${line}</div></div>`
        })

        toSplitRef.current.innerHTML = innerText
        // тут можно было бы в цикле пройти по всем таким рефам с текстами (если у нас несколько таких дивов)

        // Теперь gsap, охохоюшки
        const divs = Array.from(toSplitRef.current.querySelectorAll('.animDiv'))

        // ScrollTrigger.create({
        //   trigger: toSplitRef.current,
        //   start: "top 80%",
        //   end: "bottom 80%",
        //   markers: true,
        //   animation: gsap.from('.animDiv', {y:100, opacity: 0, stagger: 0.1}),
        //   toggleActions: "play none none reset"
        // })

        divs.forEach(div => {
          ScrollTrigger.create({
            // по уму надо бы триггером делать обертку над этим дивом, т.к. див будет на 100px ниже, ибо gsap.from пойдет.. 
            trigger: div,
            start: "top 90%",
            end: "bottom 90%",
            animation: gsap.from(div.querySelector('div'), {y: 200, opacity: 0}),
            toggleActions: "restart none none reverse",
            // markers: true
          })
        })
      }, 300
    )

    ScrollTrigger.create({
      trigger: quoteWrapperRef.current,
      start: "100% bottom",
      animation: gsap.from(quoteRef.current, {scale: 0, transformOrigin: "center bottom"}),
      toggleActions: "restart none none none",
      // markers: true
    })

    ScrollTrigger.create({
      trigger: quoteWrapperRef.current,
      start: "top 100%",
      end: "bottom 100%",
      animation: gsap.to(quoteRef.current, {scale: 0, transformOrigin: "center bottom"}),
      // markers: true,      
      onLeaveBack: () => gsap.set(quoteRef.current, {scale: 0}),
    })

  }, []);


  return (
    <div className={s.container}>

      <Link className={s.homeLink} to="/">Home</Link>
      <div className={s.wrapper}>
        <div className={`${s.content} ${s.fullscreen} ${s.centered}`}>Scroll Down</div>
        <div className={`${s.content} ${s.dark} `}>
          <h3 className={s.toSplit} ref={toSplitRef}>
            ScrollTrigger uses all kinds of techniques to maximize performance like throttling updates, pre-calculating
            intersection points to minimize effort during scroll, leveraging transforms, layerizing elements to utilize
            the GPU.
          </h3>
          <div id="output" className={s.output}></div>
        </div>


        <div className={`${s.content} ${s.fullscreen} ${s.centered}`}>Scroll More</div>
        {/*<div className={`${s.content} $s.{dart} ${s.centered}`}>*/}
        <div className={`${s.content} $s.{dart} `}>
          <h3 className={s.toSplit}>ScrollTrigger uses all kinds of techniques to maximize performance like throttling
            updates, pre-calculating intersection points to minimize effort during scroll, leveraging transforms,
            layerizing elements to utilize the GPU.</h3>
          <div ref={quoteWrapperRef} className={s.quoteWrapper}>
            <div className={s.quote} ref={quoteRef}>I'm a quote</div>
          </div>
          <h3 className={s.toSplit}>Entering or leaving a ScrollTrigger area can make an animation play, pause, resume,
            reverse, restart, or complete...or you can make the scrollbar can act like a scrubber!</h3>
        </div>
      </div>

    </div>
  );
};

export default TextStaggering;