import { NavLink } from "react-router-dom";
import { getFeaturedArticles } from "../data/articles";
import { formatDate } from "../utils/format";

const categories = [
  {
    title: "Plant Care",
    description: "Simple, practical guidance for keeping your plants healthy.",
    image:
      "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Home & Space",
    description: "Ideas for bringing natural beauty into your everyday spaces.",
    image:
      "https://images.pexels.com/photos/8988966/pexels-photo-8988966.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Wellbeing",
    description: "Explore the relationship between plants, calm and everyday living.",
    image:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function StoryCard({ story }) {
  return (
    <article className="story-card">
      <NavLink to={`/blog/${story.slug}`} className="story-card-image">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
        />
      </NavLink>

      <div className="story-card-body">
        <span className="eyebrow">{story.category}</span>

        <h3>
          <NavLink to={`/blog/${story.slug}`}>
            {story.title}
          </NavLink>
        </h3>

        <p>{story.excerpt}</p>

        <div className="story-meta">
          <span>{formatDate(story.date)}</span>
          <span>{story.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  // Real featured articles from articles.js, capped at 3 for the homepage grid.
  const featuredStories = getFeaturedArticles(3);

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-image">
          <img
            src="https://images.pexels.com/photos/9707240/pexels-photo-9707240.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Beautiful indoor space surrounded by houseplants"
          />
        </div>

        <div className="home-hero-overlay" />

        <div className="home-hero-content">
          <span className="hero-kicker">
            ArdalesHub · Houseplant Journal
          </span>

          <h1>
            Grow a greener
            <br />
            <em>way of living.</em>
          </h1>

          <p>
            Practical plant care, thoughtful spaces and simple ideas
            for creating a calmer relationship with nature at home.
          </p>

          <div className="hero-actions">
            <NavLink to="/blog" className="button button-light">
              Explore the Journal
            </NavLink>

            <NavLink to="/about" className="button button-outline-light">
              Discover ArdalesHub
            </NavLink>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro section">
        <div className="section-label">
          <span>01</span>
          <span>Our approach</span>
        </div>

        <div className="intro-grid">
          <div>
            <p className="eyebrow">Welcome to ArdalesHub</p>

            <h2>
              Plants are more than
              <br />
              <em>decoration.</em>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              ArdalesHub is a growing digital space for people who want
              to understand plants, care for them confidently and create
              spaces that feel more connected to nature.
            </p>

            <p>
              From beginner-friendly plant care to thoughtful home
              styling and wellbeing, our journal keeps things practical,
              beautiful and easy to understand.
            </p>

            <NavLink to="/about" className="text-link">
              Learn more about us <span>→</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="featured-section section section-muted">
        <div className="section-heading">
          <div>
            <p className="eyebrow">From the journal</p>

            <h2>
              Stories for
              <br />
              greener living.
            </h2>
          </div>

          <NavLink to="/blog" className="text-link">
            View all stories <span>→</span>
          </NavLink>
        </div>

        <div className="story-grid">
          {featuredStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="category-section section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore by topic</p>

            <h2>
              Find what
              <br />
              <em>inspires you.</em>
            </h2>
          </div>

          <NavLink to="/categories" className="text-link">
            Browse categories <span>→</span>
          </NavLink>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <NavLink
              to="/categories"
              className="category-card"
              key={category.title}
            >
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
              />

              <div className="category-card-overlay" />

              <div className="category-card-content">
                <span>{category.title}</span>
                <p>{category.description}</p>
                <strong>Explore →</strong>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* WELLBEING FEATURE */}
      <section className="wellbeing-section section">
        <div className="wellbeing-image">
          <img
            src="https://images.pexels.com/photos/7412111/pexels-photo-7412111.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Peaceful bedroom decorated with indoor plants"
            loading="lazy"
          />
        </div>

        <div className="wellbeing-content">
          <p className="eyebrow">Plants & wellbeing</p>

          <h2>
            Make room for
            <br />
            <em>something living.</em>
          </h2>

          <p>
            A plant does not need to transform your entire home.
            Sometimes, one green corner is enough to make a space
            feel different.
          </p>

          <p>
            We explore the small habits and thoughtful choices that
            help plants become part of a more intentional everyday life.
          </p>

          <NavLink to="/blog" className="button button-dark">
            Read wellbeing stories
          </NavLink>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <p className="eyebrow">Start your journey</p>

          <h2>
            A greener home
            <br />
            starts with <em>one plant.</em>
          </h2>

          <p>
            Explore practical guides, discover new ideas and grow
            something beautiful with ArdalesHub.
          </p>

          <NavLink to="/blog" className="button button-light">
            Explore ArdalesHub
          </NavLink>
        </div>
      </section>

    </div>
  );
}
