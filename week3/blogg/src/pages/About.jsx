import React from 'react';
const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Blogify</h1>

        <p>
          Blogify is a modern blogging platform where readers can discover
          meaningful stories and writers can share their knowledge with the
          world. Our goal is to keep things simple, clean, and focused on
          content.
        </p>

        <p>
          Whether you are a beginner learning web development, a developer
          sharing technical insights, or someone who loves reading quality
          blogs, Blogify is built for you.
        </p>

        <h2>What You Can Do Here</h2>
        <ul>
          <li> Read well-written blogs</li>
          <li> Write and share your own stories</li>
          <li> Learn modern web technologies</li>
          <li> Connect with readers worldwide</li>
        </ul>

        <p className="about-footer">
          Built using React.
        </p>
      </div>
    </div>
  );
};

export default About;
