import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import home from "../images/home.jpg";
import slide1 from "../images/slide-1.jpg";
import slide2 from "../images/slide-2.jpg";
import slide3 from "../images/slide-3.jpg";

function Home() {
  return (
    <div>
      <div className="position-relative w-100 vh-100 bg-dark">
        <Image
          src={home}
          className="w-100 h-100 img-fluid"
          style={{ objectFit: "cover", opacity: "0.8" }}
          alt="Main Banner"
        />

        <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
          <h1
            className="display-3 fw-bold mb-3"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            Find Your Dream House
          </h1>
          <p
            className="lead fs-4"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
          >
            Best real estate properties available for sale and rent.
          </p>
        </div>
      </div>

      <div className="container py-5 my-5">
        <h2 className="text-center mb-4">About Our Services</h2>
        <p
          className="fs-5 text-secondary text-center mx-auto"
          style={{ maxWidth: "800px" }}
        >
          Our Services are designed to make finding, buying, and managing
          property simple and reliable. We provide a smooth browsing experience
          for property listings, detailed information for each home, easy search
          and filter options, and direct inquiry support so users can connect
          with the right property faster. Whether you are looking for a new
          home, an investment opportunity, or professional property assistance,
          our platform helps you explore options confidently and efficiently.
        </p>
      </div>

      <div className="w-100 ">
        <Carousel fade>
          <Carousel.Item>
            <img
              src={slide1}
              className="d-block w-100"
              style={{ height: "750px", objectFit: "cover" }}
              alt="Slide 1"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={slide2}
              className="d-block w-100"
              style={{ height: "750px", objectFit: "cover" }}
              alt="Slide 2"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={slide3}
              className="d-block w-100"
              style={{ height: "750px", objectFit: "cover" }}
              alt="Slide 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
