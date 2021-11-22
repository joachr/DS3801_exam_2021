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



function ReserveTable() {
    const [value, setValue] = React.useState(new Date('2021-11-22T12:55:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 'md',
                height: '30rem',
        }}>
            <Card style={{
                position: 'inherit',
                width: '20rem',
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
                    </Stack>
                </CardContent>
            </Card>
        </Container>
        </LocalizationProvider>
    )
}

export default ReserveTable;
