import { NavLink } from "react-router-dom";
import { slugify } from "../utils/format";

const authorHighlights = [
  {
    number: "01",
    title: "Plant care",
    text: "Simple guidance for understanding what your plants need and helping them thrive.",
  },
  {
    number: "02",
    title: "Thoughtful spaces",
    text: "Ideas for bringing greenery into your home without making things complicated.",
  },
  {
    number: "03",
    title: "Everyday wellbeing",
    text: "Stories about slowing down, creating calm and making room for something living.",
  },
];

const authorTopics = [
  "Indoor plants",
  "Beginner plant care",
  "Home & space",
  "Plant styling",
  "Wellbeing",
  "Greener living",
];

export default function Author() {
  return (
    <div className="author-page">
      {/* Hero */}
      <section className="author-hero">
        <div className="author-hero-image">
          <img
            src="https://images.pexels.com/photos/9707240/pexels-photo-9707240.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Author surrounded by plants"
          />
        </div>

        <div className="author-hero-overlay" />

        <div className="author-hero-content">
          <p className="eyebrow">The person behind the journal</p>

          <h1>
            Meet the
            <br />
            <em>author.</em>
          </h1>

          <p>
            Sharing practical ideas, thoughtful stories and a little
            inspiration for a greener way of living.
          </p>
        </div>

        <div className="author-hero-number">
          <span>08</span>
          <span>Author</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="author-intro section">
        <div className="author-intro-label">
          <span>01</span>
          <span>A little about me</span>
        </div>

        <div className="author-intro-grid">
          <div>
            <p className="eyebrow">Hello, I&apos;m the voice behind ArdalesHub.</p>

            <h2>
              Curious about
              <br />
              <em>plants & people.</em>
            </h2>
          </div>

          <div className="author-intro-copy">
            <p>
              Welcome to ArdalesHub. This journal was created for
              anyone who believes that living with plants can be
              both simple and meaningful.
            </p>

            <p>
              I write about the everyday side of plant ownership —
              understanding light, watering properly, choosing plants
              for your space and finding small ways to make your home
              feel more alive.
            </p>

            <p>
              But ArdalesHub is about more than plants. It is also
              about creating spaces that feel good, developing simple
              routines and appreciating the quiet moments that make
              everyday life better.
            </p>

            <NavLink to="/blog" className="text-link">
              Read my latest stories <span>→</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="author-feature section section-muted">
        <div className="author-feature-image">
          <img
            src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Collection of indoor plants"
            loading="lazy"
          />
        </div>

        <div className="author-feature-content">
          <p className="eyebrow">Why I write</p>

          <h2>
            Making plant care
            <br />
            feel <em>less intimidating.</em>
          </h2>

          <p>
            There is a lot of information about houseplants online.
            Sometimes there is simply too much of it.
          </p>

          <p>
            ArdalesHub focuses on making useful information easier
            to understand — without unnecessary jargon or complicated
            routines.
          </p>

          <blockquote>
            &ldquo;You don&apos;t need a perfect home or a perfect
            collection of plants. You just need to start.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Highlights */}
      <section className="author-highlights section">
        <div className="author-highlights-heading">
          <p className="eyebrow">What you&apos;ll find here</p>

          <h2>
            Three things
            <br />
            <em>we care about.</em>
          </h2>
        </div>

        <div className="author-highlight-grid">
          {authorHighlights.map((highlight) => (
            <article
              className="author-highlight-card"
              key={highlight.number}
            >
              <span>{highlight.number}</span>

              <h3>{highlight.title}</h3>

              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="author-topics section section-muted">
        <div className="author-topics-heading">
          <p className="eyebrow">Favourite topics</p>

          <h2>
            Things I&apos;m
            <br />
            always <em>exploring.</em>
          </h2>
        </div>

        <div className="author-topic-list">
          {authorTopics.map((topic, index) => (
            <NavLink
              key={topic}
              to={`/blog?topic=${slugify(topic)}`}
              className="author-topic"
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{topic}</strong>

              <em>→</em>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="author-closing">
        <div className="author-closing-image">
          <img
            src="https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Beautiful indoor plants"
            loading="lazy"
          />
        </div>

        <div className="author-closing-overlay" />

        <div className="author-closing-content">
          <p className="eyebrow">Keep exploring</p>

          <h2>
            There&apos;s always
            <br />
            something new
            <br />
            <em>to grow.</em>
          </h2>

          <p>
            Thank you for being part of the ArdalesHub journey.
          </p>

          <div className="author-closing-actions">
            <NavLink to="/blog" className="button button-light">
              Explore the Journal
            </NavLink>

            <NavLink
              to="/contact"
              className="button button-outline-light"
            >
              Get in touch
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
