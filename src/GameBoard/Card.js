import React from "react";
import "../App.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CardClass: "card",
      CardFlipped: false,
    };
  }

  flipCard() {
    if (!this.state.CardFlipped) {
      this.setState({
        CardClass: "card flipped",
        CardFlipped: true,
      });
    } else {
      this.setState({
        CardClass: "card",
        CardFlipped: false,
      });
    }
  }

  render() {
    return (
      <div class={this.state.CardClass} onClick={(e) => this.flipCard(e)}>
        <div className="front face" />
        <div className={this.props.id}></div>
      </div>
    );
  }
}

export default Card;
