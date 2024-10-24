import s from './CarParallax.module.scss';
import {Link} from "react-router-dom";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useEffect, useRef} from "react";


gsap.registerPlugin(ScrollTrigger);
const CarParallax = () => {

  const titleRefs = useRef([])
  const subtitleRefs = useRef([])
  const backgroundRefs = useRef([])

  const addToRefs = (el, refsArray) => {

    if (el && !refsArray.current.includes(el)) {
      refsArray.current.push(el)
    }
  }


  useEffect(() => {
    const timelines = []; // Массив для хранения всех таймлайнов

    titleRefs.current.forEach((titleRef, index) => {

      const timeline = gsap.timeline()
        .from([titleRef, subtitleRefs.current[index]], {
          y: 100, opacity: 0, stagger: .1
        })
        .from(backgroundRefs.current[index], {
          backgroundPosition: '50% 30% ',
          filter: "brightness(.2)",
          duration: 1
          
        }, 0)

      ScrollTrigger.create({
        trigger: titleRef,
        toggleActions: "play none none reverse",
        animation: timeline,
        start: "top 90%"
      })

      timelines.push(timeline); // Сохраняем таймлайн в массив
    })


    // Возвращаем функцию для очистки при размонтировании
    return () => {
      timelines.forEach(tl => tl.kill()); // Уничтожаем все таймлайны
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Убиваем все ScrollTrigger
    };

  }, []);

  return (
    <div className={s.body}>
    <div className="main">
      <Link className={s.homeLink} to="/">Home</Link>

      <div className={s.hero}>Scroll Down</div>

      <div className={s.banner}>
        <div className={`${s.background} ${s.miata}`} ref={(el) => addToRefs(el, backgroundRefs)}></div>
        <div className={s.foreground}>
          <h1 className={s.title} ref={(el) => addToRefs(el, titleRefs)}>1995 Mazda Miata</h1>
          <h2 className={s.subtitle} ref={(el) => addToRefs(el, subtitleRefs)}>10k miles</h2>
        </div>
      </div>
      <div className={s.content}>
        <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue. Nam quam
          velit, efficitur vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis
          parturient montes</p>
        <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit. Phasellus
          sed neque tincidunt, ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non convallis eros pulvinar
          in. Proin sit amet ultrices est. Aenean non quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit,
          sollicitudin ac ante id, finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper
          lorem. Vestibulum a hendrerit libero.</p>
      </div>

      <div className={s.banner}>
        <div className={`${s.background} ${s.cayman}`} ref={(el) => addToRefs(el, backgroundRefs)}></div>
        <div className={s.foreground}>
          <h1 className={s.title} ref={(el) => addToRefs(el, titleRefs)}>2006 Porsche Cayman S</h1>
          <h2 className={s.subtitle} ref={(el) => addToRefs(el, subtitleRefs)}>33k miles</h2>
        </div>
      </div>
      <div className={s.content}>
        <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue. Nam quam
          velit, efficitur vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis
          parturient montes</p>
        <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit. Phasellus
          sed neque tincidunt, ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non convallis eros pulvinar
          in. Proin sit amet ultrices est. Aenean non quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit,
          sollicitudin ac ante id, finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper
          lorem. Vestibulum a hendrerit libero.</p>
      </div>

      <div className={s.banner}>
        <div className={`${s.background} ${s.gti}`} ref={(el) => addToRefs(el, backgroundRefs)}></div>
        <div className={s.foreground}>
          <h1 className={s.title} ref={(el) => addToRefs(el, titleRefs)}>1983 VW Rabbit GTI</h1>
          <h2 className={s.subtitle} ref={(el) => addToRefs(el, subtitleRefs)}>253k miles</h2>
        </div>
      </div>
      <div className={s.content}>
        <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue. Nam quam
          velit, efficitur vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis
          parturient montes</p>
        <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit. Phasellus
          sed neque tincidunt, ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non convallis eros pulvinar
          in. Proin sit amet ultrices est. Aenean non quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit,
          sollicitudin ac ante id, finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper
          lorem. Vestibulum a hendrerit libero.</p>
      </div>

      <div className={s.banner}>
        <div className={`${s.background} ${s.supra}`} ref={(el) => addToRefs(el, backgroundRefs)}></div>
        <div className={s.foreground}>
          <h1 className={s.title} ref={(el) => addToRefs(el, titleRefs)}>1994 Toyota Supra</h1>
          <h2 className={s.subtitle} ref={(el) => addToRefs(el, subtitleRefs)}>86k miles</h2>
        </div>
      </div>
      <div className={s.content}>
        <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue. Nam quam
          velit, efficitur vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis
          parturient montes</p>
        <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit. Phasellus
          sed neque tincidunt, ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non convallis eros pulvinar
          in. Proin sit amet ultrices est. Aenean non quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit,
          sollicitudin ac ante id, finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper
          lorem. Vestibulum a hendrerit libero.</p>
      </div>
    </div>
    </div>
  );
};

export default CarParallax;