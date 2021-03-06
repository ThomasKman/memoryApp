import React from 'react';
import CurrencyInput from './CurrencyInput.js';

  class CurrencyCalculator extends React.Component {
    constructor(props){
      super(props);
      this.state= {currency: 'Euro',value:''}
      this.handlEuroChange = this.handleEuroChange.bind(this);
      this.handleDollarChange = this.handleDollarChange.bind(this);
    }
  
    handleEuroChange(value){
      this.setState({currency: 'Euro',value})
    }
    handleDollarChange(value){
      this.setState({currency: 'Dollar',value})
    }
  
  
    render(){
      let euro=0;
      let dollar =0;
      const value = this.state.value;
      const currency = this.state.currency;
      if(currency === "Euro"){
        euro = value;
        dollar = 1.13*value;
      }
      else{
        dollar = value;
        euro= 0.88*value;
      }
      return(
        <div>
          <CurrencyInput currency="Euro" value={euro} onCurrencyChange={this.handlEuroChange}/>
          <CurrencyInput currency="Dollar" value={dollar} onCurrencyChange={this.handleDollarChange}/>
        </div>
      );
  
    }
  
  }

  export default CurrencyCalculator;