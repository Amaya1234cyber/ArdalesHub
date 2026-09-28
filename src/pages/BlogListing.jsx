import { useMemo, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import {
  getSortedArticles,
  getAllCategories,
  getAllTags,
} from "../data/articles";
import { formatDate, slugify } from "../utils/format";

function getCategorySlug(category) {
  return slugify(category);
}

export default function BlogListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const allArticles = useMemo(() => getSortedArticles(), []);
  const categories = useMemo(() => getAllCategories(), []);
  const tags = useMemo(() => getAllTags(), []);

  const categoryParam = searchParams.get("category") || "";
  const topicParam = searchParams.get("topic") || "";

  const activeCategory = categories.find(
    (category) => getCategorySlug(category) === categoryParam
  );

  const activeTopic = tags.find(
    (tag) => slugify(tag) === topicParam
  );

  function updateParams({
    category = "",
    topic = "",
    searchValue = "",
  } = {}) {
    const next = new URLSearchParams();

    if (category) {
      next.set("category", getCategorySlug(category));
    }

    if (topic) {
      next.set("topic", slugify(topic));
    }

    if (searchValue.trim()) {
      next.set("search", searchValue.trim());
    }

    setSearchParams(next);
  }

  function handleCategory(category) {
    setSearch("");
    updateParams({
      category: category === "All" ? "" : category,
    });
  }

  function handleTopic(topic) {
    setSearch("");
    updateParams({ topic });
  }

  function handleSearch(event) {
    const value = event.target.value;

    setSearch(value);

    const next = new URLSearchParams();

    if (value.trim()) {
      next.set("search", value.trim());
    }

    setSearchParams(next);
  }

  function clearFilters() {
    setSearch("");
    setSearchParams({});
  }

  const filteredArticles = useMemo(() => {
    let result = allArticles;

    if (activeCategory) {
      result = result.filter(
        (article) =>
          getCategorySlug(article.category) === categoryParam
      );
    }

    if (activeTopic) {
      result = result.filter((article) =>
        article.tags.some(
          (tag) => slugify(tag) === topicParam
        )
      );
    }

    const query = search.trim().toLowerCase();

    if (query) {
      result = result.filter((article) => {
        const searchableText = [
          article.title,
          article.excerpt,
          article.category,
          ...article.tags,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      });
    }

    return result;
  }, [
    allArticles,
    activeCategory,
    activeTopic,
    categoryParam,
    topicParam,
    search,
  ]);

  const featuredArticle = allArticles.find(
    (article) => article.featured
  );

  const hasActiveFilters =
    Boolean(activeCategory) ||
    Boolean(activeTopic) ||
    Boolean(search.trim());

  const activeFilterLabel = activeTopic
    ? activeTopic
    : activeCategory
      ? activeCategory
      : "";

  /*
   * Keep the featured article at the top only when
   * the user isn't filtering or searching.
   */
  const latestArticles = hasActiveFilters
    ? filteredArticles
    : filteredArticles.filter(
        (article) => article.id !== featuredArticle?.id
      );

  return (
    <div className="blog-listing-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="blog-listing-hero">
        <div className="blog-listing-hero-content">
          <p className="eyebrow">The ArdalesHub Journal</p>

          <h1>
            Stories, ideas &amp;
            <br />
            <em>plant wisdom.</em>
          </h1>

          <p>
            Practical guidance, thoughtful essays and quiet
            inspiration for anyone who loves living with plants.
          </p>
        </div>

        <div className="blog-listing-hero-meta">
          <div className="blog-listing-count">
            <span>{allArticles.length}</span>
            <span>Articles</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED STORY
      ====================================================== */}
      {!hasActiveFilters && featuredArticle && (
        <section className="blog-featured section">
          <div className="blog-featured-image">
            <NavLink to={`/blog/${featuredArticle.slug}`}>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
              />
            </NavLink>
          </div>

          <div className="blog-featured-content">
            <div className="blog-featured-label">
              <span>Featured story</span>
              <span>{featuredArticle.readTime}</span>
            </div>

            <p className="eyebrow">
              {featuredArticle.category}
            </p>

            <h2>
              <NavLink to={`/blog/${featuredArticle.slug}`}>
                {featuredArticle.title}
              </NavLink>
            </h2>

            <p className="blog-featured-excerpt">
              {featuredArticle.excerpt}
            </p>

            <div className="blog-featured-meta">
              <span>{formatDate(featuredArticle.date)}</span>
              <span>·</span>
              <span>{featuredArticle.readTime}</span>
            </div>

            <NavLink
              to={`/blog/${featuredArticle.slug}`}
              className="button button-dark"
            >
              Read featured story
              <span>→</span>
            </NavLink>
          </div>
        </section>
      )}

      {/* =====================================================
          FILTER BAR
      ====================================================== */}
      <section className="blog-filter-bar">
        <div className="blog-filter-inner">
          <div className="blog-filter-categories">
            <button
              type="button"
              className={`blog-filter-btn ${
                !activeCategory && !activeTopic && !search.trim()
                  ? "active"
                  : ""
              }`}
              onClick={clearFilters}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`blog-filter-btn ${
                  activeCategory === category && !activeTopic
                    ? "active"
                    : ""
                }`}
                onClick={() => handleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-filter-search">
            <label htmlFor="journal-search">
              Search
            </label>

            <input
              id="journal-search"
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search articles..."
              aria-label="Search articles"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPICS
      ====================================================== */}
      {!activeTopic && (
        <section className="blog-topics">
          <div className="blog-topics-inner">
            <span className="blog-topics-label">
              Explore topics
            </span>

            <div className="blog-tag-strip">
              {tags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  className="blog-tag"
                  onClick={() => handleTopic(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          ACTIVE FILTER
      ====================================================== */}
      {hasActiveFilters && (
        <section className="blog-active-filter section">
          <div>
            <span className="blog-active-filter-label">
              {search.trim()
                ? "Search results"
                : "Current selection"}
            </span>

            <strong>
              {search.trim()
                ? `"${search.trim()}"`
                : activeFilterLabel}
            </strong>

            <span className="blog-result-count">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1
                ? "article"
                : "articles"}
            </span>
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="blog-clear-filter"
          >
            Clear filters
            <span>×</span>
          </button>
        </section>
      )}

      {/* =====================================================
          LATEST STORIES
      ====================================================== */}
      <section className="blog-grid-section section">
        <div className="blog-section-heading">
          <div>
            <p className="eyebrow">
              {hasActiveFilters
                ? "Journal results"
                : "Latest stories"}
            </p>

            <h2>
              Ideas worth
              <br />
              <em>coming back to.</em>
            </h2>
          </div>

          <span className="blog-section-count">
            {filteredArticles.length} stories
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="blog-empty">
            <span className="blog-empty-number">00</span>

            <p className="eyebrow">
              Nothing found
            </p>

            <h3>
              We couldn&apos;t find
              <br />
              <em>that story.</em>
            </h3>

            <p>
              Try another search term or explore all of
              the stories in the journal.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="button button-dark"
            >
              View all stories
              <span>→</span>
            </button>
          </div>
        ) : (
          <div className="blog-grid">
            {latestArticles.map((article, index) => (
              <article
                key={article.id}
                className={`blog-card ${
                  index === 0 && hasActiveFilters
                    ? "blog-card--featured"
                    : ""
                }`}
              >
                <NavLink
                  to={`/blog/${article.slug}`}
                  className="blog-card-image-link"
                >
                  <div className="blog-card-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </div>
                </NavLink>

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <button
                      type="button"
                      className="blog-card-category"
                      onClick={() =>
                        handleCategory(article.category)
                      }
                    >
                      {article.category}
                    </button>

                    <span>
                      {formatDate(article.date)}
                    </span>

                    <span>{article.readTime}</span>
                  </div>

                  <NavLink
                    to={`/blog/${article.slug}`}
                    className="blog-card-title-link"
                  >
                    <h2>{article.title}</h2>
                  </NavLink>

                  <p className="blog-card-excerpt">
                    {article.excerpt}
                  </p>

                  <NavLink
                    to={`/blog/${article.slug}`}
                    className="text-link blog-card-read"
                  >
                    Read article
                    <span>→</span>
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="blog-listing-cta">
        <div className="blog-listing-cta-inner">
          <p className="eyebrow">Stay curious</p>

          <h2>
            New stories,
            <br />
            <em>every month.</em>
          </h2>

          <p>
            ArdalesHub publishes thoughtful articles about
            plant care, home styling and everyday wellbeing.
          </p>

          <NavLink
            to="/enquiry"
            className="button button-dark"
          >
            Get in touch
            <span>→</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
