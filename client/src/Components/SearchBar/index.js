import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesName } from '../../Redux/actions'
import styles from './SearchBar.module.css'



const SearchBar = ({pages}) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getRecipesName(searchValue))
        pages(1)
    }
  return (
    <div className={styles.searchBar}>
    <input type="text" placeholder='Search by name...' onChange={onSearchValueChange} className={styles.inputSearch}/>
    <button type='submit' onClick={handleSubmit} className={styles.button} >Search</button>
    </div>
  )
}

export default SearchBar