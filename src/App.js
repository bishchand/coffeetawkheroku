import React, { Component } from 'react';
import './App.css';


import PearsonCorrelation from './Components/PearsonCorrelation';
import HotOrCold from './Components/HotOrCold';
import MinutesTaken from './Components/MinutesTaken';
import TableOfValues from './Components/TableOfValues'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      var1: "",
      var2: "",

      pearson: 0,

      records: {
        var1: [],
        var2: []
      }
    };
  }

  handleValueChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  }

  handleAddVariables = e => {
    e.preventDefault();

    if (!this.state.var1 || !this.state.var2) {
      return;
    }

    this.state.records.var1.push(this.state.var1);
    this.state.records.var2.push(this.state.var2);

    this.setState(() => ({
      var1: "",
      var2: ""
    }));
  }

  handleClearVariables = e => {
    this.setState(() => ({
      var1: "",
      var2: "",

      pearson: 0,

      records: {
        var1: [],
        var2: []
      }
    }));
  }

  render() {
      return (
        <div className="App">
          <h1 className= 'header'> Drink Temperature vs Order Completion Time </h1>
            <br/>
              <form>
                <div className="inputValue">
                    <div className="styleGroup1">
                      <HotOrCold label="Drink Temperature" name="var1" type ="" value={this.state.var1} onChange={this.handleValueChange} />
                      <br/>
                      <small id="" className="displayText">Hot = 1 Cold = 0</small>
                  </div>
              <form/>  
                  <div className="styleGroup1">
                    <MinutesTaken label="Minutes Taken" name="var2" type= "" value={this.state.var2} onChange={this.handleValueChange} />
                    <br/>
                    <small id="" className="displayText">Write the time in minutes.</small>
                  </div>
                </div>
                <br />
            <div>
              <div>
                <input style={{borderColor: 'lightblue', borderWidth: '2.5px'}} type="button" value="Add Values" onClick={this.handleAddVariables} />
              </div>
              
            </div>
                </form>
                <br />
                <h2 className="tableHeading">Table of Values</h2>
          <div className="dataElements">
            <div className="styleGroup2" type="">
              <TableOfValues  label="Drink Temperature" values={this.state.records.var1} />
            </div>
            <div className="styleGroup2">
              <TableOfValues  label="Minutes Taken" values={this.state.records.var2} />
            </div>
          </div>
          <br />
          <h3 className="correlationResult">Correlation:</h3>
          <div className="header" id="results">
            <PearsonCorrelation var1={this.state.records.var1} var2={this.state.records.var2} />
        </div>
        </div>
       
        
    );
  }
}
export default App;
