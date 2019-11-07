import React from 'react';
import Palette from './Palette/Palette';
import seedColors from './seedColors';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Palette Palette={seedColors[4]} />
		</div>
	);
}

export default App;
