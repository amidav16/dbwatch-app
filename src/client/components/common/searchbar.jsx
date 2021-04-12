import React from 'react';

//Visual Search bar, can be used later to sort graphs and logs
const SearchBar = () => {
    return (                 
    <form className="form-inline">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
    </form>
);
}
 
export default SearchBar;