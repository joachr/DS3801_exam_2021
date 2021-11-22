import { Link } from '@material-ui/core'
import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import {SidebarData} from './SideBarData';
{/*import { Link } from 'react-router-dom';*/}

function SideBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        
       <div className='sidebar'>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
              
            {SidebarData.map((item, index) => {
                return(
                    <li key={index} className={item.cName}>
                    {/*<Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>*/}
                    </li>
                    
                )
            })}
            </ul>
        </nav>
        </div>
       
    );
}

export default SideBar

