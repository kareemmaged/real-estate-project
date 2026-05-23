import { Link } from "react-router-dom";

function Services() {
  const companyServices = [
    {
      icon: "bi-house-heart-fill",
      title: "Property Sales",
      description:
        "We guide you through the entire process of finding and purchasing your ideal luxury villa or modern apartment with complete transparency and verified paperwork.",
    },
    {
      icon: "bi-building-fill-check",
      title: "Premium Rentals",
      description:
        "Explore curated long-term and short-term leasing options in high-end communities, tailored precisely to fit your functional needs and budget restrictions.",
    },
    {
      icon: "bi-shield-shaded",
      title: "Property Management",
      description:
        "For owners and investors: we manage tenant communications, oversee routine maintenance operations, handle monthly rent collections, and protect your asset value.",
    },
    {
      icon: "bi-cash-coin",
      title: "Financial Consulting",
      description:
        "Our legal and financial specialists offer comprehensive consulting services on home mortgages, tax optimization schemes, and real estate investment portfolio growth.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Market Valuation",
      description:
        "Get highly accurate data-driven pricing reviews of your home based on current local supply trends, architectural metrics, and recent comparative closing histories.",
    },
    {
      icon: "bi-people-fill",
      title: "Legal Assistance",
      description:
        "Navigate contract generation, ownership registration protocols, and government documentation requirements smoothly with our dedicated in-house legal team.",
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <div className="text-center my-5">
        <h2 className="fw-bold text-dark display-5">Our Services</h2>
        <div
          className="mx-auto bg-dark my-3"
          style={{ height: "4px", width: "70px" }}
        ></div>
        <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
          Providing comprehensive property management and real estate brokerage
          solutions with an unyielding commitment to premium quality and client
          trust.
        </p>
      </div>

      <div className="row g-4 mt-2">
        {companyServices.map((service, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="card h-100 shadow-sm p-4 border-0 hover-invert-card text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className="mb-4 d-flex justify-content-center align-items-center rounded-circle bg-light text-dark shadow-sm"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className={`bi ${service.icon} fs-2`}></i>
                </div>

                <h4 className="card-title fw-bold mb-3 card-title-text">
                  {service.title}
                </h4>
                <p className="card-text text-secondary small lh-base card-subtitle-text">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card border-0 bg-dark text-white p-5 text-center my-5 shadow rounded-3 position-relative overflow-hidden">
        <div className="card-body position-relative" style={{ zIndex: 2 }}>
          <h3 className="fw-bold mb-3">Ready to Take the Next Step?</h3>
          <p
            className="text-light-50 mx-auto mb-4 small"
            style={{ maxWidth: "550px" }}
          >
            Whether you want to lease an apartment, register a brand new villa
            asset, or speak directly to a legal investment agent, our corporate
            service support staff is here to help you.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg fs-6 fw-bold px-4 py-2 shadow-sm"
          >
            Contact An Agent
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
