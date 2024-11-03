import s from './Home.module.scss'
import {Link} from "react-router-dom";
import SplitScreenAnimation from "@/components/16-SplitScreenAnimation/SplitScreenAnimation.jsx";

const Home = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className={s.mainNav}>
            <ul className={s.navList}>
              <li>
                <Link to="/pin">Pin problem solved</Link>
              </li>
              <li>
                <Link to="/pin-2">Pin - orange square</Link>
              </li>
              <li>
                <Link to="/parallax">Basic Parallax</Link>
              </li>
              <li>
                <Link to="/parallax-car">Parallax Car</Link>
              </li>
              <li>
                <Link to="/car-parallax">Car backgrounds parallax</Link>
              </li>
              <li>
                <Link to="/prevent-scroll">Prevent Scroll</Link>
              </li>
              <li>
                <Link to="/back-to-top-btn">Back-to-top btn</Link>
              </li>
              <li>
                <Link to="/progress-bar">Progress Bar</Link>
              </li>
              <li>
                <Link to="/text-staggering">Text Staggering</Link>
              </li>
              <li>
                <Link to="/rolling-headers">Rolling Headers</Link>
              </li>
              <li>
                <Link to="/line-section-indicators">Line Section Indicators</Link>
              </li>
              <li>
                <Link to="/line-growing">Line Growing</Link>
              </li>
              <li>
                <Link to="/video">Video</Link>
              </li>
              <li>
                <Link to="/draw-svg">Draw SVG</Link>
              </li>
              <li>
                <Link to="/responsive">Responsive</Link>
              </li>
              <li>
                <Link to="/split-screen-animation">Split Screen Animation</Link>
              </li>
              <li>
                <Link to="/horizontal-scroll">Horizontal Scroll</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div>Привет привет</div>
        </div>

      </main>
    </>
  );
};

export default Home;