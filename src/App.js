import React from 'react';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';

import './App.css';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seedColors: seedColors
		};
	}

	componentDidMount() {
		console.log(this.state);
	}

	render() {
		return (
			<div className='App m-0'>
				<Navigation name='Palette Color App' />
				<Palette {...this.state.seedColors[2]} />
			</div>
		);
	}
}

export default App;
