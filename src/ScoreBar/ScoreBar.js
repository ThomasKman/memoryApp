import React from "react";
import Timer from "./Timer.js";
import Score from "./Score.js";
import "../App.scss";

class ScoreBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let scoreA = "ScoreA";
    let scoreB = "ScoreB";
    if (!this.props.TurnA) {
      scoreA = "ScoreA NotHighlighted";
    } else {
      scoreB = "ScoreB NotHighlighted";
    }
    return (
      <div className="ScoreBar">
        <div className={scoreA}>
          <Score
            player="Player 1"
            highlighted={this.props.TurnA}
            score={this.props.ScoreA}
          />
        </div>
        <div className="Timer">
          <Timer GameOver={this.props.GameOver} />
          <button onClick={(e) => this.props.resetGame(e)}>reset Game</button>
        </div>
        <div className={scoreB}>
          <Score
            player="Player 2"
            highlighted={!this.props.TurnA}
            score={this.props.ScoreB}
          />
        </div>
      </div>
    );
  }
}

export default ScoreBar;
