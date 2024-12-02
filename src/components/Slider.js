import React, { useState } from 'react'
import data from './Data'

function Slider() {
    const [pageCount, setPageCount] = useState(0);

    const nextPage = () => {
        if (pageCount == data.length - 1) {
            setPageCount(0)
        } else {
            setPageCount(pageCount + 1)
        }
    }
    const prevPage = () => {
        if (pageCount == 0) {
            setPageCount(data.length - 1)
        } else {
            setPageCount(pageCount - 1)
        }
    }

    return (
        <div>
            <h1 id='review-heading'>Reviews</h1>
            <div id='review-container'>
                <h3>{data[pageCount].name}</h3>
                <img src={data[pageCount].image} />
            </div>
            <button className='prev' onClick={prevPage}>Prev</button>
            <span>{pageCount + 1}</span>
            <button className='next' onClick={nextPage}>Next</button>
        </div>
    )
}

export default Slider