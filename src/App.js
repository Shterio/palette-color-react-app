import React from 'react';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';

import './App.css';

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
			<div className='App'>
				<Palette {...this.state.seedColors[2]} />
			</div>
		);
	}
}

export default App;
