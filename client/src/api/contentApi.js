const json = async (url, options) => {
  const response = await fetch(url, options);
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
