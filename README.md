# ArdalesHub - Plant & Wellbeing Journal

A modern editorial blog built with React, focused on houseplant care, home styling and everyday wellbeing. Features a fully dynamic article system, category and tag filtering, and a clean, minimal design.

---

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Hero, featured stories, category cards, wellbeing feature |
| `/about` | `About.jsx` | Brand story, values, closing CTA |
| `/blog` | `BlogListing.jsx` | Article grid with category, tag and search filters |
| `/blog/:slug` | `SingleBlog.jsx` | Full article with TOC, related posts, prev/next nav |
| `/categories` | `Categories.jsx` | Category cards and quick topic list |
| `/author` | `Author.jsx` | Author intro, highlights, topic list |
| `/contact` | `Contact.jsx` | Contact form and details |
| `/enquiry` | `Enquiry.jsx` | Detailed enquiry form |
| `*` | `NotFound.jsx` | 404 fallback |

---

## Tech Stack

- **React** - UI and routing
- **React Router v6** - client-side navigation and URL-based filtering
- **Vite** - development server and build tool
- **Plain CSS** - custom properties, dark mode via `prefers-color-scheme`

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── FormField.jsx
├── data/
│   └── articles.js          # Article data and helper functions
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── BlogListing.jsx
│   ├── SingleBlog.jsx
│   ├── Categories.jsx
│   ├── Author.jsx
│   ├── Contact.jsx
│   ├── Enquiry.jsx
│   └── NotFound.jsx
├── utils/
│   └── format.js            # slugify, formatDate
└── main.jsx
```

---

## Article System

All content lives in `src/data/articles.js`. Each article has:

```js
{
  slug: "beginner-guide-to-indoor-plants",
  title: "A Beginner's Guide to Indoor Plants",
  excerpt: "...",
  category: "Plant Care",           // one of three categories
  tags: ["Indoor plants", "..."],   // drives topic filtering
  date: "2024-03-01",
  readTime: "5 min read",
  image: "https://...",
  featured: true,
  content: `<h2>...</h2><p>...</p>` // HTML string
}
```

### Helper functions

| Function | Returns |
|---|---|
| `getSortedArticles()` | All articles sorted by date, newest first |
| `getFeaturedArticles(n)` | Top `n` featured articles |
| `getArticleBySlug(slug)` | Single article or `undefined` |
| `getRelatedArticles(slug, n)` | `n` articles in same category, excluding current |
| `getAllCategories()` | Unique category names |
| `getAllTags()` | Unique tag names |

---

## URL Filtering

`BlogListing.jsx` reads two query params from the URL:

| Param | Example | Filters by |
|---|---|---|
| `?category=` | `?category=plant-care` | Article `category` field |
| `?topic=` | `?topic=indoor-plants` | Article `tags` array |

Category buttons and topic links across the site pass slugified values via these params. `BlogListing.jsx` normalises them with `slugify()` before comparing.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Adding an Article

Open `src/data/articles.js` and add a new object to the array:

```js
{
  slug: "your-article-slug",
  title: "Your Article Title",
  excerpt: "A short description shown in cards.",
  category: "Plant Care",        // "Plant Care" | "Home & Space" | "Wellbeing"
  tags: ["Indoor plants"],
  date: "2025-01-01",
  readTime: "4 min read",
  image: "https://images.pexels.com/...",
  featured: false,
  content: `
    <h2>First section</h2>
    <p>Your content here.</p>
  `
}
```

The article will appear automatically in the blog listing, related posts, and TOC - no other changes needed.

---

## Dark Mode

Dark mode is handled entirely in CSS via `@media (prefers-color-scheme: dark)` on the `:root` block. No JavaScript toggle is needed - it follows the user's system preference automatically.

---

## Contact

**ArdalesHub**  
No 26, Alagbaka Akure, Ondo State, Nigeria  
+234 8115 567 384
