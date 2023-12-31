import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
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
              I am a passionate software developer who can deliver high-quality
              results. With 5+ years of experience in software development, I
              thrive on creating complex yet user-friendly applications
              <br /> <br /> I started coding at the very young age of 11 out of
              sheer curiosity; I had set my eyes upon something my brother was
              programming, which seemed to be a website. From that day on, the
              journey of software development started.
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
              Developed Minecraft plugins using <b>Java</b> and <b>MySQL</b> as
              well as Discord bots using <b>Node.JS</b>
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
              Created Paper Airplane spigot plugin for youtube video using Java.
              Coded complex pathfinding AI and created custom model for
              airplane. Youtuber has <b>350K+</b> subscribers and video has{" "}
              <b>150K+</b> views
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">April 2022 - May 2022</p>
            <h5>
              Freelancer<span> - Entity Builds</span>
            </h5>
            <p>
              Created pay-as-you-play golf plugin for CryptoShack using{" "}
              <b>Java</b>. Engineered live action-bar mechanics as well as
              simulating a golf ball being hit using vector calculations.
              Company has a <b>100+</b> player average & <b>1700+</b> ETH total
              volume on OpenSea
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
              Recruited new freelancers into team by giving trial projects to
              evaluate skill
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
              Managed commissions for clients & freelancers, handled payments
              between them, and also handled any conflicts
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
