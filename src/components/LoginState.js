import { useRef, useState } from "react";

export default function () {
  const [values, setValues] = useState({ email: "", password: "" });
  const emailIsInvalid  = values.email !=="" && !values.email.includes("@")
  const passwordIsInvalid = values.password !== "" && values.password.length <= 5

  function handleSubmit(e) {
    e.preventDefault();
    setValues({ email: "", password: "" });
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
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
            value={values.email}
            onChange={handleInputChange}
          />
          {emailIsInvalid && (<div className="invalid-feedback d-block">Enter valid email.</div>)}
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
            value={values.password}
            onChange={handleInputChange}
          />
          {passwordIsInvalid && (<div className="invalid-feedback d-block">Parola min. 5 karakter olmalıdır.</div>)}
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-warning me-2">Submit</button>
        </div>
        <button className="btn btn-outline-light">Reset</button>
      </form>
    </div>
  );
}
