import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <img src={blog.image} />
    <h3>{blog.title}</h3>
    <p>{blog.desc}</p>
    <Link to={`/blog/${blog.id}`}>Read More</Link>
  </div>
);
export default BlogCard;