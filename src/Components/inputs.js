import React, { Component } from "react";

export default class InputSection extends React.Component{
  constructor(props){
    super();
    this.state ={
        value: '',
        resumeArray: [],
    };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.Change = this.Change.bind(this);
  }
  Change(event){
    this.setState({value: event.target.value});
    event.preventDefault();
  }
  onBtnClick(event){
    this.state.resumeArray.push(this.state.value);
    console.log(this.state.resumeArray);
    event.preventDefault();
  }
  render(){
    return(
      <div>
        <form class = 'userSubmitionForm'>
          <h3>{this.props.title}</h3>
          <input type ="text" value = {this.state.value} onChange = {this.Change} ></input>
          <button onClick = {this.onBtnClick}>Click Me!</button>
        </form>
        <p id = "userInfo">{this.state.value}</p>
      </div>
      
    )
  }

}

