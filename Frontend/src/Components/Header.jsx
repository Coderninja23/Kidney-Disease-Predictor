import React from "react";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import Fade from "react-reveal";

const Header = (props) => {
  const location = useLocation();
  if (!props.data) return null;
  console.log(props.name);

  // const project = props.data.project;
  // const github = props.data.github;
  const name = props.data.name;
  // console.log(name);
  const description = props.data.description;

  if (location === "/") {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <Link to="/">
              <button className="NavigationButton ">Home</button>
            </Link>
            <Link to="/predict">
              <button className="NavigationButton">Predict</button>
            </Link>
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

        <div className="row banner">
          <div className="banner-text">
            <div bottom>
              <h1 className="responsive-headline">{name}</h1>
            </div>
            <div bottom duration={1200}>
              <h3>{description}.</h3>
            </div>
            <hr />
            <div bottom duration={2000}></div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#predict">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  } else {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

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
              <button className="NavigationButton ">Predict</button>
            </Link>
            {/* <li className="current">
                  <NavLink className='smoothscroll NavBarLinkinactive' to="/">
                    Home
                  </NavLink>
                </li>
    
                
                <li>
                  <NavLink className='smoothscroll NavBarLinkactive' to="/predict">
                    Predict
                  </NavLink>
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

        <div className="row banner">
          <div className="banner-text">
            <div bottom>
              <h1 className="responsive-headline">{name}</h1>
            </div>
            <div bottom duration={1200}>
              <h3>{description}.</h3>
            </div>
            <hr />
            <div bottom duration={2000}></div>
          </div>
        </div>

        {/* <p className="scrolldown">
              <a className="smoothscroll" href="#predict">
                <i className="icon-down-circle"></i>
              </a>
            </p> */}
      </header>
    );
  }
};

export default Header;
