import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class InputForm extends React.Component {
  render(){
    return <div>
      <h1>{this.props.title}</h1>
      <input type = 'text'></input>
      <button>Submit</button>
    </div>
  }
}


