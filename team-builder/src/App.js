import React, { useState } from 'react';
import Form from './Form';

import './App.css';

const initialFormValues = {
    
  username: '',
  email: '',
  role: '',

}
function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [teammate, setTeammate] = useState([])

  
  const updateForm = (inputName, inputValue) => {
    
    setFormValues({ ...formValues, [inputName]: inputValue });
  }
  const submitForm = () => {
  const newTeammate = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  }

  if (!newTeammate.username || !newTeammate.email || !newTeammate.role) return;

  setTeammate([...teammate, newTeammate])
  setFormValues(initialFormValues)
  
}


  return (
    <div className="App">
      <h1>Build Your Team</h1> 
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />
    </div>
  );
}

export default App;
