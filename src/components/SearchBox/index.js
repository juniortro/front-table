import React from "react"

import searchIcon from '../../assets/images/searchIcon.svg'

import './styles.css'

const SearchBox = () => {
    return(
        <div className="searchbox">
            <input type="text" />
            <img src={searchIcon} alt="" />
        </div>
    )
}

export default SearchBox