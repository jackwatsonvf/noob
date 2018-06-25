import React from 'react';

const Search = ({ search, searchChange }) => {
    return (
        <div>
            <input 
                type='text'
                placeholder='find what you need buddeh'
                onChange={searchChange}
            />
        </div>
    )
}

export default Search;