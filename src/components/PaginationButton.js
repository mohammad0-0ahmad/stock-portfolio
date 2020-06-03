import React from 'react'
import './css/PaginationButton.css'

const PaginationButton = ({ text, handleClick, selected }) => {

    return (
        <button
            className='PaginationButton'
            id={selected && 'selectedPaginationButton'}
            onClick={handleClick}>{text}
        </button>
    )
}

export default PaginationButton;