import s from './Home.module.scss'
import {Link} from "react-router-dom";
import Draggable from "@/components/SVG/8-Draggable/Draggable.jsx";

const Svg = () => {
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.mainNav}>
            <ul className={s.navList}>
              <li>
                <Link to="/svg-basics">SVG basics</Link>
              </li>    
              <li>
                <Link to="/svg-text">Text</Link>
              </li>      
              <li>
                <Link to="/svg-characters">SVG Characters</Link>
              </li>        
              <li>
                <Link to="/Draw-SVG-Aha">Draw SVG aha</Link>
              </li>         
              <li>
                <Link to="/JellyMenu">Jelly Menu</Link>
              </li>           
              <li>
                <Link to="/ClipPath">Clip Path</Link>
              </li>          
              <li>
                <Link to="/Masks">Masks</Link>
              </li>        
              <li>
                <Link to="/Draggable">Draggable</Link>
              </li>              
            </ul>
          </nav>
        </div>
      </header>
      <main className={s.main}>
        <div className="container">
          <div>Привет привет</div>
        </div>

      </main>
    </>
  );
};

export default Svg;