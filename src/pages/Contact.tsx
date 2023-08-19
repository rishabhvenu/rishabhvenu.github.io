import React from "react";

class Contact extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Contact;
