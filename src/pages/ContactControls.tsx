import React from "react";

class ContactControls extends React.Component {
  render() {
    return (
      <>
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

export default ContactControls;
