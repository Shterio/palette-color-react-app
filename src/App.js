import React from 'react';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Palette {...seedColors[2]} />
		</div>
	);
}

export default App;
