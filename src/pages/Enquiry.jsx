import { useState } from "react";
import { NavLink } from "react-router-dom";
import FormField from "../components/FormField";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const services = [
  "General Enquiry",
  "Collaboration",
  "Content Contribution",
  "Plant & Wellbeing",
  "Partnership",
  "Other",
];

export default function Enquiry() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Your message should be at least 15 characters.";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Temporary local submission.
    // Connect this to your backend/email service later.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="enquiry-page">
      {/* Hero */}
      <section className="enquiry-hero">
        <div className="enquiry-hero-content">
          <p className="eyebrow">Start a conversation</p>

          <h1>
            Tell us what&apos;s
            <br />
            <em>on your mind.</em>
          </h1>

          <p>
            Whether you have an idea, a question, or an opportunity
            to work together, we&apos;re open to hearing from you.
          </p>
        </div>

        <div className="enquiry-hero-number">
          <span>07</span>
          <span>Enquiry</span>
        </div>
      </section>

      {/* Main form */}
      <section className="enquiry-main section">
        <aside className="enquiry-sidebar">
          <p className="eyebrow">Let&apos;s connect</p>

          <h2>
            Every good
            <br />
            idea starts with
            <br />
            <em>a conversation.</em>
          </h2>

          <p>
            ArdalesHub is always interested in thoughtful ideas,
            useful conversations and meaningful collaborations.
          </p>

          <div className="enquiry-sidebar-links">
            <NavLink to="/contact" className="enquiry-side-link">
              <span>General Contact</span>
              <strong>→</strong>
            </NavLink>

            <NavLink to="/about" className="enquiry-side-link">
              <span>About ArdalesHub</span>
              <strong>→</strong>
            </NavLink>

            <NavLink to="/blog" className="enquiry-side-link">
              <span>Read the Journal</span>
              <strong>→</strong>
            </NavLink>
          </div>
        </aside>

        <div className="enquiry-form-container">
          <div className="enquiry-form-header">
            <span>01 - Your details</span>
            <p>Tell us a little about yourself.</p>
          </div>

          {submitted && (
            <div className="enquiry-success" role="status">
              <div className="enquiry-success-icon">✓</div>

              <div>
                <strong>Thank you for reaching out.</strong>
                <p>
                  Your enquiry has been received. We&apos;ll review
                  your message and get back to you soon.
                </p>
              </div>
            </div>
          )}

          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="enquiry-form-section">
              <div className="form-row">
                <FormField
                  id="fullName"
                  label="Full name"
                  type="text"
                  required
                  error={errors.fullName}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                />

                <FormField
                  id="email"
                  label="Email address"
                  type="email"
                  required
                  error={errors.email}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="form-row">
                <FormField
                  id="phone"
                  label="Phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234..."
                  autoComplete="tel"
                />

                <FormField
                  id="company"
                  label="Company / Organisation"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Optional"
                  autoComplete="organization"
                />
              </div>
            </div>

            <div className="enquiry-form-section">
              <div className="enquiry-form-header">
                <span>02 - Your enquiry</span>
                <p>What would you like to talk about?</p>
              </div>

              <FormField
                as="select"
                id="service"
                label="Subject"
                required
                error={errors.service}
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a subject</option>

                {services.map((service) => (
                  <option value={service} key={service}>
                    {service}
                  </option>
                ))}
              </FormField>

              <FormField
                as="textarea"
                id="message"
                label="Your message"
                required
                error={errors.message}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you're thinking..."
                rows="8"
                footer={
                  <div className="message-footer">
                    {errors.message ? (
                      <small className="form-error">
                        {errors.message}
                      </small>
                    ) : (
                      <small>
                        Please provide as much detail as you can.
                      </small>
                    )}

                    <small>{formData.message.length}/1000</small>
                  </div>
                }
              />
            </div>

            <div className="enquiry-submit-area">
              <p>
                By submitting this form, you&apos;re starting a
                conversation with ArdalesHub.
              </p>

              <button
                type="submit"
                className="button button-dark enquiry-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send enquiry"}
                {!isSubmitting && <span>→</span>}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Closing section */}
      <section className="enquiry-closing">
        <div className="enquiry-closing-image">
          <img
            src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Green plants creating a peaceful natural atmosphere"
            loading="lazy"
          />
        </div>

        <div className="enquiry-closing-overlay" />

        <div className="enquiry-closing-content">
          <p className="eyebrow">ArdalesHub</p>

          <h2>
            Let&apos;s grow
            <br />
            something <em>meaningful.</em>
          </h2>

          <p>
            Good ideas become better when they&apos;re shared.
          </p>

          <NavLink to="/blog" className="button button-light">
            Explore the Journal
          </NavLink>
        </div>
      </section>
    </div>
  );
}
