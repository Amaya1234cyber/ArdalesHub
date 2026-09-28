import { NavLink } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Keep it practical",
    text: "Plant care should feel approachable. We turn confusing information into simple ideas you can actually use.",
  },
  {
    number: "02",
    title: "Live with intention",
    text: "Plants can change how a space feels. We explore thoughtful ways to bring nature into everyday living.",
  },
  {
    number: "03",
    title: "Keep growing",
    text: "There is always something new to learn. ArdalesHub is a space for curiosity, experimentation and steady growth.",
  },
];

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-image">
          <img
            src="https://images.pexels.com/photos/6208081/pexels-photo-6208081.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Person caring for indoor plants"
          />
        </div>

        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="eyebrow about-eyebrow">
            About ArdalesHub
          </span>

          <h1>
            Growing a more
            <br />
            <em>intentional life.</em>
          </h1>

          <p>
            ArdalesHub explores the simple relationship between
            plants, spaces and everyday wellbeing.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro section">
        <div className="about-section-number">
          <span>01</span>
          <span>Our story</span>
        </div>

        <div className="about-intro-grid">
          <div>
            <p className="eyebrow">
              More than a plant journal
            </p>

            <h2>
              A space to learn,
              <br />
              <em>grow and breathe.</em>
            </h2>
          </div>

          <div className="about-intro-copy">
            <p>
              ArdalesHub began with a simple idea: taking care of
              plants should not feel complicated.
            </p>

            <p>
              Whether you are bringing home your first houseplant,
              trying to understand why a leaf is turning yellow, or
              simply looking for a calmer way to style your space,
              there is always something worth discovering.
            </p>

            <p>
              Through the Houseplant Journal, ArdalesHub brings
              together practical plant care, home inspiration and
              thoughtful wellbeing stories.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="about-feature section">
        <div className="about-feature-image">
          <img
            src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Green plants in an indoor environment"
            loading="lazy"
          />
        </div>

        <div className="about-feature-content">
          <span className="about-feature-label">
            Why plants?
          </span>

          <h2>
            Small green
            <br />
            things can make
            <br />
            <em>a big difference.</em>
          </h2>

          <p>
            A plant can add colour to an empty corner, life to a quiet
            room and a reason to slow down for a moment.
          </p>

          <p>
            We believe the best plant journey is not about having
            hundreds of plants. It is about understanding what you
            have, caring for it well and enjoying the process.
          </p>

          <NavLink to="/blog" className="text-link">
            Explore the journal <span>→</span>
          </NavLink>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values section section-muted">
        <div className="about-values-heading">
          <div>
            <p className="eyebrow">
              What guides us
            </p>

            <h2>
              Simple principles.
              <br />
              <em>Meaningful growth.</em>
            </h2>
          </div>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <span className="value-number">
                {value.number}
              </span>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="about-closing">
        <div className="about-closing-image">
          <img
            src="https://images.pexels.com/photos/450375/pexels-photo-450375.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Large leafy houseplant"
            loading="lazy"
          />
        </div>

        <div className="about-closing-content">
          <p className="eyebrow">
            Keep growing
          </p>

          <h2>
            Your space.
            <br />
            Your plants.
            <br />
            <em>Your journey.</em>
          </h2>

          <p>
            Welcome to ArdalesHub — a place for greener ideas
            and better everyday living.
          </p>

          <div className="about-closing-actions">
            <NavLink to="/blog" className="button button-light">
              Read the Journal
            </NavLink>

            <NavLink to="/contact" className="button button-outline-light">
              Get in touch
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
}
