import React from 'react'

function PriceTotalList( { tips, frakt }) {

    return (
        <div style={{
            width: '40%'
        }}>
            <ul style={{
                fontWeight: 'bold',
                listStyle: 'none',
                fontSize: 'large'
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
        </div>
    )
}

export default PriceTotalList
