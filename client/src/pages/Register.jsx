import { useState } from "react";
import axios from "axios";
import loginImg from "../images/login.jpg";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/api/users/register", form);
      alert("Registered Successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
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
            Create Account
          </h2>
          <p className="text-center mb-4 small card-subtitle-text">
            Join us to find your perfect property listing
          </p>

          {error && (
            <div className="alert alert-danger py-2 small">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-semibold card-label-text">
                Username
              </label>
              <input
                type="text"
                className="form-control form-control-lg fs-6 bg-transparent custom-input"
                placeholder="Choose a username"
                required
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold card-label-text">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg fs-6 bg-transparent custom-input"
                placeholder="name@example.com"
                required
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
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
                minLength="6"
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <button className="btn btn-lg w-100 fs-6 fw-semibold py-2 custom-invert-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
