import { useEffect, useState } from "react";
import { fetchCaseStudies } from "../api/contentApi";

function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetchCaseStudies().then(setCaseStudies).catch(() => setCaseStudies([]));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1>Case Studies</h1>
        <p className="lead">Numbers over noise.</p>
        <div className="stack">
          {caseStudies.map((study) => (
            <article className="card" key={study._id}>
              <h2>
                {study.client} · {study.industry}
              </h2>
              <p>
                <strong>Client problem:</strong> {study.problem}
              </p>
              <p>
                <strong>What Infix did:</strong> {study.execution}
              </p>
              <p>
                <strong>Result:</strong> {study.result}
              </p>
              <div className="metrics">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="metric-value">{metric.value}</p>
                    <p className="muted-text">{metric.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesPage;
