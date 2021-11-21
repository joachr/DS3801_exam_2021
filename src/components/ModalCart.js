import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import pizzaImage from '../components/assets/images/cadonation.jpg'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { CardContent, Divider } from '@material-ui/core';



const style = {
  position: 'absolute',
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
           
          <div>
            <img style={{ width: "200px"}} src={pizzaImage} />
              <div style={{position: 'absolute', left: '235px', top:'75px'}} >
                <CardContent style={{maxHeight: "300px"}}>
                  <Typography gutterBottom  variant="h4" id="modal-modal-description">
                    Margarita 
					        </Typography>
                </CardContent>
              </div>
          </div>
          
          <div style={{position: 'absolute', left: '235px', top:'180px'}}>
            <Typography style={{fontSize: "17px"}} variant="body2" color="text.secondary" id="modal-modal-description">
              Ost, tomatsaus, basilikum 
						</Typography>
          </div>

          <div style={{position: 'absolute', left: '280px', top:'240px'}}>
            <Typography style={{fontSize: "17px"}} variant="body2" id="modal-modal-description">
              Medium
						</Typography>
          </div>
        <div style={{position: 'absolute', left: '70px', bottom:'500px'}}>
          <div style={{
            borderRadius: '12px',
            background: '#009688',
            paddingInline: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', 
            left: '500px', 
            top:'300px',
            color: 'white',
            width: '45px',
            height: '93px',
            font: '36px Arial'
							}}>{5}</div>

            <Button endIcon={<ArrowUpward style= {{ font: '30px Arial', marginRight: '15px'}}/>}  size={"Large"} style={{
                borderRadius: '9px',
                position: 'absolute', 
                left: '595px', 
                top:'288px',
								backgroundColor: '#009688',
								color: 'white',
								margin: '1em',
								width: "6rem",
							}}></Button>
            
            <Button endIcon={<ArrowDownward style= {{ font: '30px Arial', marginRight: '15px'}}/>}  size={"Large"} style={{
                borderRadius: '9px',
                position: 'absolute', 
                left: '595px', 
                top:'335px',
								backgroundColor: '#009688',
								color: 'white',
								margin: '1em',
								width: "6rem",
							}}></Button>
          </div>

         
          <Divider variant="middle"></Divider>
        </Box>
      </Modal>
    </div>
  );
}
