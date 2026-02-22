import { useState } from "react";
import { submitContact } from "../api/contentApi";

function ContactPage() {
  const [form, setForm] = useState({ name: "", brand: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Submitting...");
    try {
      await submitContact(form);
      setStatus("Request submitted. The Infix team will reach out.");
      setForm({ name: "", brand: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("Submission failed. Email us directly at hello@infixmedia.com.");
    }
  };

  return (
    <section className="section">
      <div className="container grid cols-2 contact-grid">
        <div>
          <h1>Contact</h1>
          <p className="lead">We work with limited brands at a time.</p>
          <div className="stack">
            <a href="https://wa.me/919699696007" target="_blank" rel="noreferrer">
              WhatsApp: Start Chat
            </a>
            <a href="mailto:hello@infixmedia.com">Email: hello@infixmedia.com</a>
          </div>
        </div>
        <form className="card stack" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} required />

          <label htmlFor="brand">Brand</label>
          <input id="brand" name="brand" value={form.brand} onChange={onChange} required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={form.phone} onChange={onChange} />

          <label htmlFor="message">What needs fixing?</label>
          <textarea id="message" name="message" rows="4" value={form.message} onChange={onChange} required />

          <button type="submit" className="btn-primary">
            Send Request
          </button>
          <p className="muted-text">{status}</p>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
