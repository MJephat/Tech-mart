import React, { useState } from 'react';


function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
    };
    return (
        <form onSubmit={handleSearch}>
            <input id='query' type="text" placeholder="Search by name" value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} />
            {/* <button className="submit"type="submit">Search</button> */}
        </form>
    );
}
export default SearchBar;