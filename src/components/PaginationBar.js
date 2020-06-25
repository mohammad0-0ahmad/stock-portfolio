import React from 'react'
import PaginationButton from './PaginationButton'
import '../css/PaginationBar.css'

const AMOUNT_VISIBLE_BUTTONS = 5;
const HALF_VISIBLE_BUTTONS = Math.floor(AMOUNT_VISIBLE_BUTTONS / 2);
const DOTTED_BUTTON = <PaginationButton text='...' disabled={true} />;
const EMPTY_BUTTON = <PaginationButton text='' disabled={true} />;

const PaginationBar = ({ amountPages, selected = 1, handleSelect }) => {
    const previousPage = selected > 1 ? selected - 1 : 1;
    const nextPage = selected !== amountPages ? selected + 1 : amountPages;

    let buttonToShow = [];
    let morePagesBefore, morePagesAfter;

    let first;
    if (selected - HALF_VISIBLE_BUTTONS > 0) {
        first = selected - HALF_VISIBLE_BUTTONS;
        morePagesBefore = first > 1 ? true : false;
    } else {
        first = 1;
    }

    let last;
    if (first + AMOUNT_VISIBLE_BUTTONS - 1 <= amountPages) {
        last = first + AMOUNT_VISIBLE_BUTTONS - 1;
    } else {
        last = amountPages;
        if (last - AMOUNT_VISIBLE_BUTTONS > 0) {
            first = last - AMOUNT_VISIBLE_BUTTONS + 1;
        }
    }
    morePagesAfter = amountPages > last;

    for (let i = first; i <= last; i++) {
        buttonToShow.push(
            <PaginationButton
                key={i}
                text={i}
                handleClick={handleSelect}
                selected={selected === i}
            />
        )
    }

    return (
        <div className='PaginationBar'>
            <PaginationButton text='<<' handleClick={() => { handleSelect(1) }} />
            <PaginationButton text='<' handleClick={() => { handleSelect(previousPage) }} />
            {morePagesBefore ? DOTTED_BUTTON : EMPTY_BUTTON}
            {buttonToShow}
            {morePagesAfter ? DOTTED_BUTTON : EMPTY_BUTTON}
            <PaginationButton text='>' handleClick={() => { handleSelect(nextPage) }} />
            <PaginationButton text='>>' handleClick={() => { handleSelect(amountPages) }} />
        </div>
    )
}

export default PaginationBar;