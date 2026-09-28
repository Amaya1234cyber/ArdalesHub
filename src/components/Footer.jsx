import { NavLink } from "react-router-dom";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "About ArdalesHub", to: "/about" },
  { label: "Journal", to: "/blog" },
  { label: "Categories", to: "/categories" },
];

const supportLinks = [
  { label: "Contact", to: "/contact" },
  { label: "Enquiry", to: "/enquiry" },
  { label: "Author", to: "/author" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* NEWSLETTER */}
      <section className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <div>
            <span className="footer-kicker">
              The ArdalesHub Journal
            </span>

            <h2>
              Bring a little more
              <br />
              <em>green into your inbox.</em>
            </h2>

            <p>
              Get practical plant-care ideas, thoughtful stories and
              new journal updates without the noise.
            </p>
          </div>

          <form className="newsletter-form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              required
            />

            <button type="submit">
              Subscribe
              <span>→</span>
            </button>
          </form>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className="footer-main">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <NavLink to="/" className="footer-logo">
              <span className="footer-logo-mark">A</span>

              <span>
                <strong>ArdalesHub</strong>
                <small>Plant & Wellbeing</small>
              </span>
            </NavLink>

            <p>
              A thoughtful digital space for plant lovers,
              curious beginners and anyone looking to create
              a greener way of living.
            </p>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <h3>Explore</h3>

            <ul>
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-column">
            <h3>Connect</h3>

            <ul>
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* TOPICS */}
          <div className="footer-column">
            <h3>Topics</h3>

            <ul>
              <li>
                <NavLink to="/categories">
                  Plant Care
                </NavLink>
              </li>

              <li>
                <NavLink to="/categories">
                  Home & Space
                </NavLink>
              </li>

              <li>
                <NavLink to="/categories">
                  Wellbeing
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog">
                  Latest Stories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {currentYear} ArdalesHub. All rights reserved.
        </p>

        <p>
          Made for greener living.
        </p>
      </div>

    </footer>
  );
}