import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import BlogListing from "./pages/BlogListing";
import SingleBlog from "./pages/SingleBlog";
import Enquiry from "./pages/Enquiry";
import Author from "./pages/Author";
import NotFound from "./pages/NotFound";

function PublicLayout() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/author" element={<Author />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}