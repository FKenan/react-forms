import { useRef, useState } from "react";

export default function () {
  const [passwordNotEqual, setPasswordNotEqual] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target); // formdan veri almak için kullanılır.
    console.log(formData.get("email")); // FormData kullanarak form verisi alma
    console.log(formData.getAll("hobbies")); //selectbox gibi birden fazla veri varsa getall kullanılır.

    const hobbies = formData.getAll("hobbies");
    const data = Object.fromEntries(formData.entries()); // sadece tekil verileri çeker. selectboxları bizim ayrıyetten eklememiz gerekli
    data.hobbies = hobbies;

    if (data.password !== data.repassword) {
      setPasswordNotEqual(true);
      return;
    }

    e.target.reset(); // formu resetleme
  }

  return (
    <div className="border border-primary-subtle p-4 bg-primary rounded">
      <form onSubmit={handleSubmit}>
        <div className="header ">
          <h1>Register</h1>
          <p>Please enter your login and password!</p>
        </div>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                minLength={5}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-4">
              <label htmlFor="repassword" className="form-label">
                Re-Password
              </label>
              <input
                type="password"
                className="form-control"
                id="repassword"
                name="repassword"
                required
              />
              {passwordNotEqual && (
                <div className="invalid-feedback d-block">
                  Password not match!
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="hobbies" className="form-label"></label>
          <div className="card card-body text-bg-light">
            <div className="form-check">
              <input
                type="checkbox"
                name="hobbies"
                id="cars"
                className="form-check-input"
                value="cars"
              />
              <label htmlFor="cars" className="form-check-label">
                Araba
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="hobbies"
                id="books"
                className="form-check-input"
                value="books"
              />
              <label htmlFor="books" className="form-check-label">
                Kitap
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="hobbies"
                id="movies"
                className="form-check-input"
                value="movies"
              />
              <label htmlFor="movies" className="form-check-label">
                Sinema
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-warning me-2">Submit</button>
        </div>
        <button className="btn btn-outline-light">Reset</button>
      </form>
    </div>
  );
}
