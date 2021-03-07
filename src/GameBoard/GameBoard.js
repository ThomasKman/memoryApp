import React from "react";
import Card from "./Card.js";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      flippedCardID: 0,
      flippedCardIndex: 20,
      cardStatusList: [],
      cardIdList: [],
    };
    {
      for (let i = 0; i < 20; i++) {
        this.state.cardStatusList.push("card");
      }
    }
    this.scrambleCards();
  }

  scrambleCards() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(i);
      numbers.push(i);
    }
    this.state.cardIdList = numbers.sort(() => Math.random() - 0.5);
  }

  handleClick(index, id, status) {
    if (status === "card") {
      let copy = [...this.state.cardStatusList];
      copy[index] = "card flipped";
      this.state.cardStatusList = copy;
      if (this.state.flippedCardIndex > 19) {
        this.setState({ flippedCardIndex: index, flippedCardID: id });
      } else {
        this.setState({ flippedCardID: this.props.flippedCardID });
        if (id === this.state.flippedCardID) {
          this.props.increaseScore();
          this.setState({
            flippedCardIndex: 20,
            flippedCardID: 0,
            PairsLeft: this.state.PairsLeft - 1,
          });
        } else {
          setTimeout(() => {
            let copy = [...this.state.cardStatusList];
            copy[index] = "card";
            copy[this.state.flippedCardIndex] = "card";
            this.state.cardStatusList = copy;
            this.setState({ flippedCardIndex: 20, flippedCardID: 0 });
            this.props.changeTurn();
          }, 1000);
        }
      }
    }
  }

  createBoard() {
    let board = [];
    for (let i = 1; i < 21; i++) {
      let temp = "back face id" + this.state.cardIdList[i - 1];
      board.push(
        <Card
          index={i - 1}
          id={temp}
          status={this.state.cardStatusList[i - 1]}
          handleClick={this.handleClick}
        />
      );
    }
    return board;
  }

  render() {
    return (
      <div className="GameContainer">
        <div>{this.state.flipped}</div>
        <div className="Gameboard">{this.createBoard()}</div>
        <div />
      </div>
    );
  }
}

export default GameBoard;
