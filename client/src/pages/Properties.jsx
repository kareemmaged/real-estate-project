import { Link } from "react-router-dom";
import { propertiesList } from "../data/propertiesData";

function Properties() {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4 fw-bold text-dark">Available Properties</h2>

      <div className="row">
        {propertiesList.map((property) => (
          <div className="col-md-4 col-sm-6 mb-4" key={property.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={property.image}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt={property.title}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-semibold">{property.title}</h5>
                  <p className="card-text text-muted small mb-1">
                    <i className="bi bi-geo-alt"></i> {property.location}
                  </p>
                </div>
                <div className="mt-3">
                  <div className="text-success fw-bold fs-5 mb-2">
                    ${property.price.toLocaleString()}
                  </div>

                  <Link
                    to={`/properties/${property.id}`}
                    className="btn btn-dark w-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
