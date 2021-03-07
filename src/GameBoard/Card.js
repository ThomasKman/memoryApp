import React from "react";
import "../App.scss";

class Card extends React.Component {
  render() {
    return (
      <div
        className={this.props.status}
        onClick={(e) =>
          this.props.handleClick(
            this.props.index,
            this.props.id.charAt(12),
            this.props.status
          )
        }
      >
        <div className="front face" />
        <div className={this.props.id}></div>
      </div>
    );
  }
}

export default Card;
