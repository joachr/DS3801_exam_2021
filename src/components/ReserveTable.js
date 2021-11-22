import React from 'react';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@material-ui/core/Card';
import { CardContent, Container } from '@material-ui/core';


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
                width: '30rem',
            }} 
            open="true">
                <CardContent>
                    <Stack spacing={3}>
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
                    </Stack>
                </CardContent>
            </Card>
        </Container>
        </LocalizationProvider>
    )
}

export default ReserveTable;
