import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';



const Stars = ({ selected = false, onSelect = f => f }) => {
    console.log(onSelect)
    return (
        <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
    )
}

const createArr = length => [...Array(length)];

function StarRating({ total = 5 }) {
    const [selectedStars, setSelectStars] = useState(0);

    return (
        <>
            {createArr(total).map((n, i) => (
                <Stars
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectStars(i + 1)} />
            ))}
            <div>{selectedStars} of {total} stars</div>
        </>
    )
}

export default StarRating
