import InputSection from './Components/inputs.js'

import './Components/app.css'


export default function App() {
  return (
    <div className="App">
          <InputSection title = 'First Name' name = 'inputNametest'/>
          <InputSection title = 'Last Name'/>
          <InputSection title = 'Email'/>
          <InputSection title = 'Phone Number'/>
        <div id = 'EducationDiv'>
          Education:
          <InputSection id = 'Education' title = 'School'/>
          <InputSection id = 'Education' title = 'Program'/>
          <InputSection id = 'Education' title = 'Graduation Date'/>
        </div>
        <div id = 'WorkDiv'>
          Work Experience:
          <InputSection id = 'Work' title = 'Employer'/>
          <InputSection id = 'Work' title = 'Start Date'/>
          <InputSection id = 'Work' title = 'End Date'/>
          <InputSection id = 'Work' title = 'Job Description'/>
          <InputSection id = 'Work' title = 'Job Role'/>
        </div>
      </div>
  );
}



