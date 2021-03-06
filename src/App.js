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
    this.checkForPair = this.checkForPair.bind(this);
    this.state = {
      secondFlip: false,
      ScoreA: 0,
      ScoreB: 0,
      TurnA: true,
      Match: false,
      GameOver: false,
    };
  }

  resetGame() {
    window.location.reload();
  }

  gameOver() {
    this.setState({
      GameOver: true,
    });
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
  }
  changeTurn() {
    this.setState({
      TurnA: !this.state.TurnA,
    });
  }

  checkForPair() {
    if (this.state.secondFlip) {
      this.changeTurn();
    }
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
        />
      </div>
    );
  }
}

export default App;
