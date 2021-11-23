import React from 'react';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function HowManyPeople() {

	const [numberOfPeople, setnumberOfPeople] = React.useState('');

	const handleChange = (event) => {
		setnumberOfPeople(event.target.value);
	};


	return (
		<div>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Antall personer</InputLabel>
				<Select labelId="demo-simple-select-label" id="demo-simple-select" value={numberOfPeople}
				        label="Antall personer" onChange={handleChange}>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={2}>2</MenuItem>
					<MenuItem value={3}>3</MenuItem>
					<MenuItem value={4}>4</MenuItem>
					<MenuItem value={5}>5</MenuItem>
					<MenuItem value={6}>6</MenuItem>
					<MenuItem value={7}>7</MenuItem>
					<MenuItem value={8}>8</MenuItem>
					<MenuItem value={9}>9</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}

export default HowManyPeople;