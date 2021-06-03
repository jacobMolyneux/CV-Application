import React, {Component} from 'react';
import InputForm from './inputs.js'

export default class GeneralInformation extends React.Component {

    render(){
        return(
            <div id = 'generalInformationSection' className = 'InputSection'>
                <InputForm title = "First Name"/>
                <InputForm title = "Phone Number"/>
                <InputForm title = "Email Address"/>
            </div>
        )
    }
        
    }
