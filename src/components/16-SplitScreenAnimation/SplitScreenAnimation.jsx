import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import s from "@/components/15-Responsive/Responsive.module.scss";
import {Link} from "react-router-dom";

const SplitScreenAnimation = () => {

  gsap.registerPlugin(ScrollTrigger);

  const photosRef = useRef()
  const galleryRef = useRef()

  const photoRefs = useRef([])
  const headlineRefs = useRef([])

  const setRef = (el) => {
    photoRefs.current && !photoRefs.current.includes(el) && photoRefs.current.push(el)
  }

  const setRefText = (el) => {
    headlineRefs.current && !headlineRefs.current.includes(el) && headlineRefs.current.push(el)
  }

  useEffect(() => {

    let mm = gsap.matchMedia();

    mm.add(
      
      "(min-width:800px)", ()=>{

        gsap.set(photoRefs.current, {yPercent: 100})

        ScrollTrigger.create({
          trigger: galleryRef.current,
          start: "top 0",
          end: "bottom 100%",
          scrub: .3,
          pin: photosRef.current,
        })

        headlineRefs.current.forEach((headline, index) => {          
          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            scrub: .3,
            animation: gsap.to(photoRefs.current[index], {yPercent: 0})
          })
        })        
      }
      
    )

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };

  }, []);


  return (
    <div className="split-screen-animation container-1">
      <Link className={s.homeLink} to="/">Home</Link>
      <div className="spacer"></div>
      <div className="gallery" ref={galleryRef}>
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection" >
              <h1>Red</h1>
              <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and
                attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>
            </div>
            <div className="desktopContentSection">
              <h1 ref={setRefText}>Green</h1>
              <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and
                relaxing color that can evoke feelings of balance, stability, and freshness.</p>
            </div>
            <div className="desktopContentSection" >
              <h1 ref={setRefText}>Pink</h1>
              <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and
                more delicate shade of red that can evoke feelings of warmth, love, and nurturing.</p>
              <p>Pink has also been associated with certain social causes, such as breast cancer awareness.In fashion,
                pink is often used in women's clothing to convey a sense of softness, innocence, and playfulness.
                Lighter shades of pink are often used in children's clothing and toys to appeal to a younger
                demographic. </p>

              <p>The pink ribbon has become a symbol for the cause, and the color pink is often used in fundraising
                campaigns and events. Pink is also used in men's clothing, although it is less common, as it can be seen
                as a more unconventional choice.</p>

              <p>Pink is also used to raise awareness for other causes such as domestic violence and bullying.</p>

              <p>Overall, the usage of the color pink can vary widely depending on the context and the intended
                message. </p>

            </div>
            <div className="desktopContentSection" >
              <h1 ref={setRefText}>Blue</h1>
              <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and
                serene color that can evoke feelings of stability, security, and professionalism.</p>

              <p>Blue is a cool and calming color that is often associated with the sky and the sea. It is a primary
                color and one of the most popular colors in design and fashion. Blue is a versatile color that can range
                from bright and bold to soft and subdued, and it can be used to convey a range of emotions and moods,
                from serenity and tranquility to power and confidence.</p>

              <p>In design, blue is often used to create a sense of trust and reliability, making it a popular choice
                for logos and branding. It is also a popular choice for backgrounds and text, as it is easy on the eyes
                and provides a good contrast to other colors. Blue can be used in both modern and traditional designs,
                and it can be paired with a wide range of other colors to create different effects.</p>

              <p>In fashion, blue is a classic and timeless color that is often used in denim, suits, and formal wear.
                It is a versatile color that can be dressed up or down, and it can be paired with a range of other
                colors and patterns to create different looks. Blue is also a popular choice for accessories, such as
                scarves, shoes, and handbags. Lighter shades of blue, such as baby blue and powder blue, are often used
                for baby clothes and bedding, while darker shades of blue, such as navy and royal blue, are popular for
                men's suits and business wear.</p>


              <p>In fashion, blue is a classic and timeless color that is often used in denim, suits, and formal wear.
                It is a versatile color that can be dressed up or down, and it can be paired with a range of other
                colors and patterns to create different looks. Blue is also a popular choice for accessories, such as
                scarves, shoes, and handbags. Lighter shades of blue, such as baby blue and powder blue, are often used
                for baby clothes and bedding, while darker shades of blue, such as navy and royal blue, are popular for
                men's suits and business wear.</p>


              <p>Overall, blue is a versatile and popular color that can be used in a variety of design and fashion
                applications. Its calming and trustworthy qualities make it a popular choice for branding and logos,
                while its versatility and timeless appeal make it a classic choice for fashion.</p>
            </div>
          </div>
        </div>

        <div className="right" ref={photosRef}>


          <div className="desktopPhotos">
            <div className="desktopPhoto red"></div>
            <div className="desktopPhoto green" ref={setRef}></div>
            <div className="desktopPhoto pink" ref={setRef}></div>
            <div className="desktopPhoto blue" ref={setRef}></div>
          </div>

        </div>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>


      {/*        <p>Pink has also been associated with certain social causes, such as breast cancer awareness.In fashion, pink is often used in women's clothing to convey a sense of softness, innocence, and playfulness. Lighter shades of pink are often used in children's clothing and toys to appeal to a younger demographic. </p>*/}

      {/*<p>The pink ribbon has become a symbol for the cause, and the color pink is often used in fundraising campaigns and events. Pink is also used in men's clothing, although it is less common, as it can be seen as a more unconventional choice.</p> */}

      {/*<p>Pink is also used to raise awareness for other causes such as domestic violence and bullying.</p>*/}

      {/*<p>Overall, the usage of the color pink can vary widely depending on the context and the intended message. </p>*/}
      {/*        */}


      {/*<p>Blue is a cool and calming color that is often associated with the sky and the sea. It is a primary color and one of the most popular colors in design and fashion. Blue is a versatile color that can range from bright and bold to soft and subdued, and it can be used to convey a range of emotions and moods, from serenity and tranquility to power and confidence.</p>*/}

      {/*<p>In design, blue is often used to create a sense of trust and reliability, making it a popular choice for logos and branding. It is also a popular choice for backgrounds and text, as it is easy on the eyes and provides a good contrast to other colors. Blue can be used in both modern and traditional designs, and it can be paired with a wide range of other colors to create different effects.</p>*/}

      {/*<p>In fashion, blue is a classic and timeless color that is often used in denim, suits, and formal wear. It is a versatile color that can be dressed up or down, and it can be paired with a range of other colors and patterns to create different looks. Blue is also a popular choice for accessories, such as scarves, shoes, and handbags. Lighter shades of blue, such as baby blue and powder blue, are often used for baby clothes and bedding, while darker shades of blue, such as navy and royal blue, are popular for men's suits and business wear.</p>*/}

      {/*<p>Overall, blue is a versatile and popular color that can be used in a variety of design and fashion applications. Its calming and trustworthy qualities make it a popular choice for branding and logos, while its versatility and timeless appeal make it a classic choice for fashion.</p>*/}


    </div>
  )
    ;
};

export default SplitScreenAnimation;
