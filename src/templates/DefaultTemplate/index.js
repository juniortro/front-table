import React from 'react'

import './styles.css'

const DefaultTemplate = ({title, children}) => {
    return(
        <div className="default-template">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default DefaultTemplate