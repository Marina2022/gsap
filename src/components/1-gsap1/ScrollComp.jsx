import {useLayoutEffect, useRef} from 'react';
import s from './Gsap1.module.scss';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Link} from 'react-router-dom'; // Импортируем useLocation
import car from '@/assets/car.jpg';
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollComp = () => {
  const carRef = useRef();
  const imgWrapperRef = useRef();
  const experimentalWrapperRef = useRef();


  //Код - рабочий, но таймаут может оказаться недостаточным
  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      const tl = gsap.timeline({        
        scrollTrigger: {
          trigger: experimentalWrapperRef.current,
          markers: true,
          start: '60% 50%',
          end: 'bottom 50%',
          scrub: 1,
          pin: true,
          // pinSpacing: false
        },
      });

      tl.to(carRef.current, {x: 600});
      // tl.to(carRef.current, {y: 500});
      // tl.to(carRef.current, {rotation: 360});

      ScrollTrigger.refresh();
    }, 300);  // Задержка перед инициализацией ScrollTrigger


    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);


  // // ------ Рабочий способ №2 (useLayoutEffect + useEffect) - но опять с setTimeout
  //
  // useLayoutEffect(() => {
  //   const timeoutId = requestAnimationFrame(() => {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: carRef.current,
  //         markers: true,
  //         start: "top 75%",
  //         end: "bottom 65%",
  //         scrub: 1,
  //         pin: true,
  //       },
  //     }).to(carRef.current, {x: 600});
  //
  //     ScrollTrigger.refresh(); // принудительное обновление ScrollTrigger
  //   });
  //
  //   return () => {
  //     ScrollTrigger.getAll().forEach(st => st.kill());
  //     cancelAnimationFrame(timeoutId); // чистим таймаут при размонтировании
  //   };
  // }, []);
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     ScrollTrigger.refresh(); // обновляем ScrollTrigger после того, как компоненты точно отрендерены
  //   }, 100); // можно немного увеличить задержку, если 100 мс недостаточно
  //
  //   return () => {
  //     ScrollTrigger.getAll().forEach(st => st.kill());
  //   };
  // }, []);


  // вариант 3 - тоже setTimeout млин
  // const location = useLocation();  // Используем useLocation для отслеживания изменений маршрута
  //
  // useLayoutEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: carRef.current,
  //         markers: true,
  //         start: "top 75%",
  //         end: "bottom 65%",
  //         scrub: 1,
  //         pin: true,
  //       },
  //     }).to(carRef.current, { x: 600 });
  //
  //     ScrollTrigger.refresh(); // Обновляем ScrollTrigger
  //   }, 100); // или использовать requestAnimationFrame
  //
  //   return () => {
  //     ScrollTrigger.getAll().forEach(st => st.kill());
  //     clearTimeout(timeoutId);
  //   };
  // }, [location]); // Перезапуск эффекта при изменении локации

  const animRef = useRef()

  useGSAP(() => {
    gsap.to(animRef.current, {
      y: 200,
      rotation: 360
    })
  })


  return (
    <div className="container">

      <Link className={s.homeLink} to="/">Home</Link>

      <div className={s.anim} ref={animRef}>ooooo</div>

      <div style={{width: 260, color: 'green'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium alias animi, aperiam
        asperiores assumenda autem cumque deserunt excepturi explicabo illo incidunt laborum laudantium libero nihil,
        nobis placeat porro possimus provident qui quo quod, repellendus sit ullam. Adipisci aliquid, asperiores aut
        consectetur consequatur corporis debitis, exercitationem fugiat inventore iure molestiae odit optio quos
        reiciendis rem repellendus similique. Aliquam autem cum, excepturi explicabo inventore iste iusto laborum, odit
        porro rem soluta, tempore. Ab at blanditiis error eveniet expedita explicabo fugiat id impedit ipsa iure iusto
        laborum magnam maxime minus modi, nesciunt nisi nobis nulla, placeat porro possimus qui quo quos rem repudiandae
        similique vitae, voluptas. Consequatur cupiditate distinctio illo labore reiciendis. Asperiores assumenda
        blanditiis consequatur cum debitis dolor dolorum error esse est et eum exercitationem hic illo in incidunt
        itaque laboriosam maxime modi nam nobis non, nostrum nulla porro, quia quo ratione saepe sequi sint sunt
        voluptates. At culpa et in ipsum labore neque, praesentium recusandae repellat tenetur unde. Accusantium aliquam
        cupiditate facere illo nam perferendis porro quod sed voluptatem voluptatibus! Dolore ea fuga labore sunt velit.
        At atque debitis ex quo vero! Impedit magnam molestiae molestias nesciunt provident tempore totam voluptates.
        Aspernatur laboriosam libero minus molestias quae quos saepe.
      </div>

      <div className={s.experimentalWrapper} ref={experimentalWrapperRef}>

        <div className={s.beforeImg}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate debitis
          dignissimos dolorem dolores
          ducimus neque officiis, qui, quia quidem, sed sequi sint suscipit velit vitae voluptatem voluptates. Aliquid
          dignissimos esse magnam perspiciatis, similique unde veniam. Consequatur consequuntur cupiditate, distinctio
          et
          facilis fugiat ipsam labore laboriosam, modi molestiae necessitatibus numquam odio porro praesentium quaerat,
          quam ratione! Asperiores aspernatur deserunt distinctio, eos ex expedita explicabo fugiat harum id labore
          molestias nostrum optio perspiciatis praesentium quidem quisquam reiciendis similique suscipit ut veritatis
          voluptas, voluptate, voluptatem. Ad animi, atque consequatur dignissimos error esse et fuga fugiat, inventore
          ipsam labore modi optio provident quam quis, quo recusandae. Ab accusantium aspernatur, commodi culpa earum
          explicabo iste itaque magni maxime nemo, non placeat quaerat quos reprehenderit temporibus tenetur veniam
          voluptates. Enim expedita ipsam laborum perspiciatis saepe. Accusamus amet animi asperiores assumenda beatae
          corporis dignissimos distinctio dolores ducimus eveniet excepturi explicabo, facere iste laudantium, nemo
          obcaecati optio perspiciatis porro possimus quibusdam quisquam reiciendis sit suscipit tenetur velit vitae
          voluptates. Accusantium at aut cupiditate deleniti dolor enim eum fugit harum incidunt ipsum iure iusto, neque
          nulla officia quas quasi quibusdam recusandae reiciendis totam voluptatem. Dicta, ducimus error est fuga iusto
          labore natus nobis officiis omnis provident quibusdam repudiandae!
        </div>
        <div className={s.imgWrapper} ref={imgWrapperRef}>
          <img src={car} className={s.img} ref={carRef}/>
        </div>
        <div className={s.beforeImg}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam
          assumenda at autem commodi
          deleniti dicta dolor dolores eaque eius eos eum exercitationem expedita fugit itaque iure, maxime mollitia nam
          natus odio optio porro quae quis repellat sapiente sit suscipit. Adipisci deserunt dicta iste labore officiis
          quibusdam tempora veniam? A accusantium, beatae commodi cupiditate debitis dolorem dolores earum ex in iure
          magnam nemo officia praesentium repellat voluptates. Corporis, delectus exercitationem explicabo hic non
          perferendis veniam voluptates! Ab adipisci dicta dolorem dolores ea enim eos est, et explicabo fugiat hic
          iure,
          magnam minima nemo nobis odio odit officiis praesentium quas qui, quos repellat saepe sed similique sint sit
          suscipit tempora temporibus velit voluptates. Accusantium cupiditate deserunt ducimus eveniet expedita facere
          laboriosam molestiae, nisi odit possimus quidem ratione sit tempora, tenetur veniam! Aliquid distinctio enim
          fugiat harum impedit ipsa omnis perferendis repellat rerum sunt. Alias, aliquid, at beatae corporis deserunt
          enim eum magni modi mollitia necessitatibus, obcaecati possimus quae voluptate. Accusamus dicta, doloremque
          eius
          esse est id illo nam omnis possimus quisquam sed soluta vero! Atque autem commodi, deleniti earum explicabo
          illo
          libero maiores nostrum possimus, quasi sequi tempore velit vero. Accusantium aspernatur autem culpa doloremque
          eaque enim perspiciatis, quos temporibus unde!
        </div>
      </div>


      {/* Остальной контент */
      }
    </div>
  )
    ;
};

export default ScrollComp;
