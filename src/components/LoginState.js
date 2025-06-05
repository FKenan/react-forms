import { useRef, useState } from "react";
import Input from "./Input";

export default function () {
  const [values, setValues] = useState({ email: "", password: "" });
  const [isEdited, setIsEdited] = useState({ email: false, password: false });

  const emailIsInvalid = isEdited.email && !values.email.includes("@");
  const passwordIsInvalid = isEdited.password && values.password.length <= 5;

  function handleSubmit(e) {
    e.preventDefault();
    setValues({ email: "", password: "" });
  }

  function handleInputBlur(e) {
    const name = e.target.name;
    setIsEdited((prev) => ({ ...prev, [name]: true }));
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    setIsEdited((prev) => ({ ...prev, [name]: false }));
  }

  return (
    <div className="border border-primary-subtle p-4 bg-primary rounded">
      <form onSubmit={handleSubmit}>
        <div className="header ">
          <h1>Login</h1>
          <p>Please enter your login and password!</p>
        </div>
        <Input
          labelText="Email"
          id="email"
          error={emailIsInvalid && "Enter valid email"}
          value={values.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="email"
          name="email"
        />
        <Input
          id="password"
          error={passwordIsInvalid && "Password is invalid"}
          labelText="Password"
          value={values.password}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="password"
          name="password"
        />
        <div className="mb-3">
          <button className="btn btn-outline-warning me-2">Submit</button>
        </div>
        <button className="btn btn-outline-light">Reset</button>
      </form>
    </div>
  );
}
