import React from 'react'
import {MdOutlineLocalDrink} from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { MdOutlineLocalPizza } from "react-icons/md";

export const paths = {
    PIZZA: '/pizza',
    SALAD: '/salad',
    DRINKS: '/drinks'
}

export const sidebarData = [
{
      title: 'Pizza',
      path: paths.PIZZA,
      icon: <MdOutlineLocalPizza/>,
      cName: 'nav-text'

}, 
{
    title: 'Salad',
    path: paths.SALAD,
    icon: <GiBowlOfRice />,
    cName: 'nav-text'

},
{
    title: 'Drikke',
    path: paths.DRINKS,
    icon: <MdOutlineLocalDrink />,
    cName: 'nav-text'

},   

]