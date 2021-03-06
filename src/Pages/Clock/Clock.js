import React from 'react';

class Clock extends React.Component{
    constructor(props){
      super(props);
      this.state = {date: new Date(),counter: 0}
  
    }
  
    componentDidMount(){
      this.ticker = setInterval(() => this.tick(),8)
    }
  
    componentWillUnmount(){
      clearInterval(this.ticker);
    }
  
    tick(){
      this.setState({
        date: new Date(),
        counter: this.state.counter + 1 
      })
    }
    render(){
        return (
          <div>
            <h1>Aktuelle Uhrzeit: {this.state.date.toLocaleTimeString()}</h1>
            <h2>Der Counter ist: {this.state.counter}</h2>
          </div>
        )
    }
}

export default Clock;