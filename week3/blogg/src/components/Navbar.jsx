import { NavLink } from "react-router-dom";
const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Blogify</h2>
    <ul>
      <li><NavLink   className={({ isActive }) =>isActive ? "nav-link active" : "nav-link" } to="/">Home</NavLink></li>
      <li><NavLink   className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"} to="/blog">Blogs</NavLink></li>
      <li><NavLink   className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}    to="/about">About</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;