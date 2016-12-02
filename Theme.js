import React, { Component } from 'react';

import './Theme.css';

class Theme extends Component {
  constructor() {
    super();
    this.state = {
      inputTextColor: '',
      inputBackgroundColor: '',
      
    }
  }
  
  _updateTextColor = (event) => {
    console.log("I am getting called Text Color");
    event.preventDefault();
    this.setState({inputTextColor: event.target.value});
  }
  _updateBackgroundColor = (event) => {
     console.log("I am getting called Background Color");
     event.preventDefault();
     this.setState({inputBackgroundColor: event.target.value});
  }
  _updateDB = (event) =>{
    console.log("I am getting called Firebase DB");
    event.preventDefault();
    this.props.dbRef.update({
      textColor : this.state.inputTextColor,
      backgroundColor : this.state.inputBackgroundColor
    })
  }

  componentDidMount(){
    console.log("Mounted ");
    //Initialize the firebase object

    this.props.dbRef.set({
      textColor: this.props.textColor,
      backgroundColor: this.props.backgroundColor

    })
    //Setup Event Handler for any value changing
    
    this.props.dbRef.on("value", (snapshot) => {
      
	    this.setState({
        inputTextColor: snapshot.val().textColor,
        inputBackgroundColor: snapshot.val().backgroundColor
      })
  
    
      })
  }

  render() {
    var inputTextColor2 = this.state.inputTextColor;
    var inputBackgroundColor2 = this.state.inputBackgroundColor;
    return (
      <div>
      
        <div id="container">
          
          
          <form id="colorForm" onSubmit={this._updateDB}>
            Text Color
            <input type="text" id="textColor" value={inputTextColor2} onChange={this._updateTextColor} /> 
            <br/>

            
            Background Color
            <input value={inputBackgroundColor2} onChange={this._updateBackgroundColor} /> <br/>
            <input type="submit" value="Save"/>
          </form>

          <div id="colorContainer" style={{
              background : this.state.inputBackgroundColor          
          }}>
            <h1 style={{
              color: this.state.inputTextColor
            }}>This is a preview of the text color</h1>
          </div>

          
        </div> 
      </div>
    );
  }
}

export default Theme;
