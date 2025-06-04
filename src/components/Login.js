import { useRef, useState } from "react";

export default function () {
const email = useRef()      // html etiketi içinde ref={email} ile birbirine bağlarız email inputu değiştikçe bu değerde değişir
const password = useRef()

  const [values, setValues] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.current.value)
    console.log(password.current.value)
    setValues({ email: "", password: "" })
  }

  function handleInputChange(e){
    const name = e.target.name
    const value =e.target.value 
    setValues({...values,[name]:value})
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
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-warning me-2">
            Submit
          </button>
        </div>
        <button className="btn btn-outline-light">Reset</button>
      </form>
    </div>
  );
}
