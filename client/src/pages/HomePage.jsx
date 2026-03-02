import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCaseStudies, fetchTestimonials } from "../api/contentApi";
import heroVideo from "../../media/hero_sec.MOV";
import logoLight from "../../media/bg1.PNG";

const capabilities = [
  {
    title: "Digital Marketing",
    line: "Demand generation systems that turn reach into pipeline.",
    context:
      "We build and run acquisition systems across channels, from targeting and offers to reporting, so growth is measurable every week.",
  },
  {
    title: "UGC Content",
    line: "Credible creative assets designed to drive action.",
    context:
      "We script, produce, and optimize creator-led assets that feel native to each platform while staying aligned with your positioning.",
  },
  {
    title: "Website Development",
    line: "Fast conversion-first web experiences that close visitors.",
    context:
      "Landing pages and websites are engineered for speed, clarity, and conversion with strong UX foundations and clean implementation.",
  },
  {
    title: "Brand Campaigns",
    line: "Launch campaigns with strategy, ownership, and attribution.",
    context:
      "From concept to distribution, we execute campaigns that connect message, media, and outcomes instead of vanity reach.",
  },
];

const reasons = [
  {
    title: "Not an agency mindset",
    line: "We operate like an embedded execution team focused on solving growth bottlenecks, not just delivering isolated tasks.",
  },
  {
    title: "Execution-heavy",
    line: "Strategy is paired with weekly implementation, iteration, and ownership so ideas are translated into shipped work.",
  },
  {
    title: "ROI focused",
    line: "Every initiative is tied to clear commercial outcomes such as qualified leads, conversion lift, or retention impact.",
  },
  {
    title: "Long-term systems, not posts",
    line: "We design repeatable growth systems that compound over time instead of one-off bursts that disappear after launch.",
  },
];

function HomePage() {
  const [testimonials, setTestimonials] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const [testimonialData, caseData] = await Promise.all([
          fetchTestimonials(),
          fetchCaseStudies(),
        ]);
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
          <div className="hero-copy">
            <p className="eyebrow hero-tagline">
              Execution partner for <strong>serious brands</strong>
            </p>

            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">
                Work With Infix
              </Link>
            </div>
          </div>

          <div className="hero-video-wrap">
            <video
              className="hero-video"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="hero-video-overlay">
              <img className="hero-logo" src={logoLight} alt="Infix Media" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 class="section-title">What we do</h2>
          <div className="responsive-card-grid">
            {capabilities.map((item) => (
              <article className="card detail-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2 class="section-title">Why INFiX</h2>
          <div className="responsive-card-grid">
            {reasons.map((reason) => (
              <article className="card detail-card" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Proof</h2>
          {/* <div className="logo-row">
            <span>FORGE FITNESS</span>
            <span>NORTHLINE D2C</span>
            <span>VANTA STARTUP</span>
          </div> */}
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
