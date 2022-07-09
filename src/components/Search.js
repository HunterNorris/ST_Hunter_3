import React, { useState } from 'react';

const Search = ({searchTerm,setsearchTerm})=>{
  return(
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
  )
}

export default Search;