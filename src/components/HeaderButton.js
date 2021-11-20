import { Button } from "@material-ui/core";
import React from 'react'

function HeaderButton({text, icon, click}) {
    return (
        <div>
            <Button style={{
            backgroundColor: '#009688',
            color: 'white',
            margin: '1em',
        }} 
        variant="contained" href="#" onClick={ click } startIcon={ icon }>{ text }</Button>
        </div>
    )
}

export default HeaderButton

