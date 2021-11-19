import React from 'react'
import { ButtonGroup, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, Drawer, FormControl, Input, InputLabel } from '@material-ui/core';
import HeaderButton from './HeaderButton';

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
                        <Input style={{
                            width: '55%',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            padding: '0.3rem',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                        typeof="string"
                        required="true"
                        placeholder="Fullt navn"/>
                        <Input style={{
                            width: '55%',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            padding: '0.3rem',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                        typeof="string"
                        required="true"
                        placeholder="E-post"/>
                        <Input style={{
                            width: '55%',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            padding: '0.3rem',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                        typeof="string"
                        required="true"
                        placeholder="Telefonnummer"/>
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
                        <Input style={{
                            width: '55%',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            padding: '0.3rem',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                        typeof="string"
                        required="true"
                        placeholder="Gate"/>
                        <Input style={{
                            width: '55%',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            padding: '0.3rem',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                        typeof="number"
                        required="true"
                        placeholder="Postnummer"/>
                        <Input style={{
                            width: '55%',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            padding: '0.3rem',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                        typeof="string"
                        required="true"
                        placeholder="Poststed"/>
                    </FormControl>
                    <Divider variant="middle"></Divider>
                    
                </CardContent>
            </Card>
        </div>
    )
}

export default Checkout
