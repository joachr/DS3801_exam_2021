import {Input} from '@material-ui/core'
import React from 'react'

function InputField({type, placeholder}) {
	return (
		<div style={{
			width: '50%'
		}}>
			<Input style={{
				marginTop: '0.5rem',
				marginBottom: '0.5rem',
				padding: '0.2rem',
				backgroundColor: 'white',
				borderRadius: '5px',
			}} type={type} required="true" placeholder={placeholder}/>
		</div>
	)
}

export default InputField
