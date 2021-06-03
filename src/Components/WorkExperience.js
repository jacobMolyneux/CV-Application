import React, {Component} from 'react';
import InputForm from './inputs'

export default class WorkExperience extends React.Component{
    render(){
        return(
            <div id = "workExperienceSection" className = 'InputSection'>
                <h1>Work Experience</h1>
                <InputForm title = "Employer"/>
                <InputForm title = "Job Title"/>
                <InputForm title = "Job Details"/>
            </div>
        )
    }
}