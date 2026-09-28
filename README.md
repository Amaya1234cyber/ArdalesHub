# 🌿 ArdalesHub

### Plant & Wellbeing Journal

ArdalesHub is a modern, responsive editorial website created around **plant care, home & space, wellbeing, and greener living**.

The project combines a clean editorial experience with practical plant-care content, article discovery, category and topic filtering, responsive navigation, enquiry forms, and dynamic article pages.

## 🔗 Live Demo

**Website:** https://ardaleshub.netlify.app/

---

## ✨ Features

* 🌱 Modern plant & wellbeing editorial design
* 📱 Fully responsive layout
* 🧭 Client-side navigation with React Router
* 📰 Dynamic journal/article pages
* 🔎 Article search
* 🏷️ Category filtering
* 🔖 Topic/tag filtering
* ⭐ Featured article section
* 📚 Related articles
* 👤 Author page
* 📩 Contact page
* 💬 Enquiry form
* ❌ Custom 404 page
* 📱 Responsive mobile navigation
* 🖼️ Local and remote image support
* ♻️ Reusable React components
* 🔗 Clean URL-based filtering
* 🎨 Custom CSS design system

---

## 🛠️ Built With

### Frontend

* **React**
* **Vite**
* **JavaScript (ES6+)**
* **React Router**
* **CSS3**
* **HTML5**

### Deployment

* **Netlify**

### Content & Images

* JavaScript-based article data
* Pexels images
* Local project assets

---

## 📂 Project Structure

```text
ArdalesHub/
│
├── public/
│   └── Img/
│       ├── 01.avif
│       ├── BI-D.avif
│       ├── MIMG.jpg
│       ├── W-P.jpg
│       └── ...
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── articles.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Author.jsx
│   │   ├── BlogListing.jsx
│   │   ├── Categories.jsx
│   │   ├── Contact.jsx
│   │   ├── Enquiry.jsx
│   │   ├── NotFound.jsx
│   │   └── SingleBlog.jsx
│   │
│   ├── utils/
│   │   └── format.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🗺️ Routes

| Route         | Description               |
| ------------- | ------------------------- |
| `/`           | Homepage                  |
| `/about`      | About ArdalesHub          |
| `/blog`       | Journal / article listing |
| `/blog/:slug` | Individual article        |
| `/categories` | Browse article categories |
| `/author`     | Author page               |
| `/contact`    | Contact page              |
| `/enquiry`    | Enquiry form              |
| `*`           | Custom 404 page           |

---

## 📰 Journal System

Articles are managed centrally through:

```text
src/data/articles.js
```

Each article contains information such as:

```js
{
  id: 1,
  slug: "beginner-guide-to-indoor-plants",
  title: "A Beginner's Guide to Indoor Plants",
  excerpt: "...",
  category: "Plant Care",
  tags: [
    "Indoor plants",
    "Beginner plant care",
    "Greener living"
  ],
  date: "2025-11-10",
  readTime: "6 min read",
  featured: true,
  image: "...",
  content: "..."
}
```

This allows the journal listing and individual article pages to use the same source of truth.

---

## 🔎 Article Filtering

The journal supports URL-based filtering.

### Category

```text
/blog?category=plant-care
```

Available primary categories include:

* Plant Care
* Home & Space
* Wellbeing

### Topic

```text
/blog?topic=indoor-plants
```

Topics are derived from the article `tags` array.

### Search

```text
/blog?search=watering
```

Search can match article:

* Titles
* Excerpts
* Categories
* Tags

This makes article discovery possible without requiring a separate backend search service.

---

## 🧩 Article Helper Functions

`src/data/articles.js` provides reusable functions including:

```js
getArticleBySlug(slug)
getArticlesByCategory(category)
getArticlesByTag(tag)
getFeaturedArticles(limit)
getAllCategories()
getAllTags()
getSortedArticles()
getRelatedArticles(currentSlug, limit)
```

These functions keep article-related logic centralized and make the React pages easier to maintain.

---

## 🎨 Design System

ArdalesHub uses a nature-inspired visual system built around:

* Forest green
* Sage
* Warm cream
* White
* Charcoal
* Soft neutral borders

The interface focuses on:

* Generous whitespace
* Editorial typography
* Large imagery
* Subtle borders
* Rounded cards
* Responsive layouts
* Clear calls to action

The visual direction is designed to feel **calm, modern, editorial, and premium**.

---

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

The navigation changes into a mobile menu on smaller screens, while content grids and article layouts adapt to available screen space.

---

## 🧭 Navigation

Internal navigation uses React Router's `NavLink` rather than traditional page reloads.

Example:

```jsx
<NavLink to="/blog">
  Journal
</NavLink>
```

This provides client-side navigation and allows active navigation states to be styled consistently.

---

## 📩 Forms

The project includes:

### Contact

```text
/contact
```

Allows visitors to submit:

* Name
* Email
* Subject
* Message

### Enquiry

```text
/enquiry
```

Provides a more detailed enquiry flow with:

* Full name
* Email
* Phone
* Company
* Service
* Message

The current frontend handles the form interaction and validation. A production backend/email service can be connected later for persistent submissions.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Enter the project directory

```bash
cd YOUR-REPOSITORY
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📦 Main Dependencies

The project uses React and React Router for the application and navigation.

Install dependencies with:

```bash
npm install
```

If setting up the project from scratch, React Router can be installed with:

```bash
npm install react-router-dom
```

---

## 🌐 Deployment

The current production deployment is hosted on **Netlify**.

### Live Website

https://ardaleshub.netlify.app/

A typical Netlify deployment can use:

```text
Build command:
npm run build

Publish directory:
dist
```

---

## 🔮 Future Improvements

Possible future improvements include:

* [ ] Connect contact form to a real email/backend service
* [ ] Connect enquiry form to a database or email service
* [ ] Add newsletter subscription functionality
* [ ] Add CMS integration
* [ ] Add article pagination
* [ ] Add article sharing
* [ ] Add reading progress indicator
* [ ] Add comments
* [ ] Add analytics
* [ ] Add SEO metadata per article
* [ ] Add Open Graph/social sharing images
* [ ] Add sitemap
* [ ] Add RSS feed
* [ ] Optimize and locally host production images
* [ ] Add automated testing

---

## 👨‍💻 Developer

Built as a frontend development project by **Adeyoju Charles Tunde**.

The project demonstrates practical experience with:

* React development
* Component-based architecture
* React Router
* JavaScript
* Responsive UI development
* State management
* URL-based filtering
* Reusable data utilities
* Form handling
* Modern frontend design
* Vite development workflow
* Git & GitHub
* Netlify deployment

---

## 📄 License

This project is intended primarily as a personal portfolio and demonstration project.

If you would like to reuse substantial portions of the project, please contact the developer first.

---

### 🌿 ArdalesHub

**Plant & Wellbeing**

> Grow thoughtfully. Live greener.

## Contact

**ArdalesHub**  
No 26, Alagbaka Akure, Ondo State, Nigeria  
+234 8115 567 384
