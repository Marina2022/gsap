import { useRef, useEffect } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Comp from "@/components/19-Try-Normas/Comp.jsx";


gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      // scroll.on("scroll", ScrollTrigger.update);

      scroll.on('scroll', () => {
        ScrollTrigger.update()
        ScrollTrigger.refresh()
      })
      
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      // убрала, т.к. ошибка при размонтировании была -  при переходе на гл.страницу с это
      // ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      // ScrollTrigger.refresh();      
    };
  }, [scroll]);

  return null;
};

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          multiplier: 1,
          class: "is-reveal",
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <main data-scroll-container ref={containerRef}>

          {
            <Comp scroller={containerRef.current}/> 
          }
                 
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default MainLayout;