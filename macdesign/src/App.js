import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PropsConcept from './PropsConcept/Button'
function App() {
  return (
    <div >
      <PropsConcept 
      Heading={"Login"}
      firstname={"FirstName:"}
      firstnametype={"text"}
      secondname={"LastName:"}
      secondnametype={"text"}
      Email={"Email:"}
      Emailtype={"email"}
      Dob={"DOB:"}
      DOBtype={"date"}
      password={"Passord:"}
      security={"password"}
      color={"Color:"}
      colortype={"color"}
      button={"Click"}
      />
    </div>
  );
}

export default App;
