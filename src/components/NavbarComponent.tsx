import React from "react";
import "./../../stylesheets/Navbar.scss";

class NavbarComponent extends React.Component {
  render() {
    return (
      <>
        <nav id="nav">
          <div className="container">
            <div className="logo">
              <a href="#">Rishabh Venu</a>
            </div>
            <div id="mainListDiv" className="main_list">
              <ul className="navlinks">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <span className="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
        <section className="home"></section>
      </>
    );
  }
}

export default NavbarComponent;
