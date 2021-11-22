import { AppBar, Badge, Fab, Toolbar } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HeaderButton from "./HeaderButton";
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from "react";
import ModalCart from "../ModalCart.js";
import Cart from "../Cart/Cart.js";

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#FFD148",
    },
 }));

 const displayDesktop = () => {
    return <Toolbar style={{
      position: 'relative',
      alignItems: 'right',
      justifyContent: 'right',
      backgroundColor: '#FFD148'
    }}>
        <HeaderButton icon={<EventSeatRoundedIcon/>} text="Reserver bord"/>
        <HeaderButton icon={<RestaurantMenuRoundedIcon/>} text="Meny"/>
       
        <Badge  
        anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
        color="secondary" 
        overlap="circular" 
        badgeContent="5">

          <Fab style={{ backgroundColor: '#009688' }}>




            <ShoppingCartOutlinedIcon fontSize="large" style={{
              color: 'black',
              marginLeft: '0.5em',
              marginRight: '0.5em'
            }}/>
          </Fab>
        </Badge>
    </Toolbar>;
  };

function Header({ func1, func2 }, props) {
    const { header } = useStyles();
  return (
    <div>
      <AppBar className={header}><Toolbar style={{
      position: 'relative',
      alignItems: 'right',
      justifyContent: 'right',
      backgroundColor: '#FFD148'
    }}>
        <HeaderButton icon={<EventSeatRoundedIcon/>} text="Reserver bord" click={func1}/>
        <HeaderButton icon={<RestaurantMenuRoundedIcon/>} text="Meny"/>
        {/*TODO KUN FOR Å SE AT CART FUNGERER*/}
        {/*<HeaderButton icon={<Cart />}/>*/}
        <Badge  
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        color="secondary" 
        overlap="circular" 
        badgeContent={99}>





          <Fab style={{ backgroundColor: '#009688' }} onClick={ func2 }>
            <ShoppingCartOutlinedIcon fontSize="large" style={{
              color: 'black',
              marginLeft: '0.5em',
              marginRight: '0.5em'
            }}/>
          </Fab>
        </Badge>
    </Toolbar></AppBar>
    </div>
  );
}

export default Header
