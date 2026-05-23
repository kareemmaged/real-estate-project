import { useState } from "react";
import axios from "axios";
import loginImg from "../images/login.jpg";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        form,
      );
      alert(res.data.message);
      console.log(res.data.user);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="w-100 vh-100 d-flex justify-content-center align-items-center position-relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${loginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "80px",
      }}
    >
      <div
        className="card shadow-lg p-4 border-0 w-100 hover-invert-card"
        style={{ maxWidth: "450px", zIndex: 2 }}
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4 fw-bold card-title-text">
            Welcome Back
          </h2>
          <p className="text-center mb-4 small card-subtitle-text">
            Please enter your credentials to login.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-semibold card-label-text">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg fs-6 bg-transparent custom-input"
                placeholder="name@example.com"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="form-label small fw-semibold card-label-text">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg fs-6 bg-transparent custom-input"
                placeholder="••••••••"
                required
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button className="btn btn-lg w-100 fs-6 fw-semibold py-2 custom-invert-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
