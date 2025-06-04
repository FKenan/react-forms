import { useRef, useState } from "react";

export default function () {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const email = useRef(); // html etiketi içinde ref={email} ile birbirine bağlarız email inputu değiştikçe bu değerde değişir
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setEmailError(false)
    setPasswordError(false)
    
    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    const emailIsInvalid = !emailVal.includes("@");
    const passwordIsInvalid = passwordVal.length <= 5;

    if (emailIsInvalid) {
      setEmailError(true);
      return;
    }

    if (passwordIsInvalid) {
      setPasswordError(true);
      return;
    }

    setEmailError(false)
    setPasswordError(false)

    email.current.value = "";
    password.current.value = "";
  }

  return (
    <div className="border border-primary-subtle p-4 bg-primary rounded">
      <form onSubmit={handleSubmit}>
        <div className="header ">
          <h1>Login</h1>
          <p>Please enter your login and password!</p>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            ref={email}
          />
          {emailIsInvalid && (
            <div className="invalid-feedback d-block">Enter valid email.</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            ref={password}
          />
          {passwordIsInvalid && (
            <div className="invalid-feedback d-block">
              Parola min. 5 karakter olmalıdır.
            </div>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-warning me-2">Submit</button>
        </div>
        <button className="btn btn-outline-light">Reset</button>
      </form>
    </div>
  );
}
