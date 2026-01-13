import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
const Blog = () => (
  <div className="blog-grid">

    {blogs.map((blog, index) => 
    <BlogCard key={index} blog={blog} />
    )}

  </div>
);
export default Blog;