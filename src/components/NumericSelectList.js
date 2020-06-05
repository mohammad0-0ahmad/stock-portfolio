import React from 'react'
import '../css/NumericSelectList.css'

const NumericSelectList = ({ firstIndex = 1, lastIndex, selected, handleSelect }) => {
    const MIN_POSSIPLE_OPTION = 10;
    const MAX_POSSIPLE_OPTION = 50;
    const options = () => {
        let result = [];
        if (lastIndex > MIN_POSSIPLE_OPTION) {
            for (let i = MIN_POSSIPLE_OPTION; i < lastIndex && i <= MAX_POSSIPLE_OPTION; i = i + MIN_POSSIPLE_OPTION) {
                result.push(<option key={i} value={i}>{i}</option>)
            }
        }
        result.push(<option key={-1} value={lastIndex}>Alla</option>)
        return result;
    }
    const statusText = () => {
        if (!selected) {
            selected = lastIndex < MIN_POSSIPLE_OPTION ? lastIndex : MIN_POSSIPLE_OPTION
        }
        firstIndex = Math.floor(firstIndex / MIN_POSSIPLE_OPTION) * MIN_POSSIPLE_OPTION + 1
        let lastShownItemIndex;
        if (firstIndex > MAX_POSSIPLE_OPTION || lastIndex < MIN_POSSIPLE_OPTION) {
            lastShownItemIndex = lastIndex
        } else if (firstIndex > selected) {
            lastShownItemIndex = firstIndex + selected - 1
        } else {
            lastShownItemIndex = selected
        }
        return `Visar ${firstIndex} - ${lastShownItemIndex} av ${lastIndex} `
    }
    const handleChange = (e) => {
        const selected = parseInt(e.target.value);
        handleSelect(firstIndex, selected);
        e.target.blur();
    }
    return (
        <div className='NumericSelectList'>
            <select onChange={handleChange}>
                {options()}
            </select>
            <p>
                {statusText()}
            </p>
        </div>
    )
}

export default NumericSelectList;