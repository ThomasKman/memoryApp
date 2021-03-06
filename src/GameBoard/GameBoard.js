import React from "react";
import Card from "./Card.js";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  createBoard() {
    let board = [];

    for (let i = 1; i < 21; i++) {
      let children = [];
      let j = 0;
      if (i < 11) {
        j = i;
      } else {
        j = i - 10;
      }
      let temp = "back face id" + j;
      board.push(<Card id={temp} />);
    }
    return board;
  }

  render() {
    return (
      <div className="GameContainer">
        <div />
        <div className="Gameboard">{this.createBoard()}</div>
        <div />
      </div>
    );
  }
}

export default GameBoard;
