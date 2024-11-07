import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import s from "@/components/17-HorizontalScroll/HorizontalScroll.module.scss";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const Comp = ({containerEl}) => {
  
  const textRef = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      
      trigger: textRef.current, 
      animation: gsap.to( textRef.current, {x: 400, ease: "none"}),      
      start: "top 80%",
      end: "bottom 60%",
      // pin: true,
      
      scrub: .5,
      markers: true,
      scroller: containerEl
      
      
    })
  }, []);
  
  return (
    <div className='container'>
      <Link className={s.homeLink} to="/">Home</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dolorum labore quam, qui quisquam
        recusandae tempora voluptatem. A ab amet atque beatae commodi, consequatur corporis culpa debitis deserunt
        dignissimos doloribus eligendi eum excepturi explicabo facere fugit illum ipsum laudantium, magni maxime minus
        natus nemo nesciunt nihil nisi non nostrum officia pariatur quidem ratione reiciendis repudiandae sit tempore
        vero voluptate voluptates, voluptatibus. At expedita laudantium omnis perspiciatis, quasi quia sapiente
        veritatis voluptas? Adipisci amet animi beatae blanditiis commodi cum distinctio enim error harum maiores nam
        nemo neque nulla, odio officiis perferendis perspiciatis quia quis ratione, sed totam veniam vitae? Ab
        aspernatur delectus doloremque eos exercitationem maxime molestiae quae temporibus! A ad aliquid aperiam aut
        commodi consectetur cum debitis, dolorem error, esse eveniet excepturi facere in ipsa iusto laudantium magnam
        maiores modi molestias mollitia natus necessitatibus nesciunt numquam officia placeat quae quasi qui quia
        quibusdam quo recusandae reiciendis repellat sunt tempora ullam voluptas voluptatum? Consectetur corporis et
        harum temporibus unde. Accusantium aliquid amet animi asperiores at autem commodi debitis deleniti, dolore
        dolorem error eveniet excepturi exercitationem explicabo laborum magnam molestiae nobis numquam odio officia
        officiis omnis provident quaerat qui quis quisquam quo rem repellendus rerum saepe sequi sunt tempore totam
        veritatis vitae voluptates, voluptatum! Alias debitis doloremque excepturi explicabo ipsam magnam maxime officia
        repudiandae voluptate! Ab architecto beatae delectus dicta distinctio doloremque ducimus eveniet exercitationem
        expedita ipsa itaque iure laboriosam libero, minus modi nemo neque nesciunt nobis nostrum obcaecati officiis
        optio placeat porro quam quas ratione reiciendis repellendus repudiandae sed sit vitae voluptas voluptatem
        voluptatibus. Accusantium autem commodi corporis cum dolorum illo impedit ipsum minima nesciunt nobis obcaecati
        officia pariatur placeat quaerat, quam quisquam reiciendis, reprehenderit repudiandae sint suscipit tenetur
        vitae voluptatem voluptates! Dignissimos, doloremque dolores eveniet expedita illum modi nemo nesciunt nisi
        numquam obcaecati perspiciatis placeat quas qui, quisquam reiciendis repellendus sequi sint voluptates! Aliquid
        eos et hic nostrum numquam pariatur quae similique vel? Accusantium adipisci aliquam cupiditate dolorum, ducimus
        enim, fugit iusto minus obcaecati perspiciatis qui quisquam? Ab animi corporis deleniti deserunt, dignissimos
        fuga magni minima, nam nesciunt nobis non odit provident quae quasi quis repellendus voluptatum. Architecto at
        ducimus ea molestias nihil obcaecati officia? A accusantium aliquam aperiam beatae, dignissimos distinctio
        inventore minus molestias nisi porro quia quisquam ratione repellat rerum sed soluta veniam? Adipisci assumenda
        at, aut culpa deleniti dolor dolorem dolores dolorum earum et facilis fugit id illo ipsa ipsam iste laborum
        magnam molestias nisi non nulla perferendis provident quae quas quasi quibusdam quo quod ratione sed, similique
        totam ullam vel velit veritatis vero voluptas voluptates. A cum dignissimos enim facilis laboriosam laudantium
        maxime odio totam vero voluptas. Animi autem consequuntur deserunt distinctio eius facere incidunt iusto
        laudantium modi nemo nesciunt nobis officia possimus quod sequi, vel vero voluptatum? Aspernatur cupiditate
        deleniti ea laborum odio tempora ullam voluptatibus! Alias aliquam architecto aspernatur atque, autem commodi
        deleniti dolores dolorum ducimus eius esse eum expedita fugiat fugit harum ipsa itaque laboriosam laudantium
        minima mollitia nam neque nobis omnis perspiciatis possimus quae quasi quia quibusdam quidem quis quod rem sequi
        similique? A accusamus architecto asperiores at aut blanditiis dignissimos doloremque dolores ea et eveniet
        facilis fuga hic id ipsum iste iure labore magnam maxime mollitia numquam optio perspiciatis possimus provident
        quae quas qui quia quod, recusandae rerum sed similique suscipit tempora vel velit veritatis vero. Atque beatae
        blanditiis deserunt ducimus ea eligendi enim eos et, eum excepturi, explicabo facere illo iure libero magni
        minus modi mollitia nihil nobis nulla numquam officiis quibusdam rem repellat saepe, sed unde voluptatem.
        Aliquam, architecto eius eligendi explicabo ipsa praesentium quae quam ratione sapiente ut! Accusantium adipisci
        blanditiis commodi cupiditate dicta distinctio dolorem eaque eius est eum expedita facilis harum hic id, ipsum
        magnam magni mollitia neque nihil obcaecati odio odit perferendis porro, quibusdam quis reiciendis rerum sed
        sunt tenetur ullam! Alias aliquid asperiores debitis dolores ducimus eius expedita, hic in iusto molestiae
        necessitatibus omnis optio possimus quas quia quisquam voluptatem! Ab eius illum nisi sequi! Necessitatibus nemo
        quam reprehenderit sequi veritatis voluptate. Aliquam amet autem consequuntur deserunt, explicabo fuga impedit
        ipsum iusto labore maiores, molestias mollitia necessitatibus nostrum omnis quae reprehenderit sit soluta unde?
        Accusantium aliquid amet, at atque culpa debitis, delectus ea eaque earum eligendi eos inventore ipsa iusto, nam
        nostrum provident quasi qui quibusdam quo quos recusandae reprehenderit similique sit tempore unde velit
        voluptate voluptatum? Dignissimos eaque explicabo fugiat, harum impedit laudantium odit omnis optio repellat
        soluta! Atque beatae consectetur, culpa cumque cupiditate ipsum neque optio provident qui quis quos sit totam
        voluptatibus. Accusamus, adipisci asperiores atque commodi ea error ex illum iusto laboriosam maxime minus
        molestias nam neque nihil nisi non odit provident rem repellendus sit tempore totam voluptatum? Ab alias aut
        corporis eaque eius est, facere harum id nihil non, quidem veniam veritatis. Adipisci alias aliquam aperiam at
        consequuntur corporis cupiditate debitis dicta dolor dolorem doloremque dolorum ea excepturi facilis fugiat
        harum hic illum laboriosam laudantium magnam minima nesciunt, nobis officia officiis optio, perferendis placeat
        quo quos reiciendis reprehenderit rerum sint totam ullam unde vero vitae voluptatem. Delectus dolorum eveniet
        exercitationem nisi, quidem reprehenderit tenetur vitae. Deserunt doloribus maxime quaerat tempora ullam veniam
        vero. Dicta dolore error inventore libero numquam quam voluptatum. A amet dignissimos eum itaque molestias
        recusandae sunt temporibus, vitae. Accusamus ad blanditiis, corporis dolore ea excepturi fugit maiores nobis
        porro, praesentium quam quo quod reiciendis sequi, suscipit ullam voluptatem voluptatum. Animi aut doloribus
        illum laboriosam libero minus, molestiae molestias nihil nostrum praesentium, reiciendis repellat tenetur
        voluptatem? Aliquam deleniti est fugit ipsa magni nulla numquam pariatur qui recusandae repudiandae, vero vitae.
        A, odio repellat. A ab aperiam architecto assumenda at aut cum cupiditate delectus deserunt dolor doloremque
        dolorum, eligendi est et exercitationem facere fugit hic ipsam itaque laborum libero maiores mollitia obcaecati
        odit officia quae quia quis, quisquam recusandae sint tempora ut velit vitae. Accusantium adipisci blanditiis
        cumque deleniti enim impedit possimus ratione reiciendis sit voluptas! Blanditiis commodi consectetur deleniti
        dignissimos, dolorum error expedita inventore, iste laudantium magni molestiae necessitatibus non quam quisquam,
        quos ullam vitae. Aliquid fugit harum labore nisi optio quod suscipit tenetur ut voluptates.
      </p>
      <div ref={textRef} style={{padding: 20, background: 'green', width: 100}}>hahaha</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dolorum labore quam, qui quisquam
        recusandae tempora voluptatem. A ab amet atque beatae commodi, consequatur corporis culpa debitis deserunt
        dignissimos doloribus eligendi eum excepturi explicabo facere fugit illum ipsum laudantium, magni maxime minus
        natus nemo nesciunt nihil nisi non nostrum officia pariatur quidem ratione reiciendis repudiandae sit tempore
        vero voluptate voluptates, voluptatibus. At expedita laudantium omnis perspiciatis, quasi quia sapiente
        veritatis voluptas? Adipisci amet animi beatae blanditiis commodi cum distinctio enim error harum maiores nam
        nemo neque nulla, odio officiis perferendis perspiciatis quia quis ratione, sed totam veniam vitae? Ab
        aspernatur delectus doloremque eos exercitationem maxime molestiae quae temporibus! A ad aliquid aperiam aut
        commodi consectetur cum debitis, dolorem error, esse eveniet excepturi facere in ipsa iusto laudantium magnam
        maiores modi molestias mollitia natus necessitatibus nesciunt numquam officia placeat quae quasi qui quia
        quibusdam quo recusandae reiciendis repellat sunt tempora ullam voluptas voluptatum? Consectetur corporis et
        harum temporibus unde. Accusantium aliquid amet animi asperiores at autem commodi debitis deleniti, dolore
        dolorem error eveniet excepturi exercitationem explicabo laborum magnam molestiae nobis numquam odio officia
        officiis omnis provident quaerat qui quis quisquam quo rem repellendus rerum saepe sequi sunt tempore totam
        veritatis vitae voluptates, voluptatum! Alias debitis doloremque excepturi explicabo ipsam magnam maxime officia
        repudiandae voluptate! Ab architecto beatae delectus dicta distinctio doloremque ducimus eveniet exercitationem
        expedita ipsa itaque iure laboriosam libero, minus modi nemo neque nesciunt nobis nostrum obcaecati officiis
        optio placeat porro quam quas ratione reiciendis repellendus repudiandae sed sit vitae voluptas voluptatem
        voluptatibus. Accusantium autem commodi corporis cum dolorum illo impedit ipsum minima nesciunt nobis obcaecati
        officia pariatur placeat quaerat, quam quisquam reiciendis, reprehenderit repudiandae sint suscipit tenetur
        vitae voluptatem voluptates! Dignissimos, doloremque dolores eveniet expedita illum modi nemo nesciunt nisi
        numquam obcaecati perspiciatis placeat quas qui, quisquam reiciendis repellendus sequi sint voluptates! Aliquid
        eos et hic nostrum numquam pariatur quae similique vel? Accusantium adipisci aliquam cupiditate dolorum, ducimus
        enim, fugit iusto minus obcaecati perspiciatis qui quisquam? Ab animi corporis deleniti deserunt, dignissimos
        fuga magni minima, nam nesciunt nobis non odit provident quae quasi quis repellendus voluptatum. Architecto at
        ducimus ea molestias nihil obcaecati officia? A accusantium aliquam aperiam beatae, dignissimos distinctio
        inventore minus molestias nisi porro quia quisquam ratione repellat rerum sed soluta veniam? Adipisci assumenda
        at, aut culpa deleniti dolor dolorem dolores dolorum earum et facilis fugit id illo ipsa ipsam iste laborum
        magnam molestias nisi non nulla perferendis provident quae quas quasi quibusdam quo quod ratione sed, similique
        totam ullam vel velit veritatis vero voluptas voluptates. A cum dignissimos enim facilis laboriosam laudantium
        maxime odio totam vero voluptas. Animi autem consequuntur deserunt distinctio eius facere incidunt iusto
        laudantium modi nemo nesciunt nobis officia possimus quod sequi, vel vero voluptatum? Aspernatur cupiditate
        deleniti ea laborum odio tempora ullam voluptatibus! Alias aliquam architecto aspernatur atque, autem commodi
        deleniti dolores dolorum ducimus eius esse eum expedita fugiat fugit harum ipsa itaque laboriosam laudantium
        minima mollitia nam neque nobis omnis perspiciatis possimus quae quasi quia quibusdam quidem quis quod rem sequi
        similique? A accusamus architecto asperiores at aut blanditiis dignissimos doloremque dolores ea et eveniet
        facilis fuga hic id ipsum iste iure labore magnam maxime mollitia numquam optio perspiciatis possimus provident
        quae quas qui quia quod, recusandae rerum sed similique suscipit tempora vel velit veritatis vero. Atque beatae
        blanditiis deserunt ducimus ea eligendi enim eos et, eum excepturi, explicabo facere illo iure libero magni
        minus modi mollitia nihil nobis nulla numquam officiis quibusdam rem repellat saepe, sed unde voluptatem.
        Aliquam, architecto eius eligendi explicabo ipsa praesentium quae quam ratione sapiente ut! Accusantium adipisci
        blanditiis commodi cupiditate dicta distinctio dolorem eaque eius est eum expedita facilis harum hic id, ipsum
        magnam magni mollitia neque nihil obcaecati odio odit perferendis porro, quibusdam quis reiciendis rerum sed
        sunt tenetur ullam! Alias aliquid asperiores debitis dolores ducimus eius expedita, hic in iusto molestiae
        necessitatibus omnis optio possimus quas quia quisquam voluptatem! Ab eius illum nisi sequi! Necessitatibus nemo
        quam reprehenderit sequi veritatis voluptate. Aliquam amet autem consequuntur deserunt, explicabo fuga impedit
        ipsum iusto labore maiores, molestias mollitia necessitatibus nostrum omnis quae reprehenderit sit soluta unde?
        Accusantium aliquid amet, at atque culpa debitis, delectus ea eaque earum eligendi eos inventore ipsa iusto, nam
        nostrum provident quasi qui quibusdam quo quos recusandae reprehenderit similique sit tempore unde velit
        voluptate voluptatum? Dignissimos eaque explicabo fugiat, harum impedit laudantium odit omnis optio repellat
        soluta! Atque beatae consectetur, culpa cumque cupiditate ipsum neque optio provident qui quis quos sit totam
        voluptatibus. Accusamus, adipisci asperiores atque commodi ea error ex illum iusto laboriosam maxime minus
        molestias nam neque nihil nisi non odit provident rem repellendus sit tempore totam voluptatum? Ab alias aut
        corporis eaque eius est, facere harum id nihil non, quidem veniam veritatis. Adipisci alias aliquam aperiam at
        consequuntur corporis cupiditate debitis dicta dolor dolorem doloremque dolorum ea excepturi facilis fugiat
        harum hic illum laboriosam laudantium magnam minima nesciunt, nobis officia officiis optio, perferendis placeat
        quo quos reiciendis reprehenderit rerum sint totam ullam unde vero vitae voluptatem. Delectus dolorum eveniet
        exercitationem nisi, quidem reprehenderit tenetur vitae. Deserunt doloribus maxime quaerat tempora ullam veniam
        vero. Dicta dolore error inventore libero numquam quam voluptatum. A amet dignissimos eum itaque molestias
        recusandae sunt temporibus, vitae. Accusamus ad blanditiis, corporis dolore ea excepturi fugit maiores nobis
        porro, praesentium quam quo quod reiciendis sequi, suscipit ullam voluptatem voluptatum. Animi aut doloribus
        illum laboriosam libero minus, molestiae molestias nihil nostrum praesentium, reiciendis repellat tenetur
        voluptatem? Aliquam deleniti est fugit ipsa magni nulla numquam pariatur qui recusandae repudiandae, vero vitae.
        A, odio repellat. A ab aperiam architecto assumenda at aut cum cupiditate delectus deserunt dolor doloremque
        dolorum, eligendi est et exercitationem facere fugit hic ipsam itaque laborum libero maiores mollitia obcaecati
        odit officia quae quia quis, quisquam recusandae sint tempora ut velit vitae. Accusantium adipisci blanditiis
        cumque deleniti enim impedit possimus ratione reiciendis sit voluptas! Blanditiis commodi consectetur deleniti
        dignissimos, dolorum error expedita inventore, iste laudantium magni molestiae necessitatibus non quam quisquam,
        quos ullam vitae. Aliquid fugit harum labore nisi optio quod suscipit tenetur ut voluptates.
      </p>
    </div>
  );
};

export default Comp;