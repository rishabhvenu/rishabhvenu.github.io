import React from "react";
import FiveStarComponent from "../components/FiveStarComponent";

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
              thrive on creating complex yet user-friendly applications.
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
        <h4 className="stat-title">Reviews</h4>
        <div className="timeline">
          <div className="timeline-item">
            <div className="tl-icon">
              <img className="pfp" src="/RebelKnoxProfilePicture.jpg" />
            </div>
            <p className="pfp-title">RebelKnox</p> <FiveStarComponent />
            <br /> <br />
            <p className="reviewtext">
              Vouch vouch, vouch vouch, vouch to the vouch and vouch to the
              vouch to the vouch. I can't say it enough, great job with my
              project!! Hard worker and dedicates time and extreme effort to
              clients. Will do more business in the future.
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <img className="pfp" src="/NekoretLineProfilePicture.jpg" />
            </div>
            <p className="pfp-title">Nekoret Lin</p> <FiveStarComponent />
            <br /> <br />
            <p className="reviewtext">
              He is the MOST efficient developer I ever seen! Vouch him 🙂
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <img className="pfp" src="/Kevintr303ProfilePicture.jpeg" />
            </div>
            <p className="pfp-title">kevintr303</p> <FiveStarComponent />
            <br /> <br />
            <p className="reviewtext">
              Communication from this developer is amazing, and he is also a
              great developer overall. There were some issues and
              miscommunication with the plugin, but he was able to fix
              everything to exactly how I wanted it. I highly recommend
              considering him to be your plugin's developer. His prices are
              amazing for the quality that he gives.
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <img className="pfp" src="/SaymoanProfilePicture.jpg" />
            </div>
            <p className="pfp-title">Saymoan</p> <FiveStarComponent />
            <br /> <br />
            <p className="reviewtext">
              Vouch! Friendly. Fast. Great person. Needed a plugin made to fix
              an issue and he made exactly what I wanted. Even exceed my
              expectations with how well it works after forgetting to list
              plugins that need it will need to be compatible with. Gave a great
              price for a great plugin. If you need a plugin, here is your guy!
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <img className="pfp" src="/MrBorderProfilePicture.jpg" />
            </div>
            <p className="pfp-title">MrBorder</p> <FiveStarComponent />
            <br /> <br />
            <p className="reviewtext">
              Vouch. amazing dev and easy to work with
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <img className="pfp" src="/NordLordProfilePicture.png" />
            </div>
            <p className="pfp-title">NordLord</p> <FiveStarComponent />
            <br /> <br />
            <p className="reviewtext">
              Vouch. Went above and beyond on features despite not needing to!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
