import React, { useState } from 'react';
import { getAllPosts } from '../api';


const Search = (posts)=>{

  const {searchTerm,setSearchTerm} = posts
  return(

<div id="search" onSubmit={async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try{
      const results = await getAllPosts({searchTerm })
      setSearchTerm(results);
    }catch(error){
      console.error(error)
    }
    finally{
      setIsLoading(false)
    }}}>

    <div className = "search">
      <form id="search-bar">
        <fieldset>
          <label htmlFor='search'>Search the Posts</label>
          <input 
          id="search"
          type="text"
          value={searchTerm}
          onChange={(event)=> setsearchTerm(event.target.value)}/>
  
        </fieldset>

      </form>
    </div>
  </div>
  )
  
}

export default Search;