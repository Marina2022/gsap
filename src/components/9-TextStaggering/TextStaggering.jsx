import s from './TextStaggering.module.scss';
import {Link} from "react-router-dom";
import {lineClass, useEffect, useRef, useState} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Splitting from 'splitting'

import SplittedText from "@/components/SplittedText.jsx";


gsap.registerPlugin(ScrollTrigger);

const TextStaggering = () => {

  const toSplitRef = useRef()
  const newRef = useRef()
  const textRefs = useRef([])

  const setRef = (el) => {
    textRefs.current && !textRefs.current.includes(el) && textRefs.current.push(el)
  }

  console.log(textRefs.current)


//код - рабочий, но только при загрузке. При ресайзе уже не рабочий  
  useEffect(() => {

    window.addEventListener('resize', () => window.location.reload())

    setTimeout(
      () => {
        const results = Splitting({
          target: toSplitRef.current,
          by: "lines",
        });

        let innerText=''
        
        results[0].lines.forEach(lineMaybe => {

          let line = ''
          lineMaybe.forEach(word => {
            line += line ? ' ' + word.innerText : word.innerText
          })

          innerText+= `<div>${line}</div>`
          

          console.log(line)
        })

        console.log('innerText', innerText)
        
        toSplitRef.current.innerHTML = innerText
      }, 300
      
    )

    
  }, []);


  return (
    <div className={s.container}>

      <Link className={s.homeLink} to="/">Home</Link>

      <div className={s.wrapper}>


        <div className={`${s.content} ${s.fullscreen} ${s.centered}`}>Scroll Down</div>


        <div className={`${s.content} ${s.dark} `}>
          <div>------------------</div>
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
          <h3 className={s.toSplit}>Entering or leaving a ScrollTrigger area can make an animation play, pause, resume,
            reverse, restart, or complete...or you can make the scrollbar can act like a scrubber!</h3>
        </div>
      </div>

    </div>
  );
};

export default TextStaggering;