import React from 'react'
import {MdOutlineLocalDrink} from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { IoPizzaOutline } from "react-icons/io";

export const SidebarData = [
{
      title: 'Pizza',
      path: '/pizza',
      icon: <IoPizzaOutline />,
      cName: 'nav-text'

}, 
{
    title: 'Pasta',
    path: '/pasta',
    icon: <GiBowlOfRice />,
    cName: 'nav-text'

},
{
    title: 'Drikke',
    path: '/drikke',
    icon: <MdOutlineLocalDrink />,
    cName: 'nav-text'

},   

]