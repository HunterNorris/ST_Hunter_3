import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const postList = props.getAllPosts;
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setAllPosts(posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const displayPosts = allPosts.map((posts, index) => {
  //   return (
  //     <div className="fullPost" key={index}>
  //       <div className="title">{posts.title}</div>
  //       <h4>{posts.description}</h4>
  //       <div>
  //         <div>{posts.location}</div>
  //         <div>{posts.price}</div>
  //       </div>

  //     </div>
  //   );
  // });

  console.log({ getAllPosts });
  return (
    <div
      className="search"
      onSubmit={async (event) => {
        preventDefault();
        handleChange(true);
        try {
          const results = await getAllPosts(searchTerm);
          setSearchTerm(results);
        } catch (error) {
          console.error(error);
        } finally {
          handleChange(false);
        }
      }}
    >
      <form id="search-bar">
        <fieldset>
          <label htmlFor="search">Search the Posts</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
        </fieldset>
      </form>
      <button>Submit</button>
    </div>
    
  );
};

export default Search;
