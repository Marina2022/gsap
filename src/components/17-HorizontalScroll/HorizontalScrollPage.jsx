import {LocomotiveScrollProvider, useLocomotiveScroll} from "react-locomotive-scroll";
import HorizontalScroll from "@/components/17-HorizontalScroll/HorizontalScroll.jsx";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useEffect, useRef} from "react";
// eslint-disable-next-line react/prop-types
const HorizontalScrollPage = ({children}) => {

  gsap.registerPlugin(ScrollTrigger);

  // const ScrollTriggerProxy = () => {
  //   const { scroll } = useLocomotiveScroll();
  //
  //   useEffect(() => {
  //     if (scroll) {
  //       const element = scroll?.el;
  //
  //       scroll.on("scroll", ScrollTrigger.update);
  //       ScrollTrigger.scrollerProxy(element, {
  //         scrollTop(value) {
  //           return arguments.length
  //             ? scroll.scrollTo(value, 0, 0)
  //             : scroll.scroll.instance.scroll.y;
  //         },
  //         getBoundingClientRect() {
  //           return {
  //             top: 0,
  //             left: 0,
  //             width: window.innerWidth,
  //             height: window.innerHeight,
  //           };
  //         },
  //         pinType: element.style.transform ? "transform" : "fixed",
  //       });
  //     }
  //
  //     return () => {
  //       ScrollTrigger.addEventListener("refresh", () => scroll?.update());
  //       ScrollTrigger.refresh();
  //     };
  //   }, [scroll]);
  //
  //   return null;
  // };

  const containerRef = useRef(null)

  

  return (
    <LocomotiveScrollProvider
      ref={containerRef}
      options={{
        smooth: true,
        // multiplier: 1,
        // class: "is-reveal",
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

      {/*<ScrollTriggerProxy />*/}
      <main data-scroll-container ref={containerRef}>
        {children}
        <HorizontalScroll/>
      </main>
    </LocomotiveScrollProvider>
  );
};

export default HorizontalScrollPage;