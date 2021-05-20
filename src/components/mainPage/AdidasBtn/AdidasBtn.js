import React, { Component } from "react";
import "./AdidasBtn.scss";

class AdidasBtn extends Component {
  render() {
    return (
      <div className="btn-cont">
        <button onMouseEnter={this.props.onme} className="cat-btn">
          {this.props.text}
          <i
            style={{ display: this.props.arrow }}
            className="fas fa-long-arrow-alt-right ml-1 ml-sm-4"
          ></i>
        </button>
      </div>
    );
  }
}

export default AdidasBtn;
