import s from './ProgressBar.module.scss';
import {Link} from "react-router-dom";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useEffect, useRef} from "react";
const ProgressBar = () => {
  
  const barRef = useRef()
  const textRef = useRef()
  const progressHolderRef = useRef()

  useEffect(() => {
           
    const tween = gsap.to(barRef.current, {scaleX: 1, transformOrigin: "top left", paused: true})

    ScrollTrigger.create({
      trigger: 'body',      
      start: "top top",
      endTrigger: textRef.current,
      end: "bottom bottom",
      once: true,      
      onLeave: ()=>{
        progressHolderRef.current.classList.remove('bottom-fixed')
      },
      onUpdate: (self)=>{                
        if (self.progress > tween.progress()) {
          tween.progress(self.progress)
        }        
      } 
    })

  }, []);
    
  
  return (
    <div className="container">
      <Link className={s.homeLink} to="/">Home</Link>
      <header className={s.header}>Header</header>
      <main className={s.main}>
        <div className={s.text} ref={textRef}>
          <p className={s.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores, deserunt earum
            eligendi et facilis fugit inventore molestiae, nostrum odio pariatur qui quibusdam quo quod repellat saepe
            sint temporibus unde voluptate. Amet cum delectus deleniti deserunt dignissimos doloribus eius est et eum
            exercitationem id iste itaque modi molestiae nesciunt nihil, pariatur perferendis placeat quae quo quod
            rerum
            vitae! A ad assumenda cupiditate dolores earum laboriosam, laudantium libero maxime qui quo quod vel, vero
            voluptas! Adipisci dolorem enim eum fugiat illo nam natus odio, pariatur sequi tempora. Autem distinctio in
            neque nesciunt officia possimus quod. Adipisci beatae cupiditate dignissimos doloribus, est explicabo harum
            illum ipsa ipsum modi nihil nulla qui repellat rerum sequi similique sit soluta unde, ut voluptatem. A ab
            accusamus aliquam blanditiis cupiditate dolore enim error est ex exercitationem expedita id illo itaque iure
            labore magni maiores maxime minus natus nobis obcaecati pariatur possimus provident quae quasi qui quidem
            quis
            quisquam quos repellat repellendus reprehenderit sapiente, sunt temporibus vel vitae voluptatum! Amet atque,
            autem blanditiis commodi deleniti eius eveniet excepturi, facilis id impedit iusto laborum minus nisi
            provident quas repellat rerum, vel! Facilis id omnis reprehenderit! Assumenda deleniti eius id modi nostrum
            quaerat quisquam quo sapiente! Alias aliquam architecto at autem beatae culpa, dolore dolores earum eveniet
            facere facilis fugiat id inventore laborum libero magnam, magni minus molestias mollitia nihil nostrum
            numquam
            officia quae quam quas qui quia quod repellat repudiandae temporibus tenetur velit, veniam voluptatibus!
            Atque, blanditiis corporis dolor, dolorem error eveniet id itaque, magnam nesciunt numquam omnis saepe
            sapiente sed voluptate voluptatibus. Architecto dolorem est hic inventore, ipsam minima molestiae nam
            veritatis. Delectus facilis pariatur temporibus vitae. Asperiores deleniti est iste iure molestiae odit
            placeat quia, veniam vitae? Alias aliquam animi, corporis deserunt ea eius incidunt nisi officia
            perferendis,
            quas similique tempora totam vitae? Ab architecto at atque consectetur consequatur, corporis deleniti dolor
            dolore dolorum exercitationem fuga fugit hic ipsam minus molestiae mollitia numquam odio possimus provident
            quaerat quis ratione totam voluptatibus? Culpa, magni repellat. Aliquid assumenda aut, autem culpa dolore
            eum
            explicabo maxime minima molestiae nisi, qui quod recusandae sed? Cumque exercitationem incidunt iusto libero
            nisi perferendis quas saepe! Ad aliquam atque autem beatae consectetur ea et eveniet explicabo facere,
            facilis
            fuga ipsa, iste libero magnam mollitia nemo nostrum obcaecati odio quas quasi quisquam repellat repellendus
            repudiandae sint soluta suscipit temporibus ullam velit veniam, voluptatem. Ab amet autem beatae consequatur
            culpa cumque, debitis ex excepturi facere illum in incidunt labore modi mollitia nostrum, odit officia
            placeat
            porro qui quibusdam quod ratione recusandae rerum sed temporibus tenetur ut voluptatem. A ab dolorum ea enim
            eveniet, facere impedit ipsa labore modi, nam quo, similique ullam voluptates. Ab adipisci asperiores
            aspernatur aut blanditiis culpa debitis distinctio ea eos esse eum ex facilis fugit hic illo in incidunt
            laborum nihil nobis nulla numquam odio omnis possimus quaerat quasi quidem sed temporibus tenetur, velit
            voluptatum. Aliquam aspernatur dolore, eius enim et hic ipsum iste modi natus nihil nobis non officia
            pariatur
            provident quisquam quo rem sapiente sunt veritatis, voluptas! Dolore!
          </p>
          <p className={s.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores, deserunt earum
            eligendi et facilis fugit inventore molestiae, nostrum odio pariatur qui quibusdam quo quod repellat saepe
            sint temporibus unde voluptate. Amet cum delectus deleniti deserunt dignissimos doloribus eius est et eum
            exercitationem id iste itaque modi molestiae nesciunt nihil, pariatur perferendis placeat quae quo quod
            rerum
            vitae! A ad assumenda cupiditate dolores earum laboriosam, laudantium libero maxime qui quo quod vel, vero
            voluptas! Adipisci dolorem enim eum fugiat illo nam natus odio, pariatur sequi tempora. Autem distinctio in
            neque nesciunt officia possimus quod. Adipisci beatae cupiditate dignissimos doloribus, est explicabo harum
            illum ipsa ipsum modi nihil nulla qui repellat rerum sequi similique sit soluta unde, ut voluptatem. A ab
            accusamus aliquam blanditiis cupiditate dolore enim error est ex exercitationem expedita id illo itaque iure
            labore magni maiores maxime minus natus nobis obcaecati pariatur possimus provident quae quasi qui quidem
            quis
            quisquam quos repellat repellendus reprehenderit sapiente, sunt temporibus vel vitae voluptatum! Amet atque,
            autem blanditiis commodi deleniti eius eveniet excepturi, facilis id impedit iusto laborum minus nisi
            provident quas repellat rerum, vel! Facilis id omnis reprehenderit! Assumenda deleniti eius id modi nostrum
            quaerat quisquam quo sapiente! Alias aliquam architecto at autem beatae culpa, dolore dolores earum eveniet
            facere facilis fugiat id inventore laborum libero magnam, magni minus molestias mollitia nihil nostrum
            numquam
            officia quae quam quas qui quia quod repellat repudiandae temporibus tenetur velit, veniam voluptatibus!
            Atque, blanditiis corporis dolor, dolorem error eveniet id itaque, magnam nesciunt numquam omnis saepe
            sapiente sed voluptate voluptatibus. Architecto dolorem est hic inventore, ipsam minima molestiae nam
            veritatis. Delectus facilis pariatur temporibus vitae. Asperiores deleniti est iste iure molestiae odit
            placeat quia, veniam vitae? Alias aliquam animi, corporis deserunt ea eius incidunt nisi officia
            perferendis,
            quas similique tempora totam vitae? Ab architecto at atque consectetur consequatur, corporis deleniti dolor
            dolore dolorum exercitationem fuga fugit hic ipsam minus molestiae mollitia numquam odio possimus provident
            quaerat quis ratione totam voluptatibus? Culpa, magni repellat. Aliquid assumenda aut, autem culpa dolore
            eum
            explicabo maxime minima molestiae nisi, qui quod recusandae sed? Cumque exercitationem incidunt iusto libero
            nisi perferendis quas saepe! Ad aliquam atque autem beatae consectetur ea et eveniet explicabo facere,
            facilis
            fuga ipsa, iste libero magnam mollitia nemo nostrum obcaecati odio quas quasi quisquam repellat repellendus
            repudiandae sint soluta suscipit temporibus ullam velit veniam, voluptatem. Ab amet autem beatae consequatur
            culpa cumque, debitis ex excepturi facere illum in incidunt labore modi mollitia nostrum, odit officia
            placeat
            porro qui quibusdam quod ratione recusandae rerum sed temporibus tenetur ut voluptatem. A ab dolorum ea enim
            eveniet, facere impedit ipsa labore modi, nam quo, similique ullam voluptates. Ab adipisci asperiores
            aspernatur aut blanditiis culpa debitis distinctio ea eos esse eum ex facilis fugit hic illo in incidunt
            laborum nihil nobis nulla numquam odio omnis possimus quaerat quasi quidem sed temporibus tenetur, velit
            voluptatum. Aliquam aspernatur dolore, eius enim et hic ipsum iste modi natus nihil nobis non officia
            pariatur
            provident quisquam quo rem sapiente sunt veritatis, voluptas! Dolore!
          </p>
          <p className={s.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores, deserunt earum
            eligendi et facilis fugit inventore molestiae, nostrum odio pariatur qui quibusdam quo quod repellat saepe
            sint temporibus unde voluptate. Amet cum delectus deleniti deserunt dignissimos doloribus eius est et eum
            exercitationem id iste itaque modi molestiae nesciunt nihil, pariatur perferendis placeat quae quo quod
            rerum
            vitae! A ad assumenda cupiditate dolores earum laboriosam, laudantium libero maxime qui quo quod vel, vero
            voluptas! Adipisci dolorem enim eum fugiat illo nam natus odio, pariatur sequi tempora. Autem distinctio in
            neque nesciunt officia possimus quod. Adipisci beatae cupiditate dignissimos doloribus, est explicabo harum
            illum ipsa ipsum modi nihil nulla qui repellat rerum sequi similique sit soluta unde, ut voluptatem. A ab
            accusamus aliquam blanditiis cupiditate dolore enim error est ex exercitationem expedita id illo itaque iure
            labore magni maiores maxime minus natus nobis obcaecati pariatur possimus provident quae quasi qui quidem
            quis
            quisquam quos repellat repellendus reprehenderit sapiente, sunt temporibus vel vitae voluptatum! Amet atque,
            autem blanditiis commodi deleniti eius eveniet excepturi, facilis id impedit iusto laborum minus nisi
            provident quas repellat rerum, vel! Facilis id omnis reprehenderit! Assumenda deleniti eius id modi nostrum
            quaerat quisquam quo sapiente! Alias aliquam architecto at autem beatae culpa, dolore dolores earum eveniet
            facere facilis fugiat id inventore laborum libero magnam, magni minus molestias mollitia nihil nostrum
            numquam
            officia quae quam quas qui quia quod repellat repudiandae temporibus tenetur velit, veniam voluptatibus!
            Atque, blanditiis corporis dolor, dolorem error eveniet id itaque, magnam nesciunt numquam omnis saepe
            sapiente sed voluptate voluptatibus. Architecto dolorem est hic inventore, ipsam minima molestiae nam
            veritatis. Delectus facilis pariatur temporibus vitae. Asperiores deleniti est iste iure molestiae odit
            placeat quia, veniam vitae? Alias aliquam animi, corporis deserunt ea eius incidunt nisi officia
            perferendis,
            quas similique tempora totam vitae? Ab architecto at atque consectetur consequatur, corporis deleniti dolor
            dolore dolorum exercitationem fuga fugit hic ipsam minus molestiae mollitia numquam odio possimus provident
            quaerat quis ratione totam voluptatibus? Culpa, magni repellat. Aliquid assumenda aut, autem culpa dolore
            eum
            explicabo maxime minima molestiae nisi, qui quod recusandae sed? Cumque exercitationem incidunt iusto libero
            nisi perferendis quas saepe! Ad aliquam atque autem beatae consectetur ea et eveniet explicabo facere,
            facilis
            fuga ipsa, iste libero magnam mollitia nemo nostrum obcaecati odio quas quasi quisquam repellat repellendus
            repudiandae sint soluta suscipit temporibus ullam velit veniam, voluptatem. Ab amet autem beatae consequatur
            culpa cumque, debitis ex excepturi facere illum in incidunt labore modi mollitia nostrum, odit officia
            placeat
            porro qui quibusdam quod ratione recusandae rerum sed temporibus tenetur ut voluptatem. A ab dolorum ea enim
            eveniet, facere impedit ipsa labore modi, nam quo, similique ullam voluptates. Ab adipisci asperiores
            aspernatur aut blanditiis culpa debitis distinctio ea eos esse eum ex facilis fugit hic illo in incidunt
            laborum nihil nobis nulla numquam odio omnis possimus quaerat quasi quidem sed temporibus tenetur, velit
            voluptatum. Aliquam aspernatur dolore, eius enim et hic ipsum iste modi natus nihil nobis non officia
            pariatur
            provident quisquam quo rem sapiente sunt veritatis, voluptas! Dolore!
          </p>
          <div className={s.reserved}>
            <div className={`${s.progressHolder} bottom-fixed`} ref={progressHolderRef}>
              <div className={s.progressWrapper}>
                <h5 className={s.progressTitle}>Reading Progress</h5>
                <div className={s.barBg}>
                  <div className={s.bar} ref={barRef}></div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={s.staff}></div>
        <div className={s.staff}></div>
        <div className={s.staff}></div>


      </main>

    </div>
  );
};

export default ProgressBar;