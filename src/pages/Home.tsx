import React from "react";

class Home extends React.Component {
  render() {
    return (
      <header className="container header active" id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            {/* <div className="image">
              <img src="/src/assets/download.jpg" alt="" />
            </div> */}
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I'm <span>Rishabh Venu.</span> A Software Developer.
            </h1>
            <p>
              I am a very devoted programmer that is always looking for an
              opportunity to learn new things. I have always sought out
              opportunities and challenges that are meaningful to me. I have an
              eye for detail and never let an error come between my desire to
              complete what I am coding.
            </p>
            <div className="btn-con">
              <a href="/resume.pdf" target="_blank" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
