import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minutes: 0, seconds: 0 };
  }

  componentDidMount() {
    this.ticker = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  tick() {
    if (this.state.seconds > 58) {
      this.setState({
        minutes: this.state.minutes + 1,
        seconds: 0,
      });
    } else {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }
    if (this.props.GameOver) {
      clearInterval(this.ticker);
    }
  }

  render() {
    if (this.state.seconds > 9) {
      return (
        <h2>
          {this.state.minutes}:{this.state.seconds}
        </h2>
      );
    } else {
      return (
        <h2>
          {this.state.minutes}:0{this.state.seconds}
        </h2>
      );
    }
  }
}

export default Timer;
