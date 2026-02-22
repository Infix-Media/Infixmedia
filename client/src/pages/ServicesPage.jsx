import { useEffect, useState } from "react";
import { fetchServices } from "../api/contentApi";

function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices().then(setServices).catch(() => setServices([]));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1>Services</h1>
        <p className="lead">Execution built for outcomes. No vanity retainers. No bloated process.</p>
        <div className="stack">
          {services.map((service) => (
            <article className="card service-card" key={service._id}>
              <h2>{service.title}</h2>
              <p>
                <strong>Problem:</strong> {service.problem}
              </p>
              <p>
                <strong>What Infix fixes:</strong> {service.fix}
              </p>
              <p>
                <strong>Deliverables:</strong>
              </p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Outcome:</strong> {service.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
