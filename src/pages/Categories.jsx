import { NavLink } from "react-router-dom";
import { getAllTags } from "../data/articles";
import { slugify } from "../utils/format";

const categories = [
  {
    id: "plant-care",
    number: "01",
    title: "Plant Care",
    description:
      "Everything you need to understand your plants, from watering and lighting to repotting, feeding and everyday maintenance.",
    image:
      "https://images.pexels.com/photos/3097770/pexels-photo-3097770.jpeg?auto=compress&cs=tinysrgb&w=1600",
    featured: true,
  },
  {
    id: "home-space",
    number: "02",
    title: "Home & Space",
    description:
      "Discover thoughtful ways to introduce greenery into your rooms and create spaces that feel natural and welcoming.",
    image:
      "https://images.pexels.com/photos/6208081/pexels-photo-6208081.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "wellbeing",
    number: "03",
    title: "Wellbeing",
    description:
      "Explore the quieter side of plant life and how small green rituals can become part of a more intentional everyday routine.",
    image:
      "https://images.pexels.com/photos/450516/pexels-photo-450516.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function Categories() {
  // Pulled from real article data so every pill actually
  // matches a tag BlogListing can filter on.
  const quickTopics = getAllTags();

  return (
    <div className="categories-page">

      {/* HERO */}
      <section className="categories-hero">
        <div className="categories-hero-content">
          <p className="eyebrow">Explore ArdalesHub</p>

          <h1>
            Find your
            <br />
            <em>green corner.</em>
          </h1>

          <p className="categories-hero-description">
            Browse the journal by topic and discover practical ideas,
            inspiration and stories that fit the way you live.
          </p>
        </div>

        <div className="categories-hero-number">
          <span>03</span>
          <span>Categories</span>
        </div>
      </section>

      {/* CATEGORY INTRO */}
      <section className="categories-intro section">
        <div className="categories-intro-label">
          <span>Explore by topic</span>
        </div>

        <div className="categories-intro-grid">
          <h2>
            Start where
            <br />
            <em>you are.</em>
          </h2>

          <p>
            You don't need to know everything about plants before
            getting started. Choose a topic that interests you and
            take it one step at a time.
          </p>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="categories-list section">
        <div className="categories-cards">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/blog?category=${category.id}`}
              className={`category-large-card ${
                category.featured ? "featured" : ""
              }`}
            >
              <div className="category-large-image">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />
              </div>

              <div className="category-large-overlay" />

              <div className="category-large-content">
                <span className="category-number">
                  {category.number}
                </span>

                <h2>{category.title}</h2>

                <p>{category.description}</p>

                <span className="category-explore">
                  Explore topic <strong>→</strong>
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* QUICK TOPICS */}
      <section className="quick-topics section section-muted">
        <div className="quick-topics-heading">
          <p className="eyebrow">Quick discovery</p>

          <h2>
            Looking for
            <br />
            something specific?
          </h2>
        </div>

        <div className="topic-list">
          {quickTopics.map((topic) => (
            <NavLink
              key={topic}
              to={`/blog?topic=${slugify(topic)}`}
              className="topic-pill"
            >
              <span>{topic}</span>
              <strong>→</strong>
            </NavLink>
          ))}
        </div>
      </section>

      {/* FEATURE CTA */}
      <section className="categories-cta">
        <div className="categories-cta-image">
          <img
            src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Collection of beautiful indoor plants"
            loading="lazy"
          />
        </div>

        <div className="categories-cta-overlay" />

        <div className="categories-cta-content">
          <p className="eyebrow">
            Can't decide where to start?
          </p>

          <h2>
            Let the journal
            <br />
            <em>inspire you.</em>
          </h2>

          <p>
            Explore our latest stories and discover something
            new along the way.
          </p>

          <NavLink to="/blog" className="button button-light">
            Visit the Journal
          </NavLink>
        </div>
      </section>

    </div>
  );
}
