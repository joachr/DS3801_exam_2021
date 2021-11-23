import {Input} from '@material-ui/core';
import React from 'react';

function PaymentInfoInput({type, placeholder}) {
    return (
        <Input style={{
            padding: '0.2rem',
            marginBottom: '0.2rem',
            backgroundColor: 'white',
            borderRadius: '5px',
        }}
               type={type} placeholder={placeholder}>
        </Input>
    )
}

export default PaymentInfoInput
