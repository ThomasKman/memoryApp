import "./App.scss";
import ScoreBar from "./ScoreBar/ScoreBar.js";
import Clock from "./Pages/Clock/Clock.js";
import React from "react";
import GameBoard from "./GameBoard/GameBoard.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increaseScore = this.increaseScore.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.changeTurn = this.changeTurn.bind(this);
    this.state = {
      PairsLeft: 9,
      ScoreA: 0,
      ScoreB: 0,
      TurnA: true,
      GameOver: false,
    };
  }

  resetGame() {
    window.location.reload();
  }

  increaseScore() {
    if (this.state.TurnA) {
      this.setState({
        ScoreA: this.state.ScoreA + 1,
      });
    } else {
      this.setState({
        ScoreB: this.state.ScoreB + 1,
      });
    }
    if (this.state.PairsLeft === 0) {
      this.setState({
        GameOver: true,
      });
    } else {
      this.setState({
        PairsLeft: this.state.PairsLeft - 1,
      });
    }
  }
  changeTurn() {
    this.setState({
      TurnA: !this.state.TurnA,
    });
  }

  render() {
    return (
      <div>
        <ScoreBar
          ScoreA={this.state.ScoreA}
          ScoreB={this.state.ScoreB}
          TurnA={this.state.TurnA}
          resetGame={this.resetGame}
          GameOver={this.state.GameOver}
        />
        <GameBoard
          increaseScore={this.increaseScore}
          gameOver={this.gameOver}
          changeTurn={this.changeTurn}
        />
      </div>
    );
  }
}

export default App;
