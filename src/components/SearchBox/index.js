import React, { useState } from "react"

import { AiOutlineSearch } from 'react-icons/ai'

import './styles.css'

const SearchBox = () => {
    const [query, setQuery] = useState('')

    return (
        <div className="searchbox">
            <input type="text" placeholder="Pesquisar" onChange={e => setQuery(e.target.value)} />

            <AiOutlineSearch size={22} className="searchIcon" />
        </div>
    )
}

export default SearchBox