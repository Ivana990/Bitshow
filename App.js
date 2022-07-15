import React from "react";
import HomePage from "./Pages/HomePage"
import SinglePage from "./Pages/SinglePage"

class App extends React.Component{

  constructor(props){
    super(props)
    this.konstanta = 0
    this.increaseCounter = this.increaseCounter.bind(this)
    this.povecajKonstantu = this.povecajKonstantu.bind(this)
    this.changePage = this.changePage.bind(this)

    this.state = {
      counter: 0,
      onHomePage: true
    }
    console.log(this.konstanta);
  }

  increaseCounter(){
    this.setState({
      counter:this.state.counter + 1
    })
  }

  povecajKonstantu(){
    this.konstanta = 2
    console.log(this.konstanta);
  }

  changePage(){
    this.setState({
      onHomePage : !this.state.onHomePage
    });
  }

  render (){
    return (
     <div>
        <h1>HELLO FROM APP COMPONENT :)</h1>
        <div>{this.state.counter}</div>
        <button onClick={this.increaseCounter}>Povecaj counter</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>{this.konstanta}</h2>
        <button onClick={this.povecajKonstantu}>Povecaj konstantu</button>
        <br></br>
        <br></br> 
        <br></br>
        <br></br>
        <button onClick={this.changePage}>Toggle Page</button>
        {this.state.onHomePage ? <HomePage/> : <SinglePage/>}    
      </div>
    );
  }
}

export default App;