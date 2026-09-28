import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  getArticleBySlug,
  getRelatedArticles,
  getSortedArticles,
} from "../data/articles";
import { formatDate, slugify } from "../utils/format";
import NotFound from "./NotFound";

function stripTags(html) {
  return html.replace(/<[^>]+>/g, "").trim();
}

/**
 * Walks the article's HTML content, gives every <h2> a
 * slugified id, and returns both the modified HTML and a
 * flat list of {id, text} for the table of contents.
 */
function processContent(html) {
  const headings = [];

  const processedHtml = html.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, inner) => {
      const text = stripTags(inner);
      const id = slugify(text);

      headings.push({ id, text });

      return `<h2 id="${id}">${inner}</h2>`;
    }
  );

  return { processedHtml, headings };
}

export default function SingleBlog() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  const { processedHtml, headings } = useMemo(() => {
    if (!article) return { processedHtml: "", headings: [] };
    return processContent(article.content);
  }, [article]);

  const relatedPosts = useMemo(() => {
    if (!article) return [];
    return getRelatedArticles(article.slug, 3);
  }, [article]);

  const { prevArticle, nextArticle } = useMemo(() => {
    if (!article) return { prevArticle: null, nextArticle: null };

    const sorted = getSortedArticles();
    const index = sorted.findIndex((a) => a.slug === article.slug);

    return {
      // Older story (published before this one)
      prevArticle: index < sorted.length - 1 ? sorted[index + 1] : null,
      // Newer story (published after this one)
      nextArticle: index > 0 ? sorted[index - 1] : null,
    };
  }, [article]);

  // Invalid slug → render the 404 page in place, no redirect needed
  if (!article) {
    return <NotFound />;
  }

  return (
    <article className="single-blog-page">
      {/* ========================================
          ARTICLE HEADER
      ======================================== */}
      <header className="article-header">
        <div className="section-container">
          <NavLink to="/blog" className="back-to-journal">
            <span>←</span>
            Back to journal
          </NavLink>

          <div className="article-heading">
            <NavLink
              to={`/blog?category=${slugify(article.category)}`}
              className="post-category"
            >
              {article.category}
            </NavLink>

            <h1>{article.title}</h1>

            <p>{article.excerpt}</p>

            <div className="article-meta">
              <span>{formatDate(article.date)}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>ArdalesHub Journal</span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================
          HERO IMAGE
      ======================================== */}
      <section className="article-image-section">
        <div className="section-container">
          <figure className="article-hero-image">
            <img src={article.image} alt={article.title} />

            <figcaption>
              A greener approach to everyday living — ArdalesHub
              Journal.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ========================================
          ARTICLE BODY
      ======================================== */}
      <section className="article-body-section">
        <div className="section-container article-layout">
          {headings.length > 0 && (
            <aside className="article-sidebar">
              <div className="article-sidebar-sticky">
                <span className="sidebar-label">IN THIS STORY</span>

                {headings.map((heading) => (
                  <a key={heading.id} href={`#${heading.id}`}>
                    {heading.text}
                  </a>
                ))}
              </div>
            </aside>
          )}

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </div>

        {article.tags?.length > 0 && (
          <div className="section-container">
            <div className="article-tags">
              {article.tags.map((tag) => (
                <NavLink
                  key={tag}
                  to={`/blog?topic=${slugify(tag)}`}
                  className="article-tag"
                >
                  {tag}
                </NavLink>
              ))}
            </div>
          </div>
        )}

        <div className="section-container">
          <div className="article-author">
            <div className="article-author-avatar">A</div>

            <div>
              <span>Written for</span>
              <strong>ArdalesHub Journal</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          PREV / NEXT NAVIGATION
      ======================================== */}
      {(prevArticle || nextArticle) && (
        <section className="article-pagination section-container">
          {prevArticle ? (
            <NavLink
              to={`/blog/${prevArticle.slug}`}
              className="article-pagination-link prev"
            >
              <span>← Previous</span>
              <strong>{prevArticle.title}</strong>
            </NavLink>
          ) : (
            <span />
          )}

          {nextArticle && (
            <NavLink
              to={`/blog/${nextArticle.slug}`}
              className="article-pagination-link next"
            >
              <span>Next →</span>
              <strong>{nextArticle.title}</strong>
            </NavLink>
          )}
        </section>
      )}

      {/* ========================================
          RELATED ARTICLES
      ======================================== */}
      {relatedPosts.length > 0 && (
        <section className="related-section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">
                  KEEP READING
                </span>

                <h2>You might also like</h2>
              </div>

              <NavLink to="/blog" className="text-link">
                View all stories
                <span>→</span>
              </NavLink>
            </div>

            <div className="related-grid">
              {relatedPosts.map((post) => (
                <NavLink
                  to={`/blog/${post.slug}`}
                  className="related-card"
                  key={post.slug}
                >
                  <div className="related-image">
                    <img src={post.image} alt={post.title} />
                  </div>

                  <span className="post-category">
                    {post.category}
                  </span>

                  <h3>{post.title}</h3>

                  <span className="read-more">
                    Read article <span>→</span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          END-OF-ARTICLE CTA
      ======================================== */}
      <section className="article-cta">
        <div className="section-container article-cta-inner">
          <p className="eyebrow">Enjoyed this story?</p>

          <h2>
            Explore more
            <br />
            <em>from the journal.</em>
          </h2>

          <NavLink to="/blog" className="button button-dark">
            Browse all stories
            <span>→</span>
          </NavLink>
        </div>
      </section>
    </article>
  );
}
