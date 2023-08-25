import React from 'react';

export function Search({ onChange }) {
  return (
    <input 
      type="text" 
      placeholder="Pesquisar filme..." 
      onChange={e => onChange(e.target.value)} 
    />
  );
};

export default Search;