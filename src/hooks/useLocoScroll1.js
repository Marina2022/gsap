import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useLocoScroll1 = (start, scrollElRef) => {
  
  useEffect(() => {
    if (!start || !scrollElRef.current) return;


    const locoScroll = new LocomotiveScroll({
      el: scrollElRef.current,
      smooth: true,
    });

        
    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollElRef.current, {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollElRef.current.style.transform ? 'transform' : 'fixed',
    });

    const updateOnAnimationFrame = () => {
      ScrollTrigger.update();
      requestAnimationFrame(updateOnAnimationFrame);
    };

    requestAnimationFrame(updateOnAnimationFrame);

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener('refresh', locoScroll.update);
      locoScroll.destroy();
      ScrollTrigger.clearScrollMemory && ScrollTrigger.clearScrollMemory();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [start, scrollElRef]);
};

export default useLocoScroll1;
