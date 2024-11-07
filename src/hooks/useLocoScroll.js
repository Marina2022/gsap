import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useLocoScroll = (start, scrollEl) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!start || !scrollEl) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      // multiplier: 1.5,
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      scrollLeft(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.x;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed'
    });

    const lsUpdate = () => locoScroll.update();
    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener('refresh', lsUpdate);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      locoScroll.destroy();
    };
  }, [start, scrollEl]);  
};

export default useLocoScroll;
