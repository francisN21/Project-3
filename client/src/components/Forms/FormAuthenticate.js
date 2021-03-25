// Import all the goodness
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "../Forms/styles.css";

// FormAuthenticate Component
const FormAuthenticate = () => {
  // Set state
  const [form, setform] = useState(true);

  // Set the variables
  const login = "Login";
  const signup = "Sign Up";

  const haveAcc = "Already have an Account?";
  const noAcc = "or";

  let formText;
  let formButton;

  if (form === !(<SignUp />)) {
    formText = haveAcc;
    formButton = login;
  } else {
    formText = noAcc;
    formButton = signup;
  }
  // Return if login, or signup page
  return (
    <div>
      <div>
        {form ? <Login /> : <SignUp />}

        <div>
          <p>{formText}</p>
          <button
            className="btn btn-primary sign-up"
            onClick={() => setform(!form)}
          >
            {formButton}
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default FormAuthenticate;
