import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "../Forms/styles.css";

const FormAuthenticate = () => {
  const [form, setform] = useState(true);
  // console.log(setform);

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
  return (
    <div>
      <div>
        {form ? <Login /> : <SignUp />}

        <div>
          <p>{formText}</p>
          <button2 className="btn btn-primary" onClick={() => setform(!form)}>
            {formButton}
          </button2>
        </div>
      </div>
    </div>
  );
};

export default FormAuthenticate;
