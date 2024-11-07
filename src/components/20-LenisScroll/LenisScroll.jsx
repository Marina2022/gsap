import s from '../17-HorizontalScroll/HorizontalScroll.module.scss'
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import useMobileScreen from "@/hooks/useMobileScreen.js";

gsap.registerPlugin(ScrollTrigger);


const LenisScroll = () => {
  const listRef = useRef();
  const brazilRef = useRef();
  const brazilRefInner = useRef();
  const isMobile = useMobileScreen();
  const listWrapperRef = useRef()
  const brazilRefBlue = useRef()
  const pathRef = useRef()


  const wrapperRef = useRef();


  useEffect(() => {


    const tween = gsap.to(listRef.current, {
      x: () => -1 * (listRef.current.offsetWidth - wrapperRef.current.offsetWidth),
      ease: "none",
    });

    const tween1 = gsap.to(brazilRefInner.current, {
      scale: .5, opacity: .5, ease: "none"
    })

    const length = pathRef.current.getTotalLength();
    
    gsap.set(pathRef.current, {strokeDashoffset: length, strokeDasharray: length} )
    
    const tl = gsap.timeline({paused: true})      
      .to(brazilRefBlue.current, {
        scale: 2, ease: "back"
      })
      .to(pathRef.current, {strokeDashoffset: 0, duration: .5, ease: "none"}, 0)
    

    ScrollTrigger.create({
      trigger: listWrapperRef.current,
      pin: true,
      start: "top 50%",
      end: () => "+=" + (listRef.current.offsetWidth - wrapperRef.current.offsetWidth + 60),
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    ScrollTrigger.create({
      trigger: brazilRef.current,
      start: "left 50%",
      end: "right 50%",
      scrub: 1,
      animation: tween1,

      // будем мониторить именно этот твин, т.к. именно в нем указан наш контейнер как анимируемый элемент
      containerAnimation: tween,

      onEnter: () => tl.play(),
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });


    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isMobile]);

  return (
    <div className="container" ref={wrapperRef}>
      <div data-scroll-section>
        <Link className={s.homeLink} to="/">Home</Link>
        <div className={s.spacer}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consequuntur, ducimus maxime natus quasi repudiandae! Aut delectus dolor ex labore nihil qui quisquam quod recusandae suscipit veniam? Culpa enim labore quas recusandae rerum! Atque consequuntur dolor ea earum enim esse et ex fugiat hic iste labore natus neque nobis optio, pariatur quasi quisquam soluta temporibus veritatis vitae. Animi facere laudantium molestias obcaecati perspiciatis quisquam, recusandae? Animi modi possimus soluta? A accusantium animi consectetur debitis, dignissimos dolorem eius iure labore maiores maxime minima molestiae molestias non quae, quaerat quidem quisquam ratione recusandae similique vel. Ad, aliquid, blanditiis consectetur corporis culpa dicta dolor doloremque earum esse facere hic illo inventore ipsum mollitia nobis non nulla omnis quaerat qui recusandae sequi sunt suscipit unde voluptas voluptatem. Corporis esse incidunt magni mollitia necessitatibus numquam placeat sequi vero. Ad aut cum cumque dignissimos eius explicabo facilis illum ipsum, itaque iure minima minus necessitatibus neque quam qui quibusdam quo, recusandae soluta tempora tenetur. Commodi deserunt, doloribus est, eum ex expedita incidunt ipsam modi nemo nihil, nulla officia quae quidem repudiandae soluta tempore temporibus vero voluptates? Assumenda cumque, doloremque in itaque molestias repellendus sapiente vitae voluptatibus! A accusamus, accusantium at blanditiis eveniet fugit id in inventore ipsum iure nisi odit praesentium quaerat quas quisquam reiciendis rem saepe sint tempore voluptas! A amet asperiores at, blanditiis corporis eaque eos et facilis fugit hic iste laboriosam libero magnam porro possimus quidem repellendus reprehenderit repudiandae sequi similique, sint temporibus vel voluptate voluptates voluptatibus. Cupiditate modi nostrum, pariatur quae quibusdam quidem quisquam saepe tempore temporibus tenetur, totam unde? Ad aliquid dolor earum id illum iure laboriosam minus necessitatibus, nostrum officiis quas quibusdam quis ratione, sed temporibus ullam voluptatem. A ad alias at consequuntur cumque, cupiditate dolore eos incidunt iure laborum laudantium nihil nobis nulla perspiciatis repudiandae sed unde vel veniam. Cum debitis dolorum modi neque obcaecati quae quasi quod repellendus temporibus voluptates. Consectetur ex harum placeat quo repellendus sit! Adipisci asperiores assumenda aut dolorum excepturi exercitationem, expedita minima nesciunt odio optio porro quis repellat totam veniam vitae voluptates voluptatum? Aliquam at atque delectus dolorem doloremque dolores eos esse ex, excepturi id ipsa laborum libero nam nobis odit optio perferendis placeat provident quaerat quas ratione, repellat repudiandae, sapiente vero vitae. Alias aliquam aperiam corporis cumque debitis, iste iusto molestiae molestias reprehenderit velit. A ab accusamus accusantium aliquid aspernatur assumenda atque corporis culpa delectus deserunt dignissimos distinctio doloremque dolorum est exercitationem illo inventore ipsa ipsum labore laboriosam minima minus molestias mollitia necessitatibus nemo nihil, nisi numquam odio officia, provident quam quia quidem quisquam sed sint tenetur veritatis. At, voluptas, voluptatibus. Ab assumenda dolore id magni minima, minus modi natus necessitatibus nemo nesciunt possimus praesentium quam qui quod similique tempora, veniam. Adipisci at atque blanditiis dicta dolor ea enim incidunt laudantium magnam odio optio praesentium quas, rerum tenetur voluptas! Aliquam delectus hic provident recusandae sint, totam ullam unde vel. Ad adipisci asperiores aut cupiditate debitis delectus deserunt, dicta doloremque doloribus eaque eius fugit hic inventore iste labore minima necessitatibus nobis omnis pariatur, qui quis ratione repudiandae saepe soluta tempora, totam vel veritatis. Ab aperiam architecto atque aut, consequatur culpa cumque delectus dicta dolor dolore dolorem dolores doloribus ea eaque esse et fugiat illum impedit itaque labore laborum minima modi molestias nam natus nihil, perspiciatis possimus rem repellendus sapiente sequi, sunt suscipit ullam unde velit veritatis voluptatem! Aperiam in laboriosam maiores nam officiis repudiandae sapiente veritatis voluptatum. Adipisci animi aut corporis dicta dolor, dolorem eos esse exercitationem fuga id incidunt ipsa ipsam iste, labore magnam, modi optio pariatur placeat quaerat quisquam ratione sit sunt vitae voluptates voluptatibus? Consectetur consequatur, ea eos impedit laudantium, magnam molestias obcaecati optio porro quaerat repellendus soluta tempore unde veniam voluptates. Blanditiis eaque et facere ipsa ipsum nam nemo nulla officiis, quia rem saepe, velit. Aliquam autem impedit in saepe. Aliquam aliquid amet at error molestias placeat suscipit tenetur velit voluptatem! Alias assumenda est excepturi nobis quidem rerum similique soluta tempora. Amet assumenda at autem commodi deleniti ea est, eveniet hic laudantium magnam molestias nam necessitatibus nesciunt nisi obcaecati odio optio quam quas quisquam ratione saepe sint ullam unde velit vitae. A amet aspernatur assumenda atque commodi culpa delectus distinctio dolorem ducimus est et eum exercitationem expedita explicabo impedit incidunt, maxime necessitatibus neque nihil odio optio quaerat qui quidem quis quod recusandae rem repudiandae tempore temporibus ut vel veniam voluptate voluptatum. Asperiores corporis dolore explicabo facere illo mollitia nemo tenetur? Animi architecto beatae enim esse exercitationem facilis harum illo iusto nesciunt numquam officia repellat, repellendus repudiandae soluta ut veritatis voluptatum! Architecto aspernatur, cum deserunt doloribus dolorum excepturi expedita iure magni minus modi pariatur possimus quos reiciendis rem soluta tenetur velit! Animi autem cumque eaque fugit iure quidem. Accusamus at blanditiis dolor eligendi esse facere fugiat iste libero maxime mollitia optio possimus quisquam, repudiandae saepe voluptatum. Animi consectetur consequuntur cupiditate expedita inventore, ipsum provident quasi? Consectetur culpa dolorum ea eaque eius fugit, ipsa, minus, nihil officia quae quasi repellat voluptas voluptatum. Ad aliquid, amet animi aperiam asperiores eum fuga fugiat id iste iusto nostrum rem sapiente sit veniam vero! Consequuntur fuga ipsum libero quisquam ut! Ab aliquid amet, aspernatur blanditiis consequuntur corporis, cum distinctio dolorem eaque facere facilis mollitia nam necessitatibus nisi, nostrum pariatur perferendis perspiciatis quae velit veritatis? At dolor eaque enim fugit officia pariatur ratione repellendus rerum vero voluptatem? A ad aspernatur assumenda, consequatur dolores eaque eius fugit, ipsam neque odit provident rem sequi sit totam vel! Doloremque et expedita iste quaerat, vel voluptatem? Ad consequatur cumque dolore esse excepturi fuga illo illum, ipsa labore magnam minima nemo nisi perferendis qui saepe similique sunt tempora temporibus tenetur totam veritatis voluptate voluptatum! Accusantium adipisci aspernatur aut beatae consequatur culpa dignissimos ea eligendi, explicabo harum ipsum maxime modi officia omnis perferendis perspiciatis porro praesentium quas quisquam quos similique soluta unde vel vitae voluptatum. A ab alias aliquam aut, commodi consectetur delectus doloribus ducimus eius est explicabo facilis fuga incidunt laborum minus necessitatibus nulla numquam, perspiciatis placeat possimus qui quibusdam sed sunt tenetur voluptate? Ab accusamus at distinctio nam nemo tenetur, ullam.
        </div>

        <svg ref={brazilRefBlue} id="austria" className={s.blue} viewBox="0 0 200 200"
             xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" style={{fill: "rgb(21, 21, 30)"}}></rect>
          <ellipse style={{fill: "rgb(33, 34, 56)"}} cx="100.0698" cy="101.2705" rx="78.2263" ry="78.2263"></ellipse>

          <g className="track">
            <path
              style={{
                fill: "none",
                strokeMiterlimit: 10,
                stroke: "rgb(55, 77, 94)",
                strokeWidth: 12,
                transformBox: "fill-box",
                transformOrigin: "50% 50%"
              }}
              d="M 52.2486 43.9691 C 52.2486 43.9691 76.1918 39.0311 93.974 39.8412 C 111.7562 40.6497 129.8433 40.3328 139.5428 36.6948 C 146.3193 34.1543 158.1019 31.3482 164.7815 29.9284 C 166.8043 29.4991 168.7885 31.5837 167.9951 33.4928 L 160.963 50.4349 C 160.963 50.4349 120.9522 117.9275 116.1033 119.1385 C 111.2526 120.3511 99.1295 104.9942 106.4037 92.4651 C 113.678 79.9361 131.8644 61.7496 121.7606 55.2838 C 111.6569 48.818 84.5793 52.4543 84.5793 60.1328 C 84.5793 67.8112 95.0873 76.2981 89.8325 85.9977 C 84.5793 95.6972 64.776 146.2143 59.9254 147.427 C 55.0765 148.6396 33.6563 146.2143 33.2521 138.9401 C 32.8495 131.6675 44.7205 45.307 52.2486 43.9691 Z"

              transform="matrix(-0.75119943, -0.66007531, 0.66007531, -0.75119943, -0.00000565, 0.00000611)"></path>
            <path ref={pathRef} style={{fill: "none", strokeMiterlimit: 10, strokeWidth: 6, stroke: "rgb(225, 6, 0)"}}
                  d="M 43.2359 71.3904 C 43.2359 71.3904 49.6005 44.8146 52.3237 44.3306 L 52.3237 44.3306 C 52.3237 44.3306 76.2669 39.3943 94.0491 40.2027 C 111.8313 41.0111 129.6798 40.9039 139.6179 37.0563 C 146.3668 34.4434 158.177 31.7096 164.8566 30.2899 C 166.8794 29.8606 168.8635 31.9452 168.0701 33.8543 L 161.0381 50.7964 C 161.0381 50.7964 121.0273 118.289 116.1783 119.4999 C 111.3277 120.7126 99.2045 105.3557 106.4788 92.8266 C 113.753 80.2975 131.9395 62.1111 121.8357 55.6453 C 111.7319 49.1795 84.6544 52.8158 84.6544 60.4942 C 84.6544 68.1727 95.1624 76.6596 89.9076 86.3591 C 84.6544 96.0587 64.8511 146.5758 60.0005 147.7885 C 55.1516 149.0011 33.7314 146.5758 33.3272 139.3016 C 33.0702 134.6597 37.8134 97.7986 43.2359 71.3904"
                  transform="matrix(-0.751199483871, -0.660075306892, 0.660075306892, -0.751199483871, 117.63926753124, 222.660861748768)"></path>
            <line
              style={{
                fill: "none",
                strokeMiterlimit: 10,
                stroke: "rgb(60, 208, 127)",
                strokeWidth: 6,
                transformBox: "fill-box",
                transformOrigin: "50% 50%"
              }}
              x1="125.6266" y1="139.5415" x2="137.2453" y2="141.8609"
              transform="matrix(-0.75119943, -0.66007531, 0.66007531, -0.75119943, 0.00001391, 0.00000106)"></line>
          </g>
        </svg>
        <div className={s.wrapper} ref={listWrapperRef}>
          <ul className={s.innerPart} ref={listRef}>
            <li>
              <div>Japan</div>
            </li>
            <li>
              <div>China</div>
            </li>
            <li>
              <div>Mexico</div>
            </li>
            <li className={s.listItem} ref={brazilRef}>
              <div ref={brazilRefInner}>Brazil</div>
              {/*<div className={s.blue} ref={brazilRefBlue}>Brazil</div>*/}

            </li>
            <li>
              <div>France</div>
            </li>
            <li>
              <div>Germany</div>
            </li>
            <li>
              <div>Poland</div>
            </li>
          </ul>
        </div>
        <div className={s.spacer}></div>
      </div>
    </div>
  );
};

export default LenisScroll;
