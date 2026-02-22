const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL )
  .replace(/\/+$/, "");

const apiUrl = (path) => `${API_BASE_URL}${path}`;

const json = async (path, options) => {
  const response = await fetch(apiUrl(path), options);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
};

export const fetchServices = () => json("/api/services");
export const fetchCaseStudies = () => json("/api/case-studies");
export const fetchTestimonials = () => json("/api/testimonials");

export const submitContact = (payload) =>
  json("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
