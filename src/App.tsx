import React from "react";
import "./../stylesheets/styles.scss";

class App extends React.Component {
  componentDidMount() {
    [...document.querySelectorAll(".control")].forEach((button: any) => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn")?.classList.remove("active-btn");
        button.classList.add("active-btn");
        document.querySelector(".active")?.classList.remove("active");
        document.getElementById(button.dataset.id)?.classList.add("active");
      });
    });

    document.querySelector(".theme-btn")?.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });

    document.querySelector(".submit-btn")?.addEventListener("click", () => {
      document.querySelector("form")?.submit();
    });
  }
  render() {
    return (
      <>
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
                opportunities and challenges that are meaningful to me. I have
                an eye for detail and never let an error come between my desire
                to complete what I am coding.
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
        <main>
          <section className="container about" id="about">
            <div className="main-title">
              <h2>
                About <span>me</span>
                <span className="bg-text">my stats</span>
              </h2>
            </div>
            <div className="about-container">
              <div className="left-about">
                <h4>Information About me</h4>
                <p>
                  I am a passionate software developer who can deliver
                  high-quality results. With 5+ years of experience in software
                  development, I thrive on creating complex yet user-friendly
                  applications
                  <br /> <br /> I started coding at the very young age of 11 out
                  of sheer curiosity; I had set my eyes upon something my
                  brother was programming, which seemed to be a website. From
                  that day on, the journey of software development started.
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
              <div className="right-about">
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">30+</p>
                    <p className="small-text">
                      Commissions <br /> Completed
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">5+</p>
                    <p className="small-text">
                      Years of <br /> experience
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">30+</p>
                    <p className="small-text">
                      Happy <br /> Clients
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">10+</p>
                    <p className="small-text">
                      Customer <br /> reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <h4 className="stat-title">My Skills</h4>
              <div className="progress-bars">
                <div className="progress-bar">
                  <p className="prog-title">Java</p>
                  <div className="progress-con">
                    <p className="prog-text">90%</p>
                    <div className="progress">
                      <span className="html"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">mysql</p>
                  <div className="progress-con">
                    <p className="prog-text">80%</p>
                    <div className="progress">
                      <span className="mysql"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">javascript</p>
                  <div className="progress-con">
                    <p className="prog-text">85%</p>
                    <div className="progress">
                      <span className="js"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">react</p>
                  <div className="progress-con">
                    <p className="prog-text">75%</p>
                    <div className="progress">
                      <span className="react"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">nodejs</p>
                  <div className="progress-con">
                    <p className="prog-text">85%</p>
                    <div className="progress">
                      <span className="node"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">python</p>
                  <div className="progress-con">
                    <p className="prog-text">70%</p>
                    <div className="progress">
                      <span className="python"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">February 2020 - July 2023</p>
                <h5>
                  Freelancer<span> - Senior Studios</span>
                </h5>
                <p>
                  Developed Minecraft plugins using <b>Java</b> and <b>MySQL</b>{" "}
                  as well as Discord bots using <b>Node.JS</b>
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">March 2022 - April 2022</p>
                <h5>
                  Developer<span> - TbhHonest</span>
                </h5>
                <p>
                  Created Paper Airplane spigot plugin for youtube video using
                  Java. Coded complex pathfinding AI and created custom model
                  for airplane. Youtuber has <b>350K+</b> subscribers and video
                  has <b>150K+</b> views
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">April 2020 - May 2022</p>
                <h5>
                  Freelancer<span> - Entity Builds</span>
                </h5>
                <p>
                  Created pay-as-you-play golf plugin for CryptoShack using
                  <b>Java</b>. Engineered live action-bar mechanics as well as
                  simulating a golf ball being hit using vector calculations.
                  Company has a <b>100+</b> player average & <b>1700+</b> ETH
                  total volume on OpenSea
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">February 2022 - Aug 2022</p>
                <h5>
                  Application Manager<span> - Senior Studios</span>
                </h5>
                <p>
                  Recruited new freelancers into team by giving trial projects
                  to evaluate skill
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">July 2021 - Mar 2022</p>
                <h5>
                  Commission Manager<span> - Senior Studios</span>
                </h5>
                <p>
                  Managed commissions for clients & freelancers, handled
                  payments between them, and also handled any conflicts
                </p>
              </div>
            </div>
          </section>
          <section className="container contact" id="contact">
            <div className="contact-container">
              <div className="main-title">
                <h2>
                  Contact <span>Me</span>
                  <span className="bg-text">Contact</span>
                </h2>
              </div>
              <div className="contact-content-con">
                <div className="left-contact">
                  <h4>Contact me here</h4>
                  <div className="contact-icons">
                    <div className="contact-icon">
                      <a href="https://twitter.com/RishabhVenu" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://github.com/rishabhvenu" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/rishabh-venu-459522287/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="mailto:rishiryan4@gmail.com">
                        <i className="fas fa-at"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-contact">
                  <form action="" className="contact-form">
                    <div className="input-control i-c-2">
                      <input type="text" required placeholder="YOUR NAME" />
                      <input type="email" required placeholder="YOUR EMAIL" />
                    </div>
                    <div className="input-control">
                      <input type="text" required placeholder="ENTER SUBJECT" />
                    </div>
                    <div className="input-control">
                      <textarea
                        name=""
                        id=""
                        cols={15}
                        rows={8}
                        placeholder="Message Here..."
                      ></textarea>
                    </div>
                    <div className="submit-btn">
                      <a className="main-btn">
                        <span className="btn-text">Send Message</span>
                        <span className="btn-icon">
                          <i className="fas fa-download"></i>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="controls">
          <div className="control active-btn" data-id="home">
            <i className="fas fa-home"></i>
          </div>
          <div className="control" data-id="about">
            <i className="fas fa-user"></i>
          </div>
          <div className="control" data-id="contact">
            <i className="fas fa-envelope-open"></i>
          </div>
        </div>
        <div className="theme-btn">
          <i className="fas fa-adjust"></i>
        </div>
      </>
    );
  }
}

export default App;
