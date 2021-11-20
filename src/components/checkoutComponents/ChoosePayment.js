import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import PaymentInfoInput from './PaymentInfoInput';

function ChoosePayment() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '60%',
        }}>
            <FormControl component="fieldset" style={{
                marginRight: '1rem', 
            }}>
                <RadioGroup defaultValue="VISA" name="radio-buttons-group">
                    <FormControlLabel value="VISA" control={<Radio />} label="VISA" />
                    <FormControlLabel value="Vipps" control={<Radio />} label="Vipps" />
                    <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                </RadioGroup>
            </FormControl>
            <FormControl style={{
                marginLeft: '1rem'
            }}>
                <PaymentInfoInput type="number" placeholder="Kortnummer"/>
                <PaymentInfoInput type="string" placeholder="Navn på kortholder"/>
                <PaymentInfoInput type="string" placeholder="Utløp"/>
                <PaymentInfoInput type="number" placeholder="CVC"/>
            </FormControl>
        </div>
    )
}

export default ChoosePayment
