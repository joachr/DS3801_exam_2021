import React from 'react';
import PriceTotalList from './PriceTotalList';
import ChoosePayment from './ChoosePayment';

function Payment({ tipss, fraktt }) {
    return (
        <div style={{
            display: 'flex',
            margin: '1rem',
            flexDirection: 'row'
        }}>
            <PriceTotalList tips={ tipss } frakt={ fraktt }/>
            <ChoosePayment />
        </div>
    )
}

export default Payment;
