import React from 'react'
import { ButtonGroup, Card, CardContent, CardHeader, CardMedia, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import HeaderButton from './HeaderButton';
import InputField from './InputField';

function Checkout() {
    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card style={{
                width: '30rem',
                backgroundColor: '#FFD148',
            }} 
            variant='elevation'>
                <CardContent>
                    <Card style={{
                        margin: '1rem'
                    }}
                    variant='elevation'>
                        <CardHeader title="Handlekurv">
                            <CardMedia>
                            
                            </CardMedia>
                        </CardHeader>
                    </Card>
                    <Divider variant="middle"></Divider>
                    <FormControl style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '1rem'
                    }}>
                    <InputField type="string" placeholder="Fullt navn"></InputField>
                    <InputField type="number" placeholder="Telefonnummer"></InputField>
                    <InputField type="string" placeholder="E-post"></InputField> 
                    </FormControl>
                    <Divider variant="middle"></Divider>
                    <ButtonGroup style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '1rem',
                    }}>
                        <HeaderButton text="Hente selv"></HeaderButton>
                        <HeaderButton text="Hjemlevering"></HeaderButton>
                    </ButtonGroup>
                    <ButtonGroup>
                        <p style={{
                           fontWeight: 'bold', 
                        }}>Tips til bud:</p>
                        <HeaderButton text="10kr"></HeaderButton>
                        <HeaderButton text="20kr"></HeaderButton>  
                        <HeaderButton text="30kr"></HeaderButton>  
                        <HeaderButton text="40kr"></HeaderButton> 
                    </ButtonGroup>  
                    <Divider variant="middle"></Divider>
                    <FormControl style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '1rem'
                    }}>
                        <InputField type="string" placeholder="Gate"></InputField>
                        <InputField type="number" placeholder="Postnummer"></InputField>
                        <InputField type="string" placeholder="Poststed"></InputField>
                    </FormControl>
                    <Divider variant="middle"></Divider>
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'space-evenly', 
                        margin: '1rem'
                    }}>
                        <div style={{
                        flexDirection: 'column',
                    }}>
                        <ul style={{
                            fontWeight: 'bold',
                            listStyle: 'none',
                        }}>
                            <li>Subtotal: </li>
                            <li>Frakt: </li>
                            <li>Tips: </li>
                            <li>Total: </li>
                        </ul>
                        </div>
                        <div style={{
                        flexDirection: 'column',
                    }}>
                        <FormControl component="fieldset">
                            <RadioGroup defaultValue="female" name="radio-buttons-group">
                            <FormControlLabel value="VISA" control={<Radio />} label="VISA" />
                            <FormControlLabel value="Vipps" control={<Radio />} label="Vipps" />
                            <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                            </RadioGroup>
                        </FormControl>
                        </div>
                        <div style={{
                        flexDirection: 'column',
                    }}>
                        <InputField type="number" placeholder="Kortnummer"></InputField>
                        <InputField type="string" placeholder="Navn på kortholder"></InputField>
                        <InputField type="string" placeholder="Utløp"></InputField>
                        <InputField type="number" placeholder="CVC"></InputField>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Checkout
