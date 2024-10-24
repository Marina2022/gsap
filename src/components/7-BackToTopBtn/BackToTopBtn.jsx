import s from './BackToTopBtn.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const BackToTopBtn = () => {

  const btnRef = useRef()
  const mainRef = useRef()
  const par1Ref = useRef()
  const navRef = useRef()


  const parsRef = useRef([])
  const setRef = (el) => {

    if (parsRef.current && !parsRef.current.includes(el)) {
      parsRef.current.push(el)
    }
  }

  const bgColors = ['yellow', 'mistyrose', 'turquoise']
  const navColors = ['orange', 'pink', 'green']

  useEffect(() => {

    parsRef.current.forEach((el, index) => {
      gsap.set(el, {background: bgColors[index]})

      const itemElements = navRef.current.querySelectorAll('li')

      const tween1 = gsap.to(itemElements,
        {
          background: navColors[index]
        },
      )


      ScrollTrigger.create({
        trigger: el,        
        // animation: gsap.to(itemElements,
        //   {
        //     background: navColors[index],
        //     immediateRender:false
        //   }),
        start: "top 58px",        
        // toggleActions: "play none none reverse",
        // fastScrollEnd: true,
        
        onEnter: ()=>gsap.to(itemElements, {background: navColors[index]}),
        onEnterBack: ()=>gsap.to(itemElements, {background: navColors[index]})
      })

    })

    const tween = gsap.from(btnRef.current, {
      opacity: 0, y: 100, duration: .5
    })


    ScrollTrigger.create({
      trigger: mainRef.current,
      toggleActions: "play none none reverse",
      animation: tween,
      start: "80% 100%",
      fastScrollEnd: true
    })
  })


  return (

    <div className="container">
      <div className={s.main}>
        <Link className={s.homeLink} to="/">Home</Link>
        <ul className={s.nav} ref={navRef}>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
        </ul>

        <div ref={mainRef} className={s.main}>
          <button onClick={() => window.scrollTo(0, 0)} ref={btnRef} className={s.btn}>Back To Top</button>


          <p ref={setRef} className={s.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta, earum eius eveniet exercitationem
            iure
            minus non possimus suscipit. Ab adipisci alias aliquid animi aperiam at autem commodi consequuntur culpa cum
            deleniti dicta ea eos iste laborum minus nesciunt nihil nobis nostrum odio pariatur perferendis perspiciatis
            placeat quam quas quisquam quo quod reiciendis rem, reprehenderit rerum sed suscipit tenetur veniam vitae
            voluptate voluptatem? Adipisci dolorem excepturi id molestias officiis reprehenderit rerum tempora!
            Asperiores
            cupiditate, distinctio dolorum ducimus ea eaque eos, fuga illo in inventore ipsum iste magnam modi neque
            nobis
            numquam porro quasi ratione recusandae, repudiandae sapiente similique sunt unde. Accusantium ad adipisci
            asperiores, assumenda at blanditiis commodi consequuntur deserunt eius eum impedit labore laborum libero
            molestias
            nobis numquam obcaecati omnis provident quia quo repudiandae sint ullam velit voluptas voluptate. Ab aperiam
            architecto aspernatur blanditiis corporis debitis deserunt ea error est, illum ipsa iste labore maiores
            natus
            necessitatibus neque nesciunt nisi nobis nulla officiis pariatur placeat provident quae quaerat quidem quod
            ratione repellat repellendus repudiandae rerum similique soluta voluptates voluptatum! Adipisci aspernatur
            commodi
            natus nesciunt rerum. Blanditiis consequuntur facere impedit ipsum magnam minima quis voluptatibus! Alias
            animi
            aperiam, dolorum ducimus error ex, expedita fugiat hic inventore nemo quod sit vel velit! Autem, et
            provident?
            Ad
            adipisci aliquid aperiam consequatur cupiditate deleniti dolorem error esse explicabo id inventore ipsa
            itaque
            iure labore laboriosam nemo nesciunt, nihil nisi obcaecati quae qui rem reprehenderit similique tenetur
            voluptatibus! Ad adipisci architecto asperiores atque corporis deleniti earum fugiat fugit laborum natus
            nulla
            obcaecati, officia omnis pariatur perferendis porro, quam recusandae repellendus sint sit soluta, sunt ut
            velit
            vitae voluptas. Ad magni maxime perspiciatis quas, recusandae repellendus. Amet cum cumque dolorem ex harum
            ipsam
            ipsum natus neque nostrum perspiciatis qui, quibusdam, temporibus, ullam unde veniam? Assumenda deserunt
            iure
            nemo
            neque nostrum nulla quasi repudiandae? Aut autem cumque debitis inventore, modi nihil recusandae sed sequi
            ut
            velit. Debitis distinctio earum non praesentium quasi repudiandae rerum vel! Ab aspernatur assumenda atque
            consectetur culpa cum, cumque deleniti dicta dignissimos distinctio enim error eveniet exercitationem
            facilis
            fuga, labore maiores natus nulla obcaecati officia officiis praesentium quasi suscipit tempora temporibus
            tenetur
            ullam, voluptates! Ab aliquid consectetur dolores non nulla perspiciatis quae similique sit totam vitae?
            Aliquam,
            aliquid assumenda aut autem, deleniti dignissimos earum error fugit iste laboriosam libero perferendis
            possimus
            reiciendis reprehenderit temporibus tenetur totam? Architecto debitis dolor, eligendi, error esse impedit
            inventore minus molestias natus, non odit perferendis porro quo similique suscipit veniam voluptas
            voluptatum?
            Doloribus excepturi inventore magnam molestias nisi provident saepe soluta velit. Accusamus asperiores
            debitis
            nihil nostrum quos similique tempora? Alias ea, explicabo. Aperiam et illo itaque minus neque? Commodi
            consequuntur modi quis sed tempora? Aperiam aspernatur assumenda at, consectetur consequuntur cum cumque
            deserunt
            dolores ex illo inventore ipsa ipsam modi nemo neque nobis nulla officiis pariatur perferendis placeat porro
            repellat rerum saepe sed sequi, sunt voluptatem voluptatibus. Accusamus cupiditate ducimus eum ipsa
            molestiae
            porro, quod? Alias asperiores blanditiis culpa ducimus eaque earum esse facilis, id labore laborum
            laudantium
            magni mollitia numquam optio perferendis quaerat rerum unde ut, veniam voluptatem? Alias amet id omnis
            placeat
            soluta suscipit velit! A doloribus earum explicabo facere minima quas soluta suscipit tempore voluptatibus.
            Adipisci aliquam aliquid at aut autem blanditiis commodi, corporis delectus dicta ducimus eaque eum
            excepturi
            facilis inventore ipsa itaque iusto libero minus modi neque, nihil nostrum porro quasi quibusdam quo quos
            recusandae sed sit, temporibus vel. Aspernatur consequuntur cupiditate dicta dolor esse ex facilis, id
            incidunt
            ipsam iste laboriosam laudantium nihil odio quia quidem quo quos rem saepe sed sunt tempora tenetur
            voluptate,
            voluptates. Debitis deserunt eaque esse et explicabo iste labore sed sint, voluptas voluptatum? Ad
            architecto
            aspernatur at distinctio doloremque dolores dolorum, et excepturi facere facilis illum iure maxime molestiae
            necessitatibus non pariatur porro quas quia ratione sapiente suscipit ullam ut voluptatibus. Corporis
            eligendi
            nemo quas similique. Amet consequatur dolore, eaque est nobis odit provident quidem rem? Aspernatur aut cum
            dicta
            dolore, enim error, facilis hic incidunt iusto labore, laborum maiores mollitia necessitatibus odit officia
            optio
            placeat suscipit vero. Ad alias assumenda commodi corporis cum dignissimos doloribus eligendi eos, ex facere
            impedit inventore laboriosam magnam maxime minus non nostrum perspiciatis quaerat quos reiciendis sunt
            suscipit
            vel. Debitis dignissimos distinctio eveniet in, ipsum optio repellendus totam ut velit voluptatibus. Cum
            ducimus
            explicabo natus odio? Doloremque, iste iusto minus, nemo officia pariatur quam quasi quo, sunt totam velit
            voluptate voluptates? Commodi corporis delectus deleniti distinctio dolor dolore doloribus ducimus earum
            error
            ex
            facere itaque libero magni maiores modi molestias optio perferendis quibusdam recusandae repellendus sit
            tempore
            tenetur vel, voluptas, voluptate. Asperiores commodi cupiditate, earum fuga iure laudantium sint voluptatem.
            Aliquid aperiam at atque eos exercitationem inventore ipsum molestiae, non quasi qui quia sunt tempora.
            Commodi
            ducimus explicabo illum iste similique! Amet dicta eaque et, hic, incidunt, laborum molestias numquam
            perferendis
            perspiciatis possimus quasi repudiandae saepe totam veniam voluptas! Architecto atque enim ex, illo, labore
            magni
            maiores molestiae perspiciatis quaerat quam quis recusandae repellendus ut vel voluptas. Assumenda, et,
            similique.
            Architecto asperiores at doloribus ea laboriosam minus, nulla perferendis quae reiciendis voluptates! Ab
            adipisci,
            aperiam atque debitis dignissimos distinctio doloremque eaque eum eveniet excepturi explicabo hic illum
            magnam
            neque odit quos ratione reiciendis. Accusantium assumenda, beatae corporis cum ea eum impedit iure nulla
            praesentium quasi! Ab adipisci atque autem cumque deleniti dolores fugit harum illo incidunt libero maxime
            minima,
            nam natus nesciunt nihil non nulla odit perspiciatis placeat provident quisquam repudiandae similique sint
            sunt
            totam veritatis voluptatem! Deleniti ducimus fugit laudantium numquam quas. Amet aut consequuntur dolorem
            eius
            error eum incidunt minus, nemo neque officiis pariatur quas quia ut vel velit. Autem dicta dolor dolorem
            laudantium molestias numquam quaerat veritatis! A, accusamus accusantium architecto atque consectetur
            consequatur
            doloremque et exercitationem fugiat fugit ipsa iste laboriosam, numquam officia quas quia, repellat rerum
            saepe
            similique temporibus ut vitae voluptates voluptatibus. At ducimus illo ipsam iusto porro quasi ut velit.
            Aperiam
            cumque expedita facilis fuga perspiciatis quis, suscipit! Aperiam asperiores corporis culpa dolor ea enim,
            eveniet
            incidunt inventore libero molestias nam necessitatibus neque nulla omnis optio possimus quam rerum sequi vel
            voluptates?
          </p>
          <p ref={setRef} className={s.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta, earum eius eveniet exercitationem
            iure
            minus non possimus suscipit. Ab adipisci alias aliquid animi aperiam at autem commodi consequuntur culpa cum
            deleniti dicta ea eos iste laborum minus nesciunt nihil nobis nostrum odio pariatur perferendis perspiciatis
            placeat quam quas quisquam quo quod reiciendis rem, reprehenderit rerum sed suscipit tenetur veniam vitae
            voluptate voluptatem? Adipisci dolorem excepturi id molestias officiis reprehenderit rerum tempora!
            Asperiores
            cupiditate, distinctio dolorum ducimus ea eaque eos, fuga illo in inventore ipsum iste magnam modi neque
            nobis
            numquam porro quasi ratione recusandae, repudiandae sapiente similique sunt unde. Accusantium ad adipisci
            asperiores, assumenda at blanditiis commodi consequuntur deserunt eius eum impedit labore laborum libero
            molestias
            nobis numquam obcaecati omnis provident quia quo repudiandae sint ullam velit voluptas voluptate. Ab aperiam
            architecto aspernatur blanditiis corporis debitis deserunt ea error est, illum ipsa iste labore maiores
            natus
            necessitatibus neque nesciunt nisi nobis nulla officiis pariatur placeat provident quae quaerat quidem quod
            ratione repellat repellendus repudiandae rerum similique soluta voluptates voluptatum! Adipisci aspernatur
            commodi
            natus nesciunt rerum. Blanditiis consequuntur facere impedit ipsum magnam minima quis voluptatibus! Alias
            animi
            aperiam, dolorum ducimus error ex, expedita fugiat hic inventore nemo quod sit vel velit! Autem, et
            provident?
            Ad
            adipisci aliquid aperiam consequatur cupiditate deleniti dolorem error esse explicabo id inventore ipsa
            itaque
            iure labore laboriosam nemo nesciunt, nihil nisi obcaecati quae qui rem reprehenderit similique tenetur
            voluptatibus! Ad adipisci architecto asperiores atque corporis deleniti earum fugiat fugit laborum natus
            nulla
            obcaecati, officia omnis pariatur perferendis porro, quam recusandae repellendus sint sit soluta, sunt ut
            velit
            vitae voluptas. Ad magni maxime perspiciatis quas, recusandae repellendus. Amet cum cumque dolorem ex harum
            ipsam
            ipsum natus neque nostrum perspiciatis qui, quibusdam, temporibus, ullam unde veniam? Assumenda deserunt
            iure
            nemo
            neque nostrum nulla quasi repudiandae? Aut autem cumque debitis inventore, modi nihil recusandae sed sequi
            ut
            velit. Debitis distinctio earum non praesentium quasi repudiandae rerum vel! Ab aspernatur assumenda atque
            consectetur culpa cum, cumque deleniti dicta dignissimos distinctio enim error eveniet exercitationem
            facilis
            fuga, labore maiores natus nulla obcaecati officia officiis praesentium quasi suscipit tempora temporibus
            tenetur
            ullam, voluptates! Ab aliquid consectetur dolores non nulla perspiciatis quae similique sit totam vitae?
            Aliquam,
            aliquid assumenda aut autem, deleniti dignissimos earum error fugit iste laboriosam libero perferendis
            possimus
            reiciendis reprehenderit temporibus tenetur totam? Architecto debitis dolor, eligendi, error esse impedit
            inventore minus molestias natus, non odit perferendis porro quo similique suscipit veniam voluptas
            voluptatum?
            Doloribus excepturi inventore magnam molestias nisi provident saepe soluta velit. Accusamus asperiores
            debitis
            nihil nostrum quos similique tempora? Alias ea, explicabo. Aperiam et illo itaque minus neque? Commodi
            consequuntur modi quis sed tempora? Aperiam aspernatur assumenda at, consectetur consequuntur cum cumque
            deserunt
            dolores ex illo inventore ipsa ipsam modi nemo neque nobis nulla officiis pariatur perferendis placeat porro
            repellat rerum saepe sed sequi, sunt voluptatem voluptatibus. Accusamus cupiditate ducimus eum ipsa
            molestiae
            porro, quod? Alias asperiores blanditiis culpa ducimus eaque earum esse facilis, id labore laborum
            laudantium
            magni mollitia numquam optio perferendis quaerat rerum unde ut, veniam voluptatem? Alias amet id omnis
            placeat
            soluta suscipit velit! A doloribus earum explicabo facere minima quas soluta suscipit tempore voluptatibus.
            Adipisci aliquam aliquid at aut autem blanditiis commodi, corporis delectus dicta ducimus eaque eum
            excepturi
            facilis inventore ipsa itaque iusto libero minus modi neque, nihil nostrum porro quasi quibusdam quo quos
            recusandae sed sit, temporibus vel. Aspernatur consequuntur cupiditate dicta dolor esse ex facilis, id
            incidunt
            ipsam iste laboriosam laudantium nihil odio quia quidem quo quos rem saepe sed sunt tempora tenetur
            voluptate,
            voluptates. Debitis deserunt eaque esse et explicabo iste labore sed sint, voluptas voluptatum? Ad
            architecto
            aspernatur at distinctio doloremque dolores dolorum, et excepturi facere facilis illum iure maxime molestiae
            necessitatibus non pariatur porro quas quia ratione sapiente suscipit ullam ut voluptatibus. Corporis
            eligendi
            nemo quas similique. Amet consequatur dolore, eaque est nobis odit provident quidem rem? Aspernatur aut cum
            dicta
            dolore, enim error, facilis hic incidunt iusto labore, laborum maiores mollitia necessitatibus odit officia
            optio
            placeat suscipit vero. Ad alias assumenda commodi corporis cum dignissimos doloribus eligendi eos, ex facere
            impedit inventore laboriosam magnam maxime minus non nostrum perspiciatis quaerat quos reiciendis sunt
            suscipit
            vel. Debitis dignissimos distinctio eveniet in, ipsum optio repellendus totam ut velit voluptatibus. Cum
            ducimus
            explicabo natus odio? Doloremque, iste iusto minus, nemo officia pariatur quam quasi quo, sunt totam velit
            voluptate voluptates? Commodi corporis delectus deleniti distinctio dolor dolore doloribus ducimus earum
            error
            ex
            facere itaque libero magni maiores modi molestias optio perferendis quibusdam recusandae repellendus sit
            tempore
            tenetur vel, voluptas, voluptate. Asperiores commodi cupiditate, earum fuga iure laudantium sint voluptatem.
            Aliquid aperiam at atque eos exercitationem inventore ipsum molestiae, non quasi qui quia sunt tempora.
            Commodi
            ducimus explicabo illum iste similique! Amet dicta eaque et, hic, incidunt, laborum molestias numquam
            perferendis
            perspiciatis possimus quasi repudiandae saepe totam veniam voluptas! Architecto atque enim ex, illo, labore
            magni
            maiores molestiae perspiciatis quaerat quam quis recusandae repellendus ut vel voluptas. Assumenda, et,
            similique.
            Architecto asperiores at doloribus ea laboriosam minus, nulla perferendis quae reiciendis voluptates! Ab
            adipisci,
            aperiam atque debitis dignissimos distinctio doloremque eaque eum eveniet excepturi explicabo hic illum
            magnam
            neque odit quos ratione reiciendis. Accusantium assumenda, beatae corporis cum ea eum impedit iure nulla
            praesentium quasi! Ab adipisci atque autem cumque deleniti dolores fugit harum illo incidunt libero maxime
            minima,
            nam natus nesciunt nihil non nulla odit perspiciatis placeat provident quisquam repudiandae similique sint
            sunt
            totam veritatis voluptatem! Deleniti ducimus fugit laudantium numquam quas. Amet aut consequuntur dolorem
            eius
            error eum incidunt minus, nemo neque officiis pariatur quas quia ut vel velit. Autem dicta dolor dolorem
            laudantium molestias numquam quaerat veritatis! A, accusamus accusantium architecto atque consectetur
            consequatur
            doloremque et exercitationem fugiat fugit ipsa iste laboriosam, numquam officia quas quia, repellat rerum
            saepe
            similique temporibus ut vitae voluptates voluptatibus. At ducimus illo ipsam iusto porro quasi ut velit.
            Aperiam
            cumque expedita facilis fuga perspiciatis quis, suscipit! Aperiam asperiores corporis culpa dolor ea enim,
            eveniet
            incidunt inventore libero molestias nam necessitatibus neque nulla omnis optio possimus quam rerum sequi vel
            voluptates?
          </p>
          <p ref={setRef} className={s.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta, earum eius eveniet exercitationem
            iure
            minus non possimus suscipit. Ab adipisci alias aliquid animi aperiam at autem commodi consequuntur culpa cum
            deleniti dicta ea eos iste laborum minus nesciunt nihil nobis nostrum odio pariatur perferendis perspiciatis
            placeat quam quas quisquam quo quod reiciendis rem, reprehenderit rerum sed suscipit tenetur veniam vitae
            voluptate voluptatem? Adipisci dolorem excepturi id molestias officiis reprehenderit rerum tempora!
            Asperiores
            cupiditate, distinctio dolorum ducimus ea eaque eos, fuga illo in inventore ipsum iste magnam modi neque
            nobis
            numquam porro quasi ratione recusandae, repudiandae sapiente similique sunt unde. Accusantium ad adipisci
            asperiores, assumenda at blanditiis commodi consequuntur deserunt eius eum impedit labore laborum libero
            molestias
            nobis numquam obcaecati omnis provident quia quo repudiandae sint ullam velit voluptas voluptate. Ab aperiam
            architecto aspernatur blanditiis corporis debitis deserunt ea error est, illum ipsa iste labore maiores
            natus
            necessitatibus neque nesciunt nisi nobis nulla officiis pariatur placeat provident quae quaerat quidem quod
            ratione repellat repellendus repudiandae rerum similique soluta voluptates voluptatum! Adipisci aspernatur
            commodi
            natus nesciunt rerum. Blanditiis consequuntur facere impedit ipsum magnam minima quis voluptatibus! Alias
            animi
            aperiam, dolorum ducimus error ex, expedita fugiat hic inventore nemo quod sit vel velit! Autem, et
            provident?
            Ad
            adipisci aliquid aperiam consequatur cupiditate deleniti dolorem error esse explicabo id inventore ipsa
            itaque
            iure labore laboriosam nemo nesciunt, nihil nisi obcaecati quae qui rem reprehenderit similique tenetur
            voluptatibus! Ad adipisci architecto asperiores atque corporis deleniti earum fugiat fugit laborum natus
            nulla
            obcaecati, officia omnis pariatur perferendis porro, quam recusandae repellendus sint sit soluta, sunt ut
            velit
            vitae voluptas. Ad magni maxime perspiciatis quas, recusandae repellendus. Amet cum cumque dolorem ex harum
            ipsam
            ipsum natus neque nostrum perspiciatis qui, quibusdam, temporibus, ullam unde veniam? Assumenda deserunt
            iure
            nemo
            neque nostrum nulla quasi repudiandae? Aut autem cumque debitis inventore, modi nihil recusandae sed sequi
            ut
            velit. Debitis distinctio earum non praesentium quasi repudiandae rerum vel! Ab aspernatur assumenda atque
            consectetur culpa cum, cumque deleniti dicta dignissimos distinctio enim error eveniet exercitationem
            facilis
            fuga, labore maiores natus nulla obcaecati officia officiis praesentium quasi suscipit tempora temporibus
            tenetur
            ullam, voluptates! Ab aliquid consectetur dolores non nulla perspiciatis quae similique sit totam vitae?
            Aliquam,
            aliquid assumenda aut autem, deleniti dignissimos earum error fugit iste laboriosam libero perferendis
            possimus
            reiciendis reprehenderit temporibus tenetur totam? Architecto debitis dolor, eligendi, error esse impedit
            inventore minus molestias natus, non odit perferendis porro quo similique suscipit veniam voluptas
            voluptatum?
            Doloribus excepturi inventore magnam molestias nisi provident saepe soluta velit. Accusamus asperiores
            debitis
            nihil nostrum quos similique tempora? Alias ea, explicabo. Aperiam et illo itaque minus neque? Commodi
            consequuntur modi quis sed tempora? Aperiam aspernatur assumenda at, consectetur consequuntur cum cumque
            deserunt
            dolores ex illo inventore ipsa ipsam modi nemo neque nobis nulla officiis pariatur perferendis placeat porro
            repellat rerum saepe sed sequi, sunt voluptatem voluptatibus. Accusamus cupiditate ducimus eum ipsa
            molestiae
            porro, quod? Alias asperiores blanditiis culpa ducimus eaque earum esse facilis, id labore laborum
            laudantium
            magni mollitia numquam optio perferendis quaerat rerum unde ut, veniam voluptatem? Alias amet id omnis
            placeat
            soluta suscipit velit! A doloribus earum explicabo facere minima quas soluta suscipit tempore voluptatibus.
            Adipisci aliquam aliquid at aut autem blanditiis commodi, corporis delectus dicta ducimus eaque eum
            excepturi
            facilis inventore ipsa itaque iusto libero minus modi neque, nihil nostrum porro quasi quibusdam quo quos
            recusandae sed sit, temporibus vel. Aspernatur consequuntur cupiditate dicta dolor esse ex facilis, id
            incidunt
            ipsam iste laboriosam laudantium nihil odio quia quidem quo quos rem saepe sed sunt tempora tenetur
            voluptate,
            voluptates. Debitis deserunt eaque esse et explicabo iste labore sed sint, voluptas voluptatum? Ad
            architecto
            aspernatur at distinctio doloremque dolores dolorum, et excepturi facere facilis illum iure maxime molestiae
            necessitatibus non pariatur porro quas quia ratione sapiente suscipit ullam ut voluptatibus. Corporis
            eligendi
            nemo quas similique. Amet consequatur dolore, eaque est nobis odit provident quidem rem? Aspernatur aut cum
            dicta
            dolore, enim error, facilis hic incidunt iusto labore, laborum maiores mollitia necessitatibus odit officia
            optio
            placeat suscipit vero. Ad alias assumenda commodi corporis cum dignissimos doloribus eligendi eos, ex facere
            impedit inventore laboriosam magnam maxime minus non nostrum perspiciatis quaerat quos reiciendis sunt
            suscipit
            vel. Debitis dignissimos distinctio eveniet in, ipsum optio repellendus totam ut velit voluptatibus. Cum
            ducimus
            explicabo natus odio? Doloremque, iste iusto minus, nemo officia pariatur quam quasi quo, sunt totam velit
            voluptate voluptates? Commodi corporis delectus deleniti distinctio dolor dolore doloribus ducimus earum
            error
            ex
            facere itaque libero magni maiores modi molestias optio perferendis quibusdam recusandae repellendus sit
            tempore
            tenetur vel, voluptas, voluptate. Asperiores commodi cupiditate, earum fuga iure laudantium sint voluptatem.
            Aliquid aperiam at atque eos exercitationem inventore ipsum molestiae, non quasi qui quia sunt tempora.
            Commodi
            ducimus explicabo illum iste similique! Amet dicta eaque et, hic, incidunt, laborum molestias numquam
            perferendis
            perspiciatis possimus quasi repudiandae saepe totam veniam voluptas! Architecto atque enim ex, illo, labore
            magni
            maiores molestiae perspiciatis quaerat quam quis recusandae repellendus ut vel voluptas. Assumenda, et,
            similique.
            Architecto asperiores at doloribus ea laboriosam minus, nulla perferendis quae reiciendis voluptates! Ab
            adipisci,
            aperiam atque debitis dignissimos distinctio doloremque eaque eum eveniet excepturi explicabo hic illum
            magnam
            neque odit quos ratione reiciendis. Accusantium assumenda, beatae corporis cum ea eum impedit iure nulla
            praesentium quasi! Ab adipisci atque autem cumque deleniti dolores fugit harum illo incidunt libero maxime
            minima,
            nam natus nesciunt nihil non nulla odit perspiciatis placeat provident quisquam repudiandae similique sint
            sunt
            totam veritatis voluptatem! Deleniti ducimus fugit laudantium numquam quas. Amet aut consequuntur dolorem
            eius
            error eum incidunt minus, nemo neque officiis pariatur quas quia ut vel velit. Autem dicta dolor dolorem
            laudantium molestias numquam quaerat veritatis! A, accusamus accusantium architecto atque consectetur
            consequatur
            doloremque et exercitationem fugiat fugit ipsa iste laboriosam, numquam officia quas quia, repellat rerum
            saepe
            similique temporibus ut vitae voluptates voluptatibus. At ducimus illo ipsam iusto porro quasi ut velit.
            Aperiam
            cumque expedita facilis fuga perspiciatis quis, suscipit! Aperiam asperiores corporis culpa dolor ea enim,
            eveniet
            incidunt inventore libero molestias nam necessitatibus neque nulla omnis optio possimus quam rerum sequi vel
            voluptates?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackToTopBtn;