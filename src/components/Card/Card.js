import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div className='card'>{props.cardname}</div>
    );
}

export default Card;