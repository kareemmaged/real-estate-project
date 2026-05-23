import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row g-4 justify-content-between text-start">
          
          {/* Column 1: Brand & Introduction */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 text-light">Real Estate</h5>
            <p className="text-secondary small lh-base">
              Discover, rent, and purchase premier luxury properties seamlessly. 
              We link verified residential spaces with aspiring home seekers globally.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-secondary hover-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-secondary hover-white fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-secondary hover-white fs-5"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-secondary hover-white fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <h6 className="fw-bold text-uppercase text-muted small mb-3">Explore</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-secondary text-decoration-none hover-white">Home</Link></li>
              <li><Link to="/services" className="text-secondary text-decoration-none hover-white">Services</Link></li>
              <li><Link to="/properties" className="text-secondary text-decoration-none hover-white">Properties</Link></li>
              <li><Link to="/contact" className="text-secondary text-decoration-none hover-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-6">
            <h6 className="fw-bold text-uppercase text-muted small mb-3">Members</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/login" className="text-secondary text-decoration-none hover-white">Sign In</Link></li>
              <li><Link to="/register" className="text-secondary text-decoration-none hover-white">Register Account</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase text-muted small mb-3">Office Head</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-muted"></i> Cairo, Egypt
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-muted"></i> +20 1003747140
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-muted"></i> info@realestateapp.com
              </li>
            </ul>
          </div>

        </div>

        

      </div>
    </footer>
  );
}

export default Footer;
