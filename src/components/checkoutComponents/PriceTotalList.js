import React from 'react'

function PriceTotalList() {
    return (
        <div style={{
            width: '40%'
        }}>
            <ul style={{
                fontWeight: 'bold',
                listStyle: 'none',
            }}>
                <li style={{
                margin: '0.2rem'
                }}>Subtotal: </li>
                <li style={{
                margin: '0.2rem'
                }}>Frakt: </li>
                <li style={{
                margin: '0.2rem'
                }}>Tips: </li>
                <li style={{
                margin: '0.2rem'
                }}>Total: </li>
            </ul>
        </div>
    )
}

export default PriceTotalList
