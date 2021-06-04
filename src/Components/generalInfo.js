import React, {Component} from 'react';
import InputSection from './inputs.js'

export default class InformationForms extends React.Component {

    render(){
        return(
            <div id = 'GeneralInformation'>
                <InputSection title = 'Name' name = 'inputNametest'/>
                <InputSection title = 'Email'/>
                <InputSection title = 'Phone Number'/>
            <div id = 'EducationDiv'>
            <h1 class = 'sectionTitle'>Education</h1>
                <InputSection id = 'Education' title = 'School'/>
                <InputSection id = 'Education' title = 'Program'/>
                <InputSection id = 'Education' title = 'Graduation Date'/>
            </div>
            <div id = 'WorkDiv'>
                <h1 class = 'sectionTitle'>Work Experience</h1>
                <InputSection id = 'Work' title = 'Employer'/>
                <InputSection id = 'Work' title = 'Start Date'/>
                <InputSection id = 'Work' title = 'End Date'/>
                <InputSection id = 'Work' title = 'Job Description'/>
                <InputSection id = 'Work' title = 'Job Role'/>
            </div>
          </div>
        );  
    }
}
