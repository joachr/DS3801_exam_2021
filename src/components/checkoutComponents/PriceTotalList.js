import React from 'react';
import Typography from '@material-ui/core/Typography'

function PriceTotalList( { tips, frakt, subTotal, total }) {

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
                }}>Subtotal: { subTotal }kr </li>
                <li style={{
                margin: '0.2rem'
                }}>Frakt: { frakt }kr</li>
                <li style={{
                margin: '0.2rem'
                }} >Tips: { tips }kr</li>
                <li style={{
                margin: '0.2rem'
                }}>Total: { total }kr</li>
            </ul>
        </Typography>
    )
}

export default PriceTotalList
