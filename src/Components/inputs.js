import React, {Component} from "react";


export default class InputForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    const Information = <h1>{this.state.value}</h1>
     console.log(this.state.value); 
    event.preventDefault();
  }
  render(){
    return (<div>
      <h1>{this.props.title}</h1>
      <form onSubmit = {this.handleSubmit}>
      <input type = 'text' value = {this.state.value} onChange={this.handleChange}></input>
      <button type = 'submit'>Submit</button>
      </form>
      
    </div>
    );
  }
}


