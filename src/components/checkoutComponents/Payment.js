import React from 'react';
import PriceTotalList from './PriceTotalList';
import ChoosePayment from './ChoosePayment';

function Payment({tipss, fraktt, subTotall, totall}) {
	return (
		<div style={{
			display: 'flex',
			margin: '1rem',
			flexDirection: 'row'
		}}>
			<PriceTotalList tips={tipss} frakt={fraktt} subTotal={subTotall} total={totall}/>
			<ChoosePayment/>
		</div>
	)
}

export default Payment;
