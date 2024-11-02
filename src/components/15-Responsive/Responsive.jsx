import {Link} from "react-router-dom";
import s from './Responsive.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const Responsive = () => {

  const colRefs = useRef([])

  const setRef = (el) => {
    colRefs.current && !colRefs.current.includes(el) && colRefs.current.push(el)
  }

  useEffect(() => {


    let mm = gsap.matchMedia();

    // ScrollTrigger.saveStyles('.time')

    colRefs.current.forEach((colElement, index) => {
      mm.add("(min-width: 900px)", () => {

        const items = colElement.querySelectorAll('.item')

        const tl = gsap.timeline({paused: true})
          .from(Array.from(items), {
            xPercent: gsap.utils.wrap(index % 2 === 0 ? [-100, 100] : [100, -100]),
            duration: 0.5
          })
          .from(Array.from(items), {opacity: 0, duration: .3}, 0)


        ScrollTrigger.create({
          trigger: colElement,
          start: "top 100%",
          onLeaveBack: () => {
            tl.pause(0)
          }
        })

        ScrollTrigger.create({
          trigger: colElement,
          start: "top 80%",
          onEnter: () => {
            tl.play()

          }
        })
      });
    })


    mm.add("(max-width: 899px)", () => {


      colRefs.current.forEach((colElement) => {
        const items = colElement.querySelectorAll('.item')

        const t2 = gsap.timeline({paused: true})
          .from(items[0], {
            scale: .8, duration: 0.5
          })
          .from(items[0], {opacity: 0, duration: .3}, 0)

          .from(items[1], {
            y: 100, duration: 0.5
          }, 0.3)
          .from(items[1], {opacity: 0, duration: .3}, 0.3)

        ScrollTrigger.create({
          trigger: colElement,
          start: "top 100%",
          onLeaveBack: () => t2.pause(0)
        })

        ScrollTrigger.create({
          trigger: colElement,
          start: "top 80%",
          onEnter: () => t2.play()
        })
      });

    })
  })

  return (
    <div className="responsive-scrollTrigger">
      <Link className={s.homeLink} to="/">Home</Link>
      <div className="main">
        <div className="fullScreen">
          <h1>Gallery of Wonders</h1>
          <h3>Scroll Down</h3>
        </div>
        <div className="cols-2" ref={setRef}>
          <div className="item photoHolder">
            <div className="photo ozarkhills"></div>
          </div>
          <div className="item">
            <div>
              <h1>Ozark Hills</h1>
              <p>These rolling hills are filled with lush wild flowers and trickling streams. From dusk til dawn the
                sun
                paints this lush landscape with every color of the rainbow. Plan a day hike the whole family can
                enjoy</p>
            </div>
          </div>
        </div>

        <div className="cols-2" ref={setRef}>
          <div className="item photoHolder">
            <div className="photo crimsonforest"></div>
          </div>
          <div className="item">
            <div>
              <h1>Crimson Forest</h1>
              <p>It's a like a journey through a place time forgot. The Crimson Forest is in a perpetual state of
                autumn
                giving visitors all over the world the same experience regardless of when they visit.</p>
            </div>
          </div>
        </div>

        <div className="cols-2" ref={setRef}>
          <div className="item photoHolder">
            <div className="photo shamrockmeadows"></div>
          </div>
          <div className="item">
            <div>
              <h1>Shamrock Meadows</h1>
              <p>I have made many a road trip in my lifetime, but for all out wondrous scenery, and quirky, charming
                appeal, few can compare to driving the Irish countryside to picnic in Shamrock Meadows</p>
            </div>
          </div>
        </div>

        <div className="cols-2" ref={setRef}>
          <div className="item photoHolder">
            <div className="photo riverdetroit"></div>
          </div>
          <div className="item">
            <div>
              <h1>River de Detroit</h1>
              <p>Fashion ye' Tivas, grab a kayak, and explore the mystery of River de Detroit. Once afloat you'll
                soon
                forget the troubles of this world.</p>
            </div>
          </div>
        </div>

        <div className="fullScreen"></div>
      </div>

    </div>
  );
}


export default Responsive;