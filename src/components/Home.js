import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../api";
import PostPage from  "./PostPage"

const Home = ({allPosts}) => {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Home;