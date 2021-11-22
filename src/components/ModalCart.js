import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import pizzaImage from '../components/assets/images/cadonation.jpg'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { Card, CardActions, CardContent, CardMedia, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


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
  display: 'flex',
};

const useStylePizzaItem = makeStyles(() => ({
	pizzaItem: {
		position: "relative",
		display: "flex",
		flex: "1 1 auto",
		top: "10rem",
		marginBottom: "2rem",
		boxSizing: "border-box",
	},
}));

const useStylesButtons = makeStyles(() => ({
	buttonElements: {
		position: "relative",
		top: "11rem",
		right: "1rem",
	},
}));

const useStyleText = makeStyles(() => ({
	textElements: {
		position: "absolute",
		display: "flex",
		textAlign: "right",
		width: "55%",
		height: "55%",
		bottom: "8rem",
		left: "16rem",
	}
}));

const useStylePrice = makeStyles(() => ({
	priceElement: {
		position: "absolute",
		top: "-2rem",
		left: "200px",
	}
}));

const useStyleCard = makeStyles(() => ({
	cardElement: {
		display: "flex",
		position: "relative",
		padding: "1rem",
		margin: "1rem",
	}
}));



//const PizzaItem = (props) => {


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { pizzaItem } = useStylePizzaItem();
	const { buttonElements } = useStylesButtons();
	const { textElements } = useStyleText();
	const { priceElement } = useStylePrice();
	const { cardElement } = useStyleCard();

  const [counter, setCounter] = useState(1);

	const incrementCounter = () => {
	  setCounter(counter + 1);
	};
	const decrementCounter = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

  return (
      <div className={pizzaItem}>
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
				<Card className={cardElement} sx={{ maxWidth: 580 }}>
					<CardMedia
						image={pizzaImage}
						alt="margarita-pizza"
						component="img"
						height="250"
						style={{width: "50%"}}
					/>
					<div className={textElements}>
						<CardContent style={{maxHeight: "300px"}}>
								<Typography gutterBottom variant="h4" component="div">
								aaaa
								</Typography>
								<Typography style={{fontSize: "17px"}} variant="body2" color="text.secondary" component={"div"}>
									ssss
								</Typography>
						</CardContent>
					</div>
					<div className={buttonElements}>
						<div className={priceElement}>
							<Typography style={{fontWeight: "bold", fontSize: "27px"}}>
								111,-
							</Typography>
						</div>
						<CardActions>
							<Button onClick={decrementCounter} size={"small"} variant={"outlined"}>-</Button>
							<span style={{
								width: "2rem",
								display: "flex",
								justifyContent: "center",
								fontWeight: "bold",
								fontSize: "20px",
							}}>{counter}</span>
							<Button size={"small"} variant={"outlined"} onClick={incrementCounter}>+</Button>
							<Button size={"large"} id={"add-to-card-button"} style={{
								backgroundColor: '#009688',
								color: 'white',
								margin: '1em',
								width: "6rem",
							}}>Legg til</Button>
						</CardActions>
					</div>
				</Card>
        <Divider variant="middle"></Divider>
        </Box>
      </Modal>
			</div>
    /*<div>
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
            <img style={{ width: "200px"}} src={pizzaImage}  alt={"image of pizza"}/>
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
    </div>*/
  );
}
