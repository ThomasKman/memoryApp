import React from "react";

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.highlighted) {
      return (
        <div className={this.props.player}>
          <h2>-{this.props.player}-</h2>
          <h2>score: {this.props.score} </h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2> {this.props.player} </h2>
          <h2>score: {this.props.score} </h2>
        </div>
      );
    }
  }
}

export default Score;
