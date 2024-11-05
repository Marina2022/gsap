import s from './HorizontalScroll.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import useMobileScreen from "@/hooks/useMobileScreen.js";


gsap.registerPlugin(ScrollTrigger);
const HorizontalScroll = () => {
  
  const wrapperRef = useRef()
  const listRef = useRef()
  const brazilRef = useRef()
  const brazilRefInner = useRef()


  const isMobile = useMobileScreen()
  
  useEffect(() => {
    
    const tween = gsap.to(listRef.current, {x: ()=> -1 * (listRef.current.offsetWidth - wrapperRef.current.offsetWidth+ 6), duration: 3, ease: "none"})
    
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      pin: true,
      start: "top 40%",
      end: ()=> "+=" + listRef.current.offsetWidth - wrapperRef.current.offsetWidth ,
      // markers: 1,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true           
    })
    
    ScrollTrigger.create({
      refreshPriority: 1,
      trigger: brazilRef.current,
      start: "left center ",
      scrub: 1,
      animation:  gsap.to(brazilRefInner.current, {
        opacity: .5, scale: .5
      }),
      markers: true,
      containerAnimation: tween
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
    
  }, [isMobile]);
  
  return (
    <div className="container">
      <Link className={s.homeLink} to="/">Home</Link>
      <div className={s.spacer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cum enim facilis, fugiat harum rerum. Aliquid autem dignissimos dolore eum expedita iure molestiae obcaecati optio pariatur placeat qui sequi, veritatis, vitae voluptas voluptatibus. Consectetur doloremque eius exercitationem explicabo quisquam repellat velit. A accusantium aperiam consequatur culpa illum incidunt itaque minus officia omnis qui sunt temporibus, tenetur vel, veritatis, voluptates. Architecto consequatur earum fugiat hic iusto laboriosam nemo quisquam sequi similique ullam. Consequuntur debitis harum ipsum laudantium libero provident quidem rem soluta ullam vitae. Eligendi esse molestiae odio qui quia recusandae sed, ullam! A accusantium aliquam aliquid corporis cum cumque dolor enim fuga illo, in iste maiores necessitatibus nihil nostrum, odit provident quas quasi quisquam recusandae repellat, repudiandae sint sit soluta tenetur totam unde vitae voluptatum? Aspernatur cum distinctio eligendi fuga incidunt qui quisquam rerum sequi. Architecto commodi est incidunt itaque iusto quo reprehenderit! Accusantium, aliquid atque consequatur consequuntur deleniti deserunt distinctio dolore doloribus ea exercitationem facilis fugit minus molestiae nemo neque nostrum numquam odit officia praesentium quaerat qui quia quo repellendus reprehenderit sint tempora vero! Aliquam cumque esse fugiat iusto minima mollitia obcaecati, quaerat quisquam repellendus. Dignissimos distinctio, dolor eius est incidunt inventore modi sapiente voluptatibus? Ab aliquid at commodi, exercitationem explicabo facere itaque labore possimus provident quibusdam rerum sint ut vero voluptatibus voluptatum! Animi, aperiam aspernatur consequatur eligendi ex excepturi exercitationem facilis fugiat fugit, impedit inventore iste laborum molestias nihil ratione reprehenderit suscipit tempora temporibus tenetur voluptatum? At culpa cupiditate delectus doloremque illo in, incidunt molestiae molestias, nobis non possimus repellendus sed unde velit voluptate! Ab alias aperiam aspernatur assumenda atque consectetur culpa dignissimos dolores eaque earum eligendi enim esse facilis, fuga id in labore non nostrum pariatur placeat quas quia ratione sapiente sit tempora tenetur, veniam veritatis vero voluptas voluptatum. Accusamus adipisci animi aut autem blanditiis eligendi exercitationem nihil officiis perspiciatis quod, repellendus sint tempore veritatis. Accusantium beatae cumque eveniet hic non, odit pariatur quis quo repellat, sapiente similique veritatis. Aliquam animi autem eum, fugiat illum laudantium nam numquam officia perspiciatis quisquam quos rem sed sequi sunt tempora. Autem dolore fugiat fugit itaque laboriosam libero modi natus nemo, non, nulla obcaecati placeat porro qui repellat sed similique, sit velit. Consequuntur culpa dolore dolorem eius error esse excepturi fugiat harum, impedit ipsa ipsam magni minus, necessitatibus neque quasi rem similique suscipit tempore vitae voluptas. Expedita facere maxime minus officia placeat quam, reprehenderit sapiente tenetur! Aliquid aperiam, assumenda aut beatae corporis culpa delectus dignissimos ducimus eaque error esse in ipsum laboriosam magnam nam obcaecati quas qui quos ratione sit sunt temporibus unde veritatis vitae voluptate. Architecto consectetur cumque deleniti dolorem, ea eaque facere illum ipsa itaque labore modi nemo nesciunt placeat porro quibusdam quo soluta suscipit tempore temporibus voluptas. Animi distinctio eveniet modi rem repellat repellendus? Aliquam aliquid beatae corporis cum debitis distinctio, doloribus earum exercitationem id illum incidunt ipsa iure nostrum numquam provident, quidem ratione sed sunt temporibus tenetur. Ad consequatur dignissimos ea esse eum ex fugiat ipsam, minima molestiae odit pariatur, placeat quasi quis recusandae repellat sunt suscipit, totam vero vitae voluptates! Ab accusantium animi beatae error esse eveniet exercitationem explicabo ipsam nisi quam, quibusdam ratione sunt voluptatibus? Blanditiis commodi culpa delectus deleniti, dolore eligendi ex exercitationem facere hic in ipsum maxime nesciunt obcaecati, perferendis perspiciatis ratione repellat sit tempore tenetur voluptates? Ad, amet expedita ipsa labore laudantium nulla optio rerum tempora vel! A at deleniti facilis quae voluptate! A ducimus et porro ullam veritatis vitae. Ad blanditiis dolorem dolorum ducimus inventore ipsa iste laudantium, magnam, magni maiores nihil nobis quibusdam quis, repellat tempore! Dignissimos enim odio quibusdam vero! Aperiam beatae consectetur doloribus est molestiae molestias qui vitae. Animi culpa dolore, dolorem earum enim est fuga, hic iusto libero nobis non officia perspiciatis quasi, quibusdam ut veritatis voluptatum. Atque autem doloremque, eligendi itaque omnis porro provident tenetur voluptates! Amet at dignissimos maxime odio officiis quam temporibus veniam voluptatem! Ab ad asperiores blanditiis consequatur cupiditate dolorem doloribus eligendi expedita facilis hic impedit ipsam iure laboriosam magni minus molestias nesciunt nisi obcaecati odio, quam quas quisquam similique sint tempora totam unde ut velit? Adipisci aliquam aliquid animi aspernatur beatae consectetur cupiditate debitis dicta dolorem ducimus eius enim eos explicabo facilis illo, ipsum iste labore magni, minus, mollitia necessitatibus officiis porro quae quia quos repellendus reprehenderit saepe similique soluta tempora ullam unde vero voluptates. Corporis doloribus ea eligendi facere magni nihil optio praesentium quibusdam rem. A architecto atque autem blanditiis corporis deserunt ducimus est explicabo fugiat ipsam iure libero maxime nam nihil nobis non officia optio porro, praesentium quas qui quidem quod ratione sed tenetur totam unde voluptates. Accusamus accusantium ad architecto consequatur debitis dignissimos dolor doloremque doloribus enim eos ex expedita id ipsam labore, magni minus officia officiis pariatur perferendis quam quibusdam quo rem repellendus similique tempore voluptas, voluptate! Accusamus aliquam beatae cumque ea earum et expedita facilis illum impedit ipsum perspiciatis, quae, qui quibusdam repellat totam voluptates voluptatibus? Culpa dicta magnam nulla placeat, quam recusandae temporibus. At dolores fuga nam sed ullam velit. Alias architecto assumenda aut blanditiis cupiditate deleniti ea eaque, earum explicabo id illo ipsum natus obcaecati officia placeat praesentium quae quam quod rem repudiandae vero voluptate voluptates voluptatibus? Assumenda beatae consectetur consequuntur dicta dolorem ea error esse et eveniet explicabo facilis id impedit in incidunt ipsum magni maiores maxime modi natus nemo officia officiis perspiciatis possimus, quasi repudiandae sapiente unde velit? Aliquam aperiam cumque deserunt distinctio doloribus ducimus non obcaecati quas. Corporis minus voluptas voluptate. A adipisci animi atque corporis, deserunt ducimus facere hic ipsum itaque iure libero obcaecati officia, optio quae quasi reprehenderit suscipit temporibus voluptatum. Accusamus adipisci asperiores deleniti dolore error illum laboriosam nesciunt. Aliquid architecto dolorum libero possimus recusandae. Aliquid deserunt eos laboriosam magnam molestias qui quos. Accusantium aliquam aliquid animi commodi distinctio exercitationem, in mollitia nisi omnis quibusdam rem, reprehenderit totam unde ut vel vero voluptas! Amet esse explicabo fuga ipsa ipsam magnam maxime minus non quam qui, quidem sed similique soluta tempore vero. Adipisci assumenda commodi dicta dolorem doloremque esse id magni nemo nesciunt nisi nulla numquam officiis rem, reprehenderit sit.
      </div>
      <div className={s.wrapper} ref={wrapperRef}>

        <ul className={s.innerPart} ref={listRef}>
          <li><div>1.Japan</div></li>
          <li><div>2.China</div></li>
          <li><div>3.Mexico</div></li>
          <li ref={brazilRef}><div ref={brazilRefInner}>4.Brazil</div></li>
          <li><div>5.France</div></li>
          <li><div>6.German</div></li>
          <li><div>7.Poland</div></li>
        </ul>

      </div>
      <div className={s.spacer}></div>
    </div>
  );
};

export default HorizontalScroll;