import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesName } from '../../Redux/actions'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getRecipesName(searchValue))
    }
  return (
    <>
    <input type="text" placeholder='Search...' onChange={onSearchValueChange} />
    <button type='submit' onClick={handleSubmit}>Search</button>
    </>
  )
}

export default SearchBar