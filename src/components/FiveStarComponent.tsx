import React from "react";

class FiveStarComponent extends React.Component {
  render() {
    return (
      <>
        <div className="fivestar">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </div>
      </>
    );
  }
}

export default FiveStarComponent;
