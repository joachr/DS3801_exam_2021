import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
import {sidebarData} from './SideBarData';
import {makeStyles} from "@material-ui/styles";
import Button from "@mui/material/Button";

function SideBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (

        <div className='sidebar'
             style={{backgroundColor: '#FFD148',position: "relative",
                 display: "flex",
                 borderRadius:'0px 12px 12px 0px',
                 boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                 flexDirection: "column",
                 padding: '2px',
                 top: '150px',
                 width: '120px'}}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>

                    {sidebarData.map((item, index) => {
                        return (
                            <li style={{padding: '30px',}} key={index} className={item.cName}>

                                <Button variant="contained" style={{fontSize:'15px' ,right:'20px', width:'100px', height: '80px', backgroundColor: '#009688'}} component={Link} to={item.path}>
                                    <div style={{fontSize:'40px'}}>{item.icon}</div>
                                    <span>{item.title}</span>
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


