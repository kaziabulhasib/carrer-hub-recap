import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <p>This is the home page .</p>
      <Link style={{ marginRight: "10px" }} to='/about'>
        About
      </Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};

export default Home;
