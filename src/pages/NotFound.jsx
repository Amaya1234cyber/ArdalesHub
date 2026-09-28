import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <div className="not-found-number">
          <span>404</span>
        </div>

        <p className="eyebrow">A little off the path</p>

        <h1>
          This page has
          <br />
          <em>gone green.</em>
        </h1>

        <p className="not-found-description">
          The page you&apos;re looking for doesn&apos;t seem to exist
          anymore, or perhaps you followed a link that has moved.
        </p>

        <div className="not-found-actions">
          <NavLink to="/" className="button button-dark">
            Back to Home
            <span>→</span>
          </NavLink>

          <NavLink to="/blog" className="text-link">
            Explore the Journal <span>→</span>
          </NavLink>
        </div>
      </section>

      <section className="not-found-image">
        <img
          src="https://images.pexels.com/photos/450375/pexels-photo-450375.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Large leafy houseplant"
        />

        <div className="not-found-image-overlay" />

        <div className="not-found-image-caption">
          <span>ArdalesHub</span>
          <span>Keep growing.</span>
        </div>
      </section>
    </main>
  );
}