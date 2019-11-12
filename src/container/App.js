import React from 'react';
import Palette from '../components/Palette/Palette';
import seedColors from '../seedColors';
import { generatePalette } from '../colorHelper';

import './App.css';

class App extends React.Component {
	render() {
		console.log(generatePalette(seedColors[2]));
		return (
			<div className='App m-0'>
				<Palette palette={generatePalette(seedColors[2])} />
			</div>
		);
	}
}

export default App;
