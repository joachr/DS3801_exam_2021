import React from 'react'
import { ButtonGroup, Card, CardContent, CardHeader, CardMedia, Container, Divider, FormControl } from '@material-ui/core';
import HeaderButton from '../HeaderButton';
import InputField from './InputField';
import Payment from './Payment';

function Checkout() {
    return (
        <Container style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 'md',
                height: '80rem'
        }}>
            <Card style={{
                position: 'inherit',
                width: '30rem',
                backgroundColor: '#FFD148',
            }} 
            open="true">
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
                    <Payment></Payment>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <HeaderButton text="Betal"></HeaderButton>
                    </div>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Checkout
