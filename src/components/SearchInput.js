import React, { forwardRef } from 'react';

const SearchInput = forwardRef((props, ref) => {
    return <input className="search-input" placeholder="Search" onChange={props.onChange} ref={ref}></input>;
});

export default SearchInput;
