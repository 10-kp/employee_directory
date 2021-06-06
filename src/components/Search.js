import React from 'react';
// import '../styles/search.css';

const Search = (props) => {
  return (
    <form>
      <div className='form-group search-widget'>
        <div className='input-group mb-4'>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name='search'
            type='text'
            className='form-control'
            placeholder='Search Employee'
            id='search'
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
