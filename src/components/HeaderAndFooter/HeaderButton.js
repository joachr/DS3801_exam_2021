import {Button} from "@material-ui/core";
import React from 'react'

function HeaderButton({text, icon, click, href}) {
    return (
        <div>
            <Button style={{
                backgroundColor: '#006357',
                color: 'white',
                margin: '1em',
            }}
                    variant="contained" href={href} onClick={click} startIcon={icon}>{text}</Button>
        </div>
    )
}

export default HeaderButton

