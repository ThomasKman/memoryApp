import React from "react";
import Timer from "./Timer.js";
import Score from "./Score.js";
import "../App.scss";

class ScoreBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highlighted: true };
  }

  render() {
    return (
      <div className="ScoreBar">
        <div className="ScoreA">
          <Score
            player="Player 1"
            highlighted={this.state.highlighted}
            score={this.props.ScoreA}
          />
        </div>
        <div className="Timer">
          <Timer GameOver={this.props.GameOver} />
          <button onClick={(e) => this.props.resetGame(e)}>reset Game</button>
        </div>
        <div className="ScoreB">
          <Score
            player="Player 2"
            highlighted={!this.state.highlighted}
            score={this.props.ScoreB}
          />
        </div>
      </div>
    );
  }
}

export default ScoreBar;
