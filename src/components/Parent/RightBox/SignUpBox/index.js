import React, { useState } from "react";
import "./signUpBox.scss";

function SignUpBox() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setError("");
      window.open("https://app.loch.one/welcome");
    }
  };

  return (
    <form className="signUpForm" onSubmit={handleSubmit}>
      <h3 className="header-sign-up-box">Sign up for exclusive access</h3>
      <input
        type="email"
        className="email-input"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="error-msg">{error}</p>}
      <button type="submit" className="submit-btn">
        Get started
      </button>
      <p className="subtitle-text">
        You'll receive an email with an invite link to join.
      </p>
    </form>
  );
}

export default SignUpBox;
