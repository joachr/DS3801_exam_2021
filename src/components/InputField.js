import { Input } from '@material-ui/core'
import React from 'react'

function InputField({type, placeholder}) {
    return (
        <div style={{
            width: '50%'
        }}>
            <Input 
                style={{
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    padding: '0.3rem',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                }}
                typeof={type}
                required="true"
                placeholder={placeholder}/>
        </div>
    )
}

export default InputField
