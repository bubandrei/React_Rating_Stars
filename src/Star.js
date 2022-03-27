import React from 'react';
import { FaStar } from 'react-icons/fa';



const Stars = ({ selected = false }) => {
    return (
        <FaStar color={selected ? 'red' : 'grey'} />
    )
}

const createArr = length => [...Array(length)];

function StarRating({ total = 5 }) {
    return createArr(total).map((n, i) => <Stars key={i} />)

}

export default StarRating
