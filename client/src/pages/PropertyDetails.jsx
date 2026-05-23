import { useParams, Link } from "react-router-dom";
import { propertiesList } from "../data/propertiesData";

function PropertyDetails() {
  const { id } = useParams();

  const property = propertiesList.find((item) => item.id === id);

  if (!property) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <div className="alert alert-danger">Property not found!</div>
        <Link to="/properties" className="btn btn-dark">
          Return to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <Link to="/properties" className="btn btn-outline-dark mb-4 btn-sm">
        <i className="bi bi-arrow-left"></i> Back to All Properties
      </Link>

      <div className="row g-5">
        <div className="col-md-7">
          <img
            src={property.image}
            className="img-fluid rounded shadow w-100"
            style={{ maxHeight: "480px", objectFit: "cover" }}
            alt={property.title}
          />
        </div>

        <div className="col-md-5">
          <span className="badge bg-success mb-2 px-3 py-2 fs-6">For Sale</span>
          <h1 className="fw-bold text-dark h2 mb-1">{property.title}</h1>
          <p className="text-muted mb-3">
            <i className="bi bi-geo-alt-fill text-secondary"></i>{" "}
            {property.location}
          </p>

          <h3 className="text-success fw-bold display-6 mb-4">
            ${property.price.toLocaleString()}
          </h3>

          <hr />

          <h5 className="fw-bold mt-4">Description</h5>
          <p className="text-secondary lh-base">{property.description}</p>

          <div className="card bg-light border-0 p-4 mt-4 rounded-3">
            <h6 className="fw-bold text-dark mb-2">
              Interested in this property?
            </h6>
            <p className="small text-muted mb-3">
              Send an inquiry and our premier regional agent will connect with
              you within 24 hours.
            </p>
            <Link to="/contact" className="btn btn-dark w-100 py-2 fw-semibold">
              Schedule a Viewing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
