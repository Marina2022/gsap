import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useState} from "react";
import ScrollComp from "./ScrollComp.jsx";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Gsap1 = () => { 
  const [tab, setTab] = useState(1)
  
  return (       
<>  
  <div>
    <button onClick={()=>setTab(1)}>1</button>
    <button onClick={()=>setTab(2)}>2</button>
  </div>
  {
    tab === 1 && <ScrollComp />
  }

  {
    tab === 2 && <div>hehehe</div>  
  }
    
  
  
</>
  );
};

export default Gsap1;