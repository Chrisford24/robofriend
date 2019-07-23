import React from 'react';

function searchBox({ searchfield, searchChange }) {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='serach'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default searchBox;
