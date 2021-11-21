import { AppBar, Badge, Fab, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import HeaderButton from "./HeaderButton";
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from "react";

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#FFD148",
    },
 }));

 const displayDesktop = () => {
    return <Toolbar style={{
      position: 'relative',
      alignItems: 'right',
      justifyContent: 'right'
    }}>
        <HeaderButton icon={<EventSeatRoundedIcon />} text="Reserver bord"></HeaderButton>
        <HeaderButton icon={<RestaurantMenuRoundedIcon />} text="Meny"></HeaderButton>
       
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

function Header() {
    const { header } = useStyles();
  return (
    <div>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </div>
  );
}

export default Header
