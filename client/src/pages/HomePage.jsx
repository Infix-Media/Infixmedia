import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCaseStudies, fetchTestimonials } from "../api/contentApi";

const capabilities = [
  {
    title: "Digital Marketing",
    line: "Demand generation systems that turn reach into pipeline."
  },
  {
    title: "UGC Content",
    line: "Credible creative assets designed to drive action."
  },
  {
    title: "Website Development",
    line: "Fast conversion-first web experiences that close visitors."
  },
  {
    title: "Brand Campaigns",
    line: "Launch campaigns with strategy, ownership, and attribution."
  }
];

const reasons = ["Not an agency mindset", "Execution-heavy", "ROI focused", "Long-term systems, not posts"];
const process = ["Audit", "Strategy", "Execute", "Scale"];

function HomePage() {
  const [testimonials, setTestimonials] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const [testimonialData, caseData] = await Promise.all([fetchTestimonials(), fetchCaseStudies()]);
        setTestimonials(testimonialData.slice(0, 3));
        setCaseStudies(caseData.slice(0, 2));
      } catch {
        setTestimonials([]);
        setCaseStudies([]);
      }
    };

    load();
  }, []);

  return (
    <div>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Execution partner for growth-focused brands</p>
            <h1>Your brand&apos;s problems. Fixed.</h1>
            <p className="lead">
              Digital marketing, UGC, web development, and brand campaigns handled end to end.
            </p>
            <Link to="/contact" className="btn-primary">
              Work With Infix
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What We Do</h2>
          <div className="grid cols-4">
            {capabilities.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2>Why Infix</h2>
          <div className="grid cols-4">
            {reasons.map((reason) => (
              <article className="card" key={reason}>
                <p className="strong">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Proof</h2>
          <div className="logo-row">
            <span>FORGE FITNESS</span>
            <span>NORTHLINE D2C</span>
            <span>VANTA STARTUP</span>
          </div>
          <div className="grid cols-2">
            {caseStudies.map((study) => (
              <article className="card" key={study._id}>
                <h3>{study.client}</h3>
                <p>{study.result}</p>
                <ul>
                  {study.metrics?.map((metric) => (
                    <li key={metric.label}>
                      <strong>{metric.value}</strong> {metric.label}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            {testimonials.map((item) => (
              <article className="card" key={item._id}>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <p className="muted-text">
                  {item.name} · {item.company}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2>Process</h2>
          <div className="process-row">
            {process.map((step, index) => (
              <div className="process-item" key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-box">
          <h2>If growth matters, we talk.</h2>
          <Link className="btn-primary" to="/contact">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
