import Input from "./Input";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validation";

export default function () {
  const {
    value: emailValue, // value değerini emailValue yani başka adla alma yöntemi.
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError:emailHasError
  } = useInput("",(value)=>isEmail(value) &&isNotEmpty(value));
  const {
    value: passwordValue, 
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError:passwordHasError
  } = useInput("",value =>hasMinLength(value,5));

  function handleSubmit(e) {
    e.preventDefault();
    
    if(emailHasError || passwordHasError){
      return
    }
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
          error={emailHasError && "Enter valid email"}
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          type="email"    
          name="email"
        />
        <Input
          id="password"
          error={passwordHasError && "Password is invalid"}
          labelText="Password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
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
