import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';
import PaymentInfoInput from './PaymentInfoInput';

function ChoosePayment() {
    const [disabled, setDisabled] = React.useState(false);
    const makeDisabled = () => setDisabled(true);
    const makeNotDisabled = () => setDisabled(false);

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
                    <FormControlLabel value="VISA" control={<Radio onChange={makeNotDisabled}/>} label="VISA"/>
                    <FormControlLabel value="Vipps" control={<Radio onChange={makeDisabled}/>} label="Vipps"/>
                    <FormControlLabel value="Paypal" control={<Radio onChange={makeDisabled}/>} label="Paypal"/>
                </RadioGroup>
            </FormControl>
            <FormControl style={{
                marginLeft: '1rem'
            }} disabled={disabled}>
                <PaymentInfoInput type="number" placeholder="Kortnummer" required/>
                <PaymentInfoInput type="string" placeholder="Navn på kortholder" required/>
                <PaymentInfoInput type="string" placeholder="Utløp" required/>
                <PaymentInfoInput type="number" placeholder="CVC" required/>
            </FormControl>
        </div>
    )
}

export default ChoosePayment
