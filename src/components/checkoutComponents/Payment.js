import React from 'react';
import PriceTotalList from './PriceTotalList';
import ChoosePayment from './ChoosePayment';

function Payment() {
    return (
        <div style={{
            display: 'flex',
            margin: '1rem',
            flexDirection: 'row'
        }}>
            <PriceTotalList />
            <ChoosePayment />
        </div>
    )
}

export default Payment;
