import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function HowManyPeople() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{
                    backgroundColor: '#009688',
                    color: 'white',
                }}
            >
            Antall personer
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>1</MenuItem>
                <MenuItem onClick={handleClose}>2</MenuItem>
                <MenuItem onClick={handleClose}>3</MenuItem>
                <MenuItem onClick={handleClose}>4</MenuItem>
                <MenuItem onClick={handleClose}>5</MenuItem>
                <MenuItem onClick={handleClose}>6</MenuItem>
                <MenuItem onClick={handleClose}>7</MenuItem>
                <MenuItem onClick={handleClose}>8</MenuItem>
                <MenuItem onClick={handleClose}>9</MenuItem>
                <MenuItem onClick={handleClose}>10+</MenuItem>
            </Menu>
        </div>
    )
}

export default HowManyPeople;