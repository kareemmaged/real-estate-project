import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post("http://localhost:5000/api/messages", form);
      setStatus({
        type: "success",
        message: res.data.message || "Message sent successfully!",
      });
      setForm({ name: "", email: "", text: "" }); // Reset form
    } catch (err) {
      setStatus({
        type: "danger",
        message:
          err.response?.data?.message ||
          "Failed to deliver message. Try again later.",
      });
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="text-center my-4">
        <h2 className="fw-bold text-dark">Get In Touch</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Have questions about a listing or want to schedule a viewing? Fill out
          the form or reach out directly to our support agents.
        </p>
      </div>

      <div className="row g-5 mt-2">
        <div className="col-md-5">
          <div className="card border-0 bg-dark text-white p-4 h-100 shadow">
            <div className="card-body">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-geo-alt-fill text-light fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Our Office</h6>
                  <p className="text-light-50 mb-0 small">
                    123 Real Estate Blvd, Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-telephone-fill text-light fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Phone Number</h6>
                  <p className="text-light-50 mb-0 small">+20 123 456 7890</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-envelope-fill text-light fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Email Support</h6>
                  <p className="text-light-50 mb-0 small">
                    info@realestateapp.com
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h6 className="fw-bold mb-3">Operating Hours</h6>
                <p className="small text-light-50 mb-1">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="small text-light-50">
                  Saturday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card border-0 p-4 h-100 shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold text-dark mb-4">Send a Message</h4>

              {status.message && (
                <div
                  className={`alert alert-${status.type} py-2 small`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-semibold text-secondary">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tell us what you are looking for..."
                    required
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                  ></textarea>
                </div>

                <button className="btn btn-dark btn-lg w-100 fs-6 fw-semibold py-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
