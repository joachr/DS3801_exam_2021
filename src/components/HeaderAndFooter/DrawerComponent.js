import {useState} from "react";
import {Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';



const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                anchor='right'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer} >
                <List style={{backgroundColor: '#FFD148'}}>
                    <ListItem divider button style={{backgroundColor: '#006357'}}>
                        <ListItemIcon>
                            <ListItemText>Courruus</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button style={{backgroundColor: '#006357'}}>
                        <ListItemIcon>
                            <ListItemText>Courruus</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button style={{backgroundColor: '#006357'}}>
                        <ListItemIcon>
                            <ListItemText>Courruus</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton>
                <MenuIcon onClick={() => setOpenDrawer(!openDrawer)}/>
            </IconButton>
        </>
    )
}

export default DrawerComponent;