import { useState } from "react";
import { NavLink } from "react-router-dom";
import FormField from "../components/FormField";

const contactDetails = [
  {
    number: "01",
    title: "Visit",
    text: (
      <>
        No 26, Alagbaka Akure
        <br />
        Ondo State, Nigeria
      </>
    ),
  },
  {
    number: "02",
    title: "Call",
    text: "+234 8115 567 384",
  },
  {
    number: "03",
    title: "Email",
    text: "tajibade97@gmail.com",
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="eyebrow">Get in touch</p>

          <h1>
            Let&apos;s start a
            <br />
            <em>conversation.</em>
          </h1>

          <p className="contact-hero-description">
            Have a question about plants, the journal, collaboration,
            or simply want to say hello? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-hero-number">
          <span>06</span>
          <span>Contact</span>
        </div>
      </section>

      {/* Main contact section */}
      <section className="contact-main section">
        <div className="contact-details">
          <div className="contact-details-heading">
            <p className="eyebrow">Find us</p>

            <h2>
              We&apos;re always
              <br />
              <em>happy to hear from you.</em>
            </h2>

            <p>
              Whether you have a plant-care question, an idea for a
              collaboration, or feedback about ArdalesHub, send us a
              message and we&apos;ll get back to you.
            </p>
          </div>

          <div className="contact-detail-list">
            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.number}>
                <span className="contact-detail-number">
                  {detail.number}
                </span>

                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-note">
            <span>ArdalesHub</span>
            <p>
              Plant & Wellbeing
              <br />
              Houseplant Journal
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <span>Send a message</span>
            <p>We&apos;ll get back to you as soon as we can.</p>
          </div>

          {submitted && (
            <div className="contact-success" role="status">
              <strong>Message received.</strong>
              <span>
                Thank you for reaching out to ArdalesHub. We&apos;ll be
                in touch soon.
              </span>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <FormField
                id="name"
                label="Your name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                autoComplete="name"
                nativeRequired
              />

              <FormField
                id="email"
                label="Email address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                nativeRequired
              />
            </div>

            <FormField
              id="subject"
              label="Subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              nativeRequired
            />

            <FormField
              as="textarea"
              id="message"
              label="Your message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a little about what you'd like to discuss..."
              rows="7"
              nativeRequired
            />

            <button type="submit" className="button button-dark contact-submit">
              Send message
              <span>→</span>
            </button>
          </form>
        </div>
      </section>

      {/* Image / closing section */}
      <section className="contact-closing">
        <div className="contact-closing-image">
          <img
            src="https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Green houseplants creating a peaceful indoor space"
            loading="lazy"
          />
        </div>

        <div className="contact-closing-overlay" />

        <div className="contact-closing-content">
          <p className="eyebrow">Keep growing</p>

          <h2>
            Good things
            <br />
            <em>grow slowly.</em>
          </h2>

          <p>
            Take your time, ask questions and enjoy the process.
            There&apos;s always another leaf to discover.
          </p>

          <NavLink to="/blog" className="button button-light">
            Explore the Journal
          </NavLink>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="contact-bottom section">
        <div>
          <p className="eyebrow">Continue exploring</p>

          <h2>
            There&apos;s more
            <br />
            <em>to discover.</em>
          </h2>
        </div>

        <div className="contact-bottom-links">
          <NavLink to="/about" className="contact-nav-link">
            <span>About ArdalesHub</span>
            <strong>→</strong>
          </NavLink>

          <NavLink to="/blog" className="contact-nav-link">
            <span>Read the Journal</span>
            <strong>→</strong>
          </NavLink>

          <NavLink to="/categories" className="contact-nav-link">
            <span>Browse Categories</span>
            <strong>→</strong>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
