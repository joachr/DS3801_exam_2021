import React from 'react';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@material-ui/core/Card';
import { CardContent, Container } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import HowManyPeople from './HowManyPeople';
import HeaderButton from '../HeaderAndFooter/HeaderButton';
import { Modal } from '@material-ui/core';
import InputField from '../checkoutComponents/InputField.js'

function ReserveTable({open, onClose, onBackdropClick}) {
    const [value, setValue] = React.useState(new Date('2021-11-22T12:55:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        
            <Modal open={open} onClose={onClose} onBackdropClick={onClose} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: "scroll",
            }}>
            <Card style={{
                position: 'inherit',
            }} 
            open="true">
                <CardContent>
                    <Stack spacing={2}>
                    <h4>Reserver bord</h4>
                    <Divider variant="middle"></Divider>
                    <DesktopDatePicker
                    label="Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <Divider variant="middle"></Divider>
                    <HowManyPeople></HowManyPeople>
                    <Divider variant="middle"></Divider>
                    <TextField
                        id="outlined-multiline-static"
                        label="Andre kommentarer"
                        multiline
                        rows={3}
                    />
                    <Divider variant="middle"></Divider>
                    <div style={{
                        marginTop: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <TextField label="Navn" type='string' required variant="standard"/>
                        <TextField label="E-post" type='email' required variant="standard"/>
                        <TextField label="Mobilnummer" type='tel' required variant="standard"/>
                    </div>
                    <Divider variant="middle"></Divider>
                    <div style={{
                        marginTop: '5px',
                        marginBottom: '-17px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <HeaderButton text='Fullfør reservasjon' click={onClose}></HeaderButton>
                    </div>
                    
                    </Stack>
                </CardContent>
            </Card>
        </Modal>
        </LocalizationProvider>
    )
}

export default ReserveTable;
