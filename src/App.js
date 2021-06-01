import InputForm from './Components/inputs.js'
import EducationSection from './Components/education.js'
export default function App() {
  return (
    <div className="App">
      <InputForm title = "Name" />
      <InputForm title = "Email" />
      <InputForm title = "Phone Number" />
      <InputForm title = "Work Experience"/>
      <EducationSection/>
      </div>
  );
}



