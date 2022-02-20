import React from 'react';

const Coin = ({ name, icon , price, symbol}) => {
    return (
        <div className='coin'>
            <h2>{name} </h2>
            <img src={icon} alt="" />
            <h4>$ {price} </h4>
            <h4>{symbol} </h4>
        </div>
    );
};

export default Coin;