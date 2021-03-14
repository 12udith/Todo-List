import React from 'react';

const SearchBox = ({placeholder,handleChange}) =>{
    return(
        <>
        <i className="far fa-search"></i>

        <input   type='search'
         i className="search" 
        placeholder= "Search......"
        onChange = {handleChange}
        />
        
        </>
    )
}

export default SearchBox;