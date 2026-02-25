import { useState } from "react";
import { submitContact } from "../api/contentApi";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    try {
      await submitContact(form);
      setStatus("Request submitted. The Infix team will reach out.");
      setForm({
        name: "",
        brand: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });
    } catch {
      setStatus(
        "Submission failed. Email us directly at hello@infixmedia.com.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container grid cols-2 contact-grid">
        <div>
          <h1>Contact</h1>
          <p className="lead">We work with limited brands at a time.</p>
          <div className="stack">
            <a
              className="whatsapp-link"
              href="https://wa.me/919699696007?text=Hi%20Infix%20Media,%20I%20want%20to%20discuss%20my%20brand."
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={18} />
              WhatsApp: Start Chat
            </a>
            <br />
            <a href="mailto:infixmedia.co@gmail.com" className="contact-link">
              <FiMail size={18} />
              <span>Email: infixmedia.co@gmail.com</span>
            </a>
          </div>
        </div>
        <form className="card stack" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />

          <label htmlFor="brand">Brand</label>
          <input
            id="brand"
            name="brand"
            autoComplete="name"
            value={form.brand}
            onChange={onChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            type="tel"
            value={form.phone}
            onChange={onChange}
          />

          <label htmlFor="serviceInterest">Service</label>
          <input
            id="serviceInterest"
            name="serviceInterest"
            value={form.serviceInterest}
            onChange={onChange}
            required
          />

          <label htmlFor="message">What needs fixing?</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={onChange}
            required
          />

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Request"}
          </button>
          <p
            className={`muted-text ${status.includes("failed") ? "error" : "success"}`}
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
