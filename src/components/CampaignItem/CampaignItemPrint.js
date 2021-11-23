import React from 'react';
import {makeStyles} from "@material-ui/styles";
import SideBar from "../SideBar.js";
import CampaignItemCard from "./CampaignItemCard.js";


const useStyles = makeStyles(() => ({
  menuPrint: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    top: "8rem",
  },
}));

const CampaignItemPrint = (props) => {

  const {menuPrint} = useStyles();



    return (
      <div>
        <div className={menuPrint}>

          {props.items.map((item) => (
            <CampaignItemCard title={item.title}
                          price={item.price}
                          ingredients={item.ingredients}
                          img={item.image}
                          id={item.id}
                          item={item}
                          key={item.id}/>
          ))}
        </div>
      </div>
    );
}

export default CampaignItemPrint;
