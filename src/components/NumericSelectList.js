import React from 'react'
import '../css/NumericSelectList.css'

const MIN_POSSIBLE_OPTION = 10;
const MAX_POSSIBLE_OPTION = 50;

const NumericSelectList = ({ firstIndex = 1, lastIndex, selected, handleSelect }) => {

    const options = () => {
        let result = [];
        if (lastIndex > MIN_POSSIBLE_OPTION) {
            for (let i = MIN_POSSIBLE_OPTION; i < lastIndex && i <= MAX_POSSIBLE_OPTION; i = i + MIN_POSSIBLE_OPTION) {
                result.push(<option key={i} value={i}>{i}</option>)
            }
        }
        result.push(<option key={-1} value={lastIndex}>Alla</option>)
        return result;
    }

    const statusText = () => {
        if (!selected) {
            selected = lastIndex < MIN_POSSIBLE_OPTION ? lastIndex : MIN_POSSIBLE_OPTION;
        }
        firstIndex = Math.floor(firstIndex / MIN_POSSIBLE_OPTION) * MIN_POSSIBLE_OPTION + 1;
        let lastShownItemIndex;
        if (lastIndex < MIN_POSSIBLE_OPTION) {
            lastShownItemIndex = lastIndex;
        } else if (firstIndex > selected) {
            lastShownItemIndex = firstIndex + selected - 1 < lastIndex ? firstIndex + selected - 1 : lastIndex;
        } else {
            lastShownItemIndex = selected;
        }
        return `Visar ${firstIndex} - ${lastShownItemIndex} av ${lastIndex} `
    }

    const handleChange = (e) => {
        const selected = parseInt(e.target.value);
        handleSelect(selected);
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