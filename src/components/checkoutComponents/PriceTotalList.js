import React from 'react';
import Typography from '@material-ui/core/Typography'

function PriceTotalList( { tips, frakt }) {

    return (
        <Typography style={{
            width: '40%'
        }}>
            <ul style={{
                fontWeight: 'bold',
                opacity: '75%',
                listStyle: 'none',
                fontSize: 'large',
                letterSpacing: '0.15rem'
            }}>
                <li style={{
                margin: '0.2rem'
                }}>Subtotal: </li>
                <li style={{
                margin: '0.2rem'
                }}>Frakt: { frakt }</li>
                <li style={{
                margin: '0.2rem'
                }} >Tips: { tips }</li>
                <li style={{
                margin: '0.2rem'
                }}>Total: </li>
            </ul>
        </Typography>
    )
}

export default PriceTotalList
