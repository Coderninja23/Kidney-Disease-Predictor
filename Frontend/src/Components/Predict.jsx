import './Predict.css';
import { Link } from 'react-router-dom';

import FormData from './FormData';

const Predict = () => {
  return (
    <section id='predict'>
      <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
          <Link to="/">
              <button className="NavigationButton">Home</button>
            </Link>
            <Link to="/predict">
              <button className="NavigationButton">Predict</button>
            </Link>
      
            {/* <li className="current">
              <Link className="smoothscroll" to="/">
                Home
              </Link>
            </li>

            
            <li>
              <Link className="smoothscroll" to="/predict">
                Predict
              </Link>
            </li> */}
{/* 
            <li>
              <a className="smoothscroll" href="#resume">
                About Project  
              </a>
            </li>


            <li>
              <a className="smoothscroll" href="#about">
                About Us
              </a>
            </li> */}

            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      <FormData/>
    </section>
  );
};

export default Predict;
