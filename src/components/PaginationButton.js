import React from 'react'
import '../css/PaginationButton.css'

const PaginationButton = ({ text, handleClick, selected, disabled }) => {

    return (
        <button className='PaginationButton'
            disabled={disabled}
            id={selected ? 'selectedPaginationButton' : ''}
            onClick={() => handleClick(parseInt(text))}
        >
            {text}
        </button>

    )
}

export default PaginationButton;