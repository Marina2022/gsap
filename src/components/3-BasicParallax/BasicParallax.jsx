import s from './BasicParallax.module.scss'
import {useGSAP} from "@gsap/react";
import {gsap} from 'gsap';
import {useRef} from "react";
import {Link} from "react-router-dom";

const BasicParallax = () => {


  const parallaxContainerRef = useRef()
  const backgroundDiv = useRef()
  const textRef = useRef()

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: parallaxContainerRef.current,
        start: "top 20%",
        end: "+=400",
        scrub: true,
        pin: true,
        // markers: true
      }
    })

      .to(backgroundDiv.current, {y: -200})
      .to(textRef.current, {y: -300}, 0)

  })

  return (
    <div className="container">
      <Link className={s.homeLink} to="/">Home</Link>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur quibusdam
        velit. Alias, at corporis dolor, ea expedita illum incidunt iure nostrum reprehenderit, saepe soluta tempore
        temporibus. Accusamus architecto at aut, autem corporis dicta ea earum eius error explicabo fuga id inventore
        labore maxime modi molestias necessitatibus obcaecati omnis provident rem similique soluta suscipit
        voluptatibus! Nobis, quas, quisquam. Adipisci corporis iusto modi quasi? A aliquam, autem consequuntur cum
        dolorum ea maiores maxime, natus nihil nostrum quas reprehenderit tempore temporibus ullam voluptate! Atque eius
        enim magnam maxime repudiandae veniam voluptas voluptates. Adipisci, cumque eaque error et officia saepe
        tenetur? Animi eaque laboriosam maxime omnis possimus provident qui sequi? Repellat rerum sint voluptatibus.
        Dicta dolores dolorum ex fuga iusto, nihil nulla rem ut vero voluptas. Alias aperiam, aut delectus dicta dolor
        dolore dolores eius et ex harum incidunt ipsam laudantium, magni maxime minus molestiae nesciunt nobis numquam
        optio pariatur placeat praesentium provident quas quis recusandae sint, suscipit voluptate. Asperiores autem
        commodi consequatur consequuntur cum debitis delectus deserunt dicta dolore dolorum eaque eius illo in incidunt
        labore laborum modi molestiae mollitia nam nesciunt nihil numquam obcaecati odio odit omnis optio pariatur
        possimus, praesentium quo reiciendis repellat repudiandae sapiente similique sint soluta veritatis?
      </div>
      <div className={s.div}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur quibusdam
        velit. Alias, at corporis dolor, ea expedita illum incidunt iure nostrum reprehenderit, saepe soluta tempore
        temporibus. Accusamus architecto at aut, autem corporis dicta ea earum eius error explicabo fuga id inventore
        labore maxime modi molestias necessitatibus obcaecati omnis provident rem similique soluta suscipit
        voluptatibus! Nobis, quas, quisquam. Adipisci corporis iusto modi quasi? A aliquam, autem consequuntur cum
        dolorum ea maiores maxime, natus nihil nostrum quas reprehenderit tempore temporibus ullam voluptate! Atque eius
        enim magnam maxime repudiandae veniam voluptas voluptates. Adipisci, cumque eaque error et officia saepe
        tenetur? Animi eaque laboriosam maxime omnis possimus provident qui sequi? Repellat rerum sint voluptatibus.
        Dicta dolores dolorum ex fuga iusto, nihil nulla rem ut vero voluptas. Alias aperiam, aut delectus dicta dolor
        dolore dolores eius et ex harum incidunt ipsam laudantium, magni maxime minus molestiae nesciunt nobis numquam
        optio pariatur placeat praesentium provident quas quis recusandae sint, suscipit voluptate. Asperiores autem
        commodi consequatur consequuntur cum debitis delectus deserunt dicta dolore dolorum eaque eius illo in incidunt
        labore laborum modi molestiae mollitia nam nesciunt nihil numquam obcaecati odio odit omnis optio pariatur
        possimus, praesentium quo reiciendis repellat repudiandae sapiente similique sint soluta veritatis?
      </div>
      


      <div className={s.parallaxContainer} ref={parallaxContainerRef}>

        <div className={s.backgroundDiv} ref={backgroundDiv}></div>
        <div ref={textRef} className={s.text}>Привет, дружищи!</div>

      </div>

      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur quibusdam
        velit. Alias, at corporis dolor, ea expedita illum incidunt iure nostrum reprehenderit, saepe soluta tempore
        temporibus. Accusamus architecto at aut, autem corporis dicta ea earum eius error explicabo fuga id inventore
        labore maxime modi molestias necessitatibus obcaecati omnis provident rem similique soluta suscipit
        voluptatibus! Nobis, quas, quisquam. Adipisci corporis iusto modi quasi? A aliquam, autem consequuntur cum
        dolorum ea maiores maxime, natus nihil nostrum quas reprehenderit tempore temporibus ullam voluptate! Atque eius
        enim magnam maxime repudiandae veniam voluptas voluptates. Adipisci, cumque eaque error et officia saepe
        tenetur? Animi eaque laboriosam maxime omnis possimus provident qui sequi? Repellat rerum sint voluptatibus.
        Dicta dolores dolorum ex fuga iusto, nihil nulla rem ut vero voluptas. Alias aperiam, aut delectus dicta dolor
        dolore dolores eius et ex harum incidunt ipsam laudantium, magni maxime minus molestiae nesciunt nobis numquam
        optio pariatur placeat praesentium provident quas quis recusandae sint, suscipit voluptate. Asperiores autem
        commodi consequatur consequuntur cum debitis delectus deserunt dicta dolore dolorum eaque eius illo in incidunt
        labore laborum modi molestiae mollitia nam nesciunt nihil numquam obcaecati odio odit omnis optio pariatur
        possimus, praesentium quo reiciendis repellat repudiandae sapiente similique sint soluta veritatis?
      </div>
    </div>
  );
};

export default BasicParallax;