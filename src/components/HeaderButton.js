import { Button } from "@material-ui/core";
import React from 'react'

function HeaderButton({text, icon}) {
    return (
        <div>
            <Button style={{
            backgroundColor: '#009688',
            color: 'white',
            margin: '1em',
        }} 
        variant="contained" href="#" startIcon={ icon }>{ text }</Button>
        </div>
    )
}

export default HeaderButton

