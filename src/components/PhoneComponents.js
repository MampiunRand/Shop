import React from 'react';
import Phone from '../image/phone.jpg';
const PhoneComponents = () => {
    return (
        <div className='sub-container'>
            <img src={Phone} alt="source-Phone" />
            <p>disponibilité :
            <span className='count-Phone'></span>
            </p>
            <button id='buy-Phone'>Acheter</button>
        </div>
    );
}
export default PhoneComponents;
