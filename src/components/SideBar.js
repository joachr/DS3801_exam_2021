import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import {sidebarData} from './SideBarData';

function SideBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        
       <div className='sidebar' style={{marginTop: 100}}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
              
            {sidebarData.map((item, index) => {
                return(
                    <li key={index} className={item.cName}>

                    <Link  to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    </Link>
            
                    </li>
                    
                )
            })}
            </ul>
        </nav>
        </div>
       
    );
}

export default SideBar


