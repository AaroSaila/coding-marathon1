import React, { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordWeak, setPasswordWeak] = useState("Your password is weak (under 8 characters)");
  const [nationality, setNationality] = useState("fi");
  const [greeting, setGreeting] = useState("Moi");
  const [emailValidity, setEmailValidity] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);

    const validity = e.target.validity.valid;

    if (validity === true && e.target.value !== "") {
      setEmailValidity("Your email address is correct.");
    } else {
      setEmailValidity("Your email address is incorrect.")
    }
  };

  const changePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordWeak("Your password is weak (under 8 characters)");
    } else {
      setPasswordWeak("Password ok");
    }
  }

  const changeNationality = (e) => {
    setNationality(e.target.value);

    switch (e.target.value) {
      case "fi":
        setGreeting("Moi");
        break;
      case "en":
        setGreeting("Hello");
        break;
      case "de":
        setGreeting("Hallo");
        break;
      case "fr":
        setGreeting("Bonjour");
        break;
      default:
        setGreeting("ERROR: invalid nationality");
    }
  };

  const signup = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      return;
    }

    setEmail("");
    setPassword("");
    setPasswordWeak("");
    setNationality("fi");
    setGreeting("Moi");
    setEmailValidity("");
  }
  
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input 
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeEmail}
        />
        
        
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={changePassword}
          value={password}
        />
        <span>{passwordWeak}</span>

        <label htmlFor="nationality">Nationality</label>
        <select
          name="nationality"
          value={nationality}
          onChange={changeNationality}
        >
          <option value="fi">Finnish</option>   
          <option value="en">English</option>   
          <option value="de">German</option>   
          <option value="fr">French</option>   
        </select>
        <br/>
        <button id="sign-up" onClick={signup}>Sign up</button>

      </form>

      <p>{greeting}</p>
      
      <p>Your email address is: {email}</p>
      <p>{emailValidity}</p>
    </div>
  )
}

export default SignupPage
