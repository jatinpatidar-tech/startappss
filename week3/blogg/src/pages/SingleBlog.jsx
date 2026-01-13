import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id == id);
  return (
    <div className="single-blog">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};
export default SingleBlog;