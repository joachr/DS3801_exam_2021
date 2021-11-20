import React from 'react'
import { ButtonGroup, Card, CardContent, CardHeader, CardMedia, Container, Dialog, Divider, Drawer, FormControl, Modal } from '@material-ui/core';
import HeaderButton from '../HeaderButton';
import InputField from './InputField';
import Payment from './Payment';
import { Box } from '@mui/system';

function Checkout() {
    const [visible, setVisible] = React.useState(false);
    const makeVisible = () => setVisible(true);
    const makeNotVisible = () => setVisible(false);

    const [tip, setTip] = React.useState('0kr');
    const addTen = () => setTip('10kr');
    const addTwenty = () => setTip('20kr');
    const addThirty = () => setTip('30kr');
    const addForty = () => setTip('40kr');
    const setToZero = () => setTip('0kr');

    const [frakt, setFrakt] = React.useState('0kr');
    const medFrakt = () => setFrakt('49kr');
    const utenFrakt = () => setFrakt('0kr')



    
    return (
        <Container style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 'md',
                height: '80rem',
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
                        <HeaderButton click={ () => {setToZero(); utenFrakt();}} text="Hente selv"></HeaderButton>
                        <HeaderButton click={ () => {makeVisible(); medFrakt();}} text="Hjemlevering"></HeaderButton>
                    </ButtonGroup>

                    <Dialog open={ visible } onBackdropClick={ makeNotVisible } style={{
                    }}>
                    <Box style={{
                        backgroundColor: '#FFD148',
                    }}>
                        <p style={{
                            fontWeight: 'bold',
                            marginTop: '1rem',
                            marginLeft: '1rem',
                        }}>Tips til bud:</p>
                        <ButtonGroup style={{
                        }}>
                            <HeaderButton text="10kr" click={ addTen }></HeaderButton>
                            <HeaderButton text="20kr" click={ addTwenty }></HeaderButton>  
                            <HeaderButton text="30kr" click={ addThirty }></HeaderButton>  
                            <HeaderButton text="40kr" click={ addForty }></HeaderButton> 
                        </ButtonGroup>  
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
                        <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <HeaderButton text="Gå videre" click={ makeNotVisible }></HeaderButton>
                    </div>
                    </Box>
                    </Dialog>

                    <Divider variant="middle"></Divider>
                    <Payment tipss={ tip } fraktt={ frakt }></Payment>
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
