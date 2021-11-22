import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
import {sidebarData} from './SideBarData';
import {makeStyles} from "@material-ui/styles";
import Button from "@mui/material/Button";
import {Grid} from "@material-ui/core";

function SideBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className='sidebar' style={{
            borderRadius: '0px 12px 12px 0px',
            width: '160px',
            position: 'fixed',
            zIndex: 1,
            top: '220px',
            overflowX: 'hidden',
            padding: '8px 0',
            backgroundColor: '#FFD148',
        }}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>

                    {sidebarData.map((item, index) => {
                        return (
                            <li style={{padding: '30px',}} key={index} className={item.cName}>

                                <Button variant="outlined"
                                        style={{fontSize:'15px' ,right:'30px', width:'161px', height: '80px', backgroundColor: 'rgba(0,150,136,0)'}}
                                        component={Link}
                                        to={item.path}>
                                    <div style={{fontSize:'40px'}}>
                                      {item.icon}
                                    </div>
                                    <span>
                                      {item.title}
                                    </span>
                                </Button>

                            </li>

                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default SideBar


