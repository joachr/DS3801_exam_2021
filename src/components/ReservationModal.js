/*

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import AdapterDateFns from 'package.json/@mui/lab/AdapterDateFns';
import LocalizationProvider from 'package.json/@mui/lab/LocalizationProvider';
import DatePicker from 'package.json/@mui/lab/DatePicker';




const style = {
  position: 'relative',
  borderRadius: '12px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'column',
};

export default function ReservationModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [valueDate, setValueDate] = React.useState(null);


    const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <div>
          <Button onClick={handleOpen}>Open reservation modal</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>


              <div>
                <Typography id="modal-modal-title">
                  Velg dato:
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Basic example"
                    value={valueDate}
                    onChange={(newValue) => {
                      setValueDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>

              <div>
                <Typography id="modal-modal-title">
                  Andre kommentarer:
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="for eks. allergier"
                  multiline
                  maxRows={4}
                  value={value}
                  onChange={handleChange}
                />
              </div>

              <div>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Velg tidspunkt:
              </Typography>
              </div>
            </Box>
          </Modal>
        </div>
      );
    }

    */