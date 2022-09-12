import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesName } from '../../Redux/actions'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getRecipesName(searchValue))
        console.log(searchValue)
    }
  return (
    <div className={styles.searchBar}>
    <input type="text" placeholder='Search by name...' onChange={onSearchValueChange} className={styles.inputSearch}/>
    <button type='submit' onClick={handleSubmit} className={styles.button} >Search</button>
    </div>
  )
}

export default SearchBar