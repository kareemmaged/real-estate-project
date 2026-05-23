import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Track scrolling behavior
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 60) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  const backgroundClass = isHomePage
    ? scrolled
      ? "nav-solid"
      : "nav-transparent"
    : "nav-solid-always";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar 
                ${visible ? "nav-show" : "nav-hide"} ${backgroundClass}`}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Real Estate
        </Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>
          <Link className="btn btn-outline-light me-2" to="/services">
            Services
          </Link>
          <Link className="btn btn-outline-light me-2" to="/properties">
            Properties
          </Link>
          <Link className="btn btn-outline-light me-2" to="/register">
            Register
          </Link>
          <Link className="btn btn-outline-light me-2" to="/contact">
            Contact
          </Link>
          <Link className="btn btn-outline-light " to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
