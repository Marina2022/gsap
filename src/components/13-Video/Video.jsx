import s from './Video.module.scss';
import video from '@/assets/site.mp4';
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const Video = () => {
  
  const videoRef = useRef()

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: videoRef.current,
  //     start: "top 30%",
  //     end: "bottom 30%",
  //     onEnter: ()=>videoRef.current.play(),
  //     onEnterBack: ()=>videoRef.current.play(),
  //     onLeave: ()=>videoRef.current.pause(),
  //     onLeaveBack: ()=>videoRef.current.pause(),
  //     markers: true,      
  //   })
  //     
  //  
  // }, []);

  
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  useEffect(() => {
    const video = videoRef.current;

    // Update duration when video metadata is loaded
    const handleLoadedMetadata = () => setDuration(video.duration);

    // Update slider position as video plays
    const handleTimeUpdate = () => setProgress(video.currentTime);

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const onInputChange = (e) => {
    const newTime = e.target.value;
    setProgress(newTime);
    videoRef.current.currentTime = newTime; // Update video progress
  };
  
  
  return (
    <div className="container">
      <Link className={s.homeLink} to="/">Home</Link>
      <div>amet animi aspernatur consequatur culpa deleniti deserunt dolore doloribus eveniet inventore iusto nam nemo
        neque nulla numquam, obcaecati omnis qui veniam vitae. A ab aliquid asperiores consectetur corporis culpa
        delectus dolor eos facilis illo labore neque nisi omnis pariatur quae reprehenderit, sequi sunt vero. Accusamus
        adipisci animi asperiores aspernatur at aut commodi consequatur delectus deserunt dicta dolor dolores ducimus
        eveniet ex fugiat labore laudantium magni natus nesciunt, nisi officia perspiciatis quae quam qui quidem quod
        quos rerum sapiente sint soluta tempore ut vel voluptatum? Adipisci aliquam esse eveniet officia sapiente!
        Accusamus accusantium, ad atque dolores dolorum, ducimus earum eligendi exercitationem expedita fuga fugiat hic
        incidunt ipsa itaque iure minima minus modi neque, nulla optio possimus quia quo reprehenderit sed sint
        temporibus voluptatum. Eos magnam, maxime perferendis possimus qui ratione totam! Ad distinctio ducimus eligendi
        esse illo ipsam nisi soluta tempore voluptate! A distinctio eveniet ex, harum, hic ipsam iure, laborum molestias
        nostrum numquam porro quas rerum sunt! Amet animi, aperiam consectetur consequuntur corporis deleniti ducimus
        earum enim esse facere facilis fuga harum iusto labore magnam maxime minus molestiae nam nobis nostrum odio
        officia pariatur quam quas quia sequi similique sint totam unde velit veritatis voluptas voluptatibus
        voluptatum! A amet animi architecto atque commodi dignissimos, doloribus dolorum enim facere illo inventore modi
        nam natus non obcaecati officia porro provident quibusdam quidem, ratione reiciendis repellat sequi temporibus
        totam veniam! Architecto asperiores culpa cupiditate dicta eius ipsam modi nihil officia porro quia quidem quo,
        soluta, vero voluptas voluptate! Architecto cumque dicta eos et fuga illum minus quia rerum sed voluptas.
        Accusantium consequuntur culpa deserunt dolor dolores id illum velit vero voluptatem, voluptates? Atque beatae
        consequatur dolore et fugit, ipsum maxime molestias mollitia, odio optio perspiciatis possimus quibusdam
        voluptates! Ad aperiam architecto asperiores assumenda beatae blanditiis consectetur consequuntur cum distinctio
        ducimus esse et eveniet exercitationem expedita illo iste iusto labore laboriosam maiores, modi molestias
        necessitatibus odio, praesentium quas quisquam ratione, repellat rerum sed voluptate voluptatum! Assumenda
        commodi fuga nesciunt odit officia officiis recusandae. Animi aperiam itaque nisi officiis tempora. Asperiores,
        at corporis facere magni obcaecati quas tenetur unde? Ad aliquid architecto aspernatur commodi cupiditate
        distinctio dolorem earum, enim eos error est harum iste iure iusto laboriosam magni molestiae necessitatibus
        neque nisi non numquam obcaecati officia perspiciatis placeat praesentium quam ratione repellat repellendus
        reprehenderit saepe, sequi similique, voluptas voluptatibus. Ad aliquam aspernatur, aut beatae distinctio
        ducimus eligendi eveniet fuga ipsam natus nisi, pariatur perspiciatis quaerat quisquam soluta tempore veritatis?
        At cupiditate excepturi explicabo ipsa laborum quis repellendus! Ea fugit reprehenderit velit! Laborum nam
        pariatur quam quidem sed! Ad adipisci aliquid aperiam cum dignissimos enim excepturi expedita hic illo nesciunt
        nihil placeat, quas quibusdam ratione recusandae sequi tempora velit? Aliquid, commodi corporis culpa delectus
        dignissimos dolor dolore ea earum excepturi expedita fugiat fugit harum impedit inventore ipsum iure labore
        laborum magnam magni maxime minus neque non, nulla praesentium quo, rerum soluta tempora ullam veritatis vitae!
        Amet dignissimos illum nesciunt nostrum porro quasi sit sunt tempora totam veniam. Asperiores beatae debitis
        dolor ea eaque fugit, illo itaque iure, molestias mollitia nam nemo nobis non praesentium, quae sit tenetur
        ullam velit vitae voluptas? Accusamus deserunt eos esse excepturi inventore magni modi nam, porro quod veniam!
        Architecto est maxime quas. Accusantium aut corporis delectus eaque eius eligendi explicabo hic illo illum in
        ipsam iste iusto magnam maiores molestias necessitatibus nemo numquam perferendis, quae quam qui quibusdam rem
        repudiandae rerum sint tempora temporibus vel? A alias architecto commodi corporis cumque cupiditate delectus
        distinctio dolor dolore dolorem ex magnam natus nemo nihil quisquam quod repellendus reprehenderit, rerum
        soluta, vel veritatis vero voluptatem. Adipisci architecto asperiores assumenda, blanditiis deleniti dignissimos
        laborum libero nulla quas repudiandae saepe sit tenetur totam veritatis voluptatum! Aspernatur, assumenda
        commodi mollitia natus nihil numquam sed similique ullam velit. Commodi dignissimos explicabo, laborum minus
        nostrum nulla perspiciatis possimus suscipit voluptates. A autem ex illum modi? Accusamus accusantium amet
        aperiam aspernatur assumenda autem, consectetur consequuntur doloremque dolorum error eum ex exercitationem
        fugit hic, id inventore iusto labore magni maxime mollitia natus nemo nostrum odit officia placeat possimus
        recusandae repellendus sapiente sint soluta tempore ut veritatis, vero! Commodi doloremque expedita officia
        optio sequi! A aliquam cum dolorum id illum minus, perspiciatis suscipit tempore! Ad adipisci aperiam
        distinctio, dolorum ipsa laudantium, optio pariatur quasi quo repellendus, repudiandae sequi tempora totam.
        Dolorem eveniet, illum possimus provident quaerat recusandae tenetur unde. Aliquid aut deleniti exercitationem
        explicabo, fuga fugit impedit in itaque laborum nam nemo nesciunt nostrum nulla perspiciatis quam quasi, quod
        repellat rerum sit sunt totam ut voluptatum. Alias aliquid aperiam aspernatur blanditiis consectetur,
        consequatur culpa cumque deleniti deserunt dignissimos doloribus et exercitationem expedita facere fuga fugit
        ipsa iste labore laborum maxime minima minus modi nam nostrum nulla numquam pariatur porro praesentium quos
        recusandae repudiandae sit sunt vero! Accusantium aliquid consectetur consequatur dicta ducimus facere hic odio
        quibusdam recusandae sunt totam, velit. Alias amet deserunt eveniet laudantium nihil quisquam reprehenderit. Ab
        adipisci aliquam asperiores beatae consequuntur cupiditate debitis deleniti distinctio dolorem ducimus error
        incidunt iusto labore laborum molestias mollitia necessitatibus, nihil nisi nostrum nulla obcaecati omnis
        pariatur praesentium quas, quasi quia reiciendis sit tempora totam ullam. Accusamus amet aut blanditiis
        consequuntur debitis delectus, deserunt ducimus explicabo hic, itaque nobis officia quae quos rerum soluta, vel?
      </div>

      <video ref={videoRef} className={s.video} controls playsInline loop muted>
        <source src={video} type="video/mp4"/>
      </video>

      <input
        className={s.input}
        type="range"
        min="0"
        max={duration}
        step="0.1"
        value={progress}
        onChange={onInputChange}
      />


      <div>amet animi aspernatur consequatur culpa deleniti deserunt dolore doloribus eveniet inventore iusto nam nemo
        neque nulla numquam, obcaecati omnis qui veniam vitae. A ab aliquid asperiores consectetur corporis culpa
        delectus dolor eos facilis illo labore neque nisi omnis pariatur quae reprehenderit, sequi sunt vero. Accusamus
        adipisci animi asperiores aspernatur at aut commodi consequatur delectus deserunt dicta dolor dolores ducimus
        eveniet ex fugiat labore laudantium magni natus nesciunt, nisi officia perspiciatis quae quam qui quidem quod
        quos rerum sapiente sint soluta tempore ut vel voluptatum? Adipisci aliquam esse eveniet officia sapiente!
        Accusamus accusantium, ad atque dolores dolorum, ducimus earum eligendi exercitationem expedita fuga fugiat hic
        incidunt ipsa itaque iure minima minus modi neque, nulla optio possimus quia quo reprehenderit sed sint
        temporibus voluptatum. Eos magnam, maxime perferendis possimus qui ratione totam! Ad distinctio ducimus eligendi
        esse illo ipsam nisi soluta tempore voluptate! A distinctio eveniet ex, harum, hic ipsam iure, laborum molestias
        nostrum numquam porro quas rerum sunt! Amet animi, aperiam consectetur consequuntur corporis deleniti ducimus
        earum enim esse facere facilis fuga harum iusto labore magnam maxime minus molestiae nam nobis nostrum odio
        officia pariatur quam quas quia sequi similique sint totam unde velit veritatis voluptas voluptatibus
        voluptatum! A amet animi architecto atque commodi dignissimos, doloribus dolorum enim facere illo inventore modi
        nam natus non obcaecati officia porro provident quibusdam quidem, ratione reiciendis repellat sequi temporibus
        totam veniam! Architecto asperiores culpa cupiditate dicta eius ipsam modi nihil officia porro quia quidem quo,
        soluta, vero voluptas voluptate! Architecto cumque dicta eos et fuga illum minus quia rerum sed voluptas.
        Accusantium consequuntur culpa deserunt dolor dolores id illum velit vero voluptatem, voluptates? Atque beatae
        consequatur dolore et fugit, ipsum maxime molestias mollitia, odio optio perspiciatis possimus quibusdam
        voluptates! Ad aperiam architecto asperiores assumenda beatae blanditiis consectetur consequuntur cum distinctio
        ducimus esse et eveniet exercitationem expedita illo iste iusto labore laboriosam maiores, modi molestias
        necessitatibus odio, praesentium quas quisquam ratione, repellat rerum sed voluptate voluptatum! Assumenda
        commodi fuga nesciunt odit officia officiis recusandae. Animi aperiam itaque nisi officiis tempora. Asperiores,
        at corporis facere magni obcaecati quas tenetur unde? Ad aliquid architecto aspernatur commodi cupiditate
        distinctio dolorem earum, enim eos error est harum iste iure iusto laboriosam magni molestiae necessitatibus
        neque nisi non numquam obcaecati officia perspiciatis placeat praesentium quam ratione repellat repellendus
        reprehenderit saepe, sequi similique, voluptas voluptatibus. Ad aliquam aspernatur, aut beatae distinctio
        ducimus eligendi eveniet fuga ipsam natus nisi, pariatur perspiciatis quaerat quisquam soluta tempore veritatis?
        At cupiditate excepturi explicabo ipsa laborum quis repellendus! Ea fugit reprehenderit velit! Laborum nam
        pariatur quam quidem sed! Ad adipisci aliquid aperiam cum dignissimos enim excepturi expedita hic illo nesciunt
        nihil placeat, quas quibusdam ratione recusandae sequi tempora velit? Aliquid, commodi corporis culpa delectus
        dignissimos dolor dolore ea earum excepturi expedita fugiat fugit harum impedit inventore ipsum iure labore
        laborum magnam magni maxime minus neque non, nulla praesentium quo, rerum soluta tempora ullam veritatis vitae!
        Amet dignissimos illum nesciunt nostrum porro quasi sit sunt tempora totam veniam. Asperiores beatae debitis
        dolor ea eaque fugit, illo itaque iure, molestias mollitia nam nemo nobis non praesentium, quae sit tenetur
        ullam velit vitae voluptas? Accusamus deserunt eos esse excepturi inventore magni modi nam, porro quod veniam!
        Architecto est maxime quas. Accusantium aut corporis delectus eaque eius eligendi explicabo hic illo illum in
        ipsam iste iusto magnam maiores molestias necessitatibus nemo numquam perferendis, quae quam qui quibusdam rem
        repudiandae rerum sint tempora temporibus vel? A alias architecto commodi corporis cumque cupiditate delectus
        distinctio dolor dolore dolorem ex magnam natus nemo nihil quisquam quod repellendus reprehenderit, rerum
        soluta, vel veritatis vero voluptatem. Adipisci architecto asperiores assumenda, blanditiis deleniti dignissimos
        laborum libero nulla quas repudiandae saepe sit tenetur totam veritatis voluptatum! Aspernatur, assumenda
        commodi mollitia natus nihil numquam sed similique ullam velit. Commodi dignissimos explicabo, laborum minus
        nostrum nulla perspiciatis possimus suscipit voluptates. A autem ex illum modi? Accusamus accusantium amet
        aperiam aspernatur assumenda autem, consectetur consequuntur doloremque dolorum error eum ex exercitationem
        fugit hic, id inventore iusto labore magni maxime mollitia natus nemo nostrum odit officia placeat possimus
        recusandae repellendus sapiente sint soluta tempore ut veritatis, vero! Commodi doloremque expedita officia
        optio sequi! A aliquam cum dolorum id illum minus, perspiciatis suscipit tempore! Ad adipisci aperiam
        distinctio, dolorum ipsa laudantium, optio pariatur quasi quo repellendus, repudiandae sequi tempora totam.
        Dolorem eveniet, illum possimus provident quaerat recusandae tenetur unde. Aliquid aut deleniti exercitationem
        explicabo, fuga fugit impedit in itaque laborum nam nemo nesciunt nostrum nulla perspiciatis quam quasi, quod
        repellat rerum sit sunt totam ut voluptatum. Alias aliquid aperiam aspernatur blanditiis consectetur,
        consequatur culpa cumque deleniti deserunt dignissimos doloribus et exercitationem expedita facere fuga fugit
        ipsa iste labore laborum maxime minima minus modi nam nostrum nulla numquam pariatur porro praesentium quos
        recusandae repudiandae sit sunt vero! Accusantium aliquid consectetur consequatur dicta ducimus facere hic odio
        quibusdam recusandae sunt totam, velit. Alias amet deserunt eveniet laudantium nihil quisquam reprehenderit. Ab
        adipisci aliquam asperiores beatae consequuntur cupiditate debitis deleniti distinctio dolorem ducimus error
        incidunt iusto labore laborum molestias mollitia necessitatibus, nihil nisi nostrum nulla obcaecati omnis
        pariatur praesentium quas, quasi quia reiciendis sit tempora totam ullam. Accusamus amet aut blanditiis
        consequuntur debitis delectus, deserunt ducimus explicabo hic, itaque nobis officia quae quos rerum soluta, vel?
      </div>

    </div>
  );
};

export default Video;