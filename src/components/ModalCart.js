import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import pizzaImage from '../components/assets/images/cadonation.jpg'



const style = {
  position: 'absolute',
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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ShoppingCartOutlinedIcon fontSize="large" style={{
            color: 'black'
          }}/>
          
          <div style={{paddingTop: '30px'}}>

          <img style={{ width: "200px"}} src={pizzaImage} />

          
          <Typography fontSize="large" fontWeight="bold" id="modal-modal-description">
          Margarita 
          </Typography>
          
          <div style={{position: 'absolute', left: '500px', top:'180px'}}>
            <span style={{
							backgroundColor: '#009688',
							color: 'white',
							width: "6rem",
              height: "4rem",
							display: "flex",
              justifyContent: "center",
              }}>{1}</span>
          </div>
          <Typography style={{paddingTop: '30px'}} fontSize="large" fontWeight="bold" id="modal-modal-description">
          Ost, tomatsaus, basilikum 
          </Typography>
          
          <Typography style={{paddingTop: '30px'}} fontSize="large" fontWeight="bold" id="modal-modal-description">
          Liten 
          </Typography>
       
          <Typography>--------------------------------------</Typography>
          
          </div>


          <div style={{paddingTop: '30px'}}>

          <img style={{ width: "200px"}} src={pizzaImage} />

          <Typography fontSize="large" fontWeight="bold" id="modal-modal-description">
          Margarita 
          </Typography>
          
          <Typography style={{paddingTop: '30px'}} fontSize="large" fontWeight="bold" id="modal-modal-description">
          Ost, tomatsaus, basilikum 
          </Typography>
          
          <Typography style={{paddingTop: '30px'}} fontSize="large" fontWeight="bold" id="modal-modal-description">
          Liten 
          </Typography>
          
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
