import s from './Home.module.scss'
import {Link} from "react-router-dom";

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