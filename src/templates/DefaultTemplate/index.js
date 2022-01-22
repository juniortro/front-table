import React from 'react'

import SearchBox from '../../components/SearchBox'

import './styles.css'

const DefaultTemplate = ({title, isSearchBox, children}) => {
    return(
        <div className="default-template">
            <h2>{title}</h2>
            {isSearchBox 
            ?
            <SearchBox />
            : 
            <h2>tchau</h2>}
            {children}
        </div>
    )
}

export default DefaultTemplate