import React, {Component} from "react";
import ReactDOM from "react-dom"; 
import InputForm from './inputs.js'

export default class EducationSection extends React.Component {
    render(){
        return (
            <div id = "educationSection" className = 'InputSection'>
                <h1>Education</h1>
                <InputForm title ="School"/>
                <InputForm title = "Program"/>
                <InputForm title = "Graduation Date" />
            </div>
        )
        
    }
}