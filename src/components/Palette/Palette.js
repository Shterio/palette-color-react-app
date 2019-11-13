import React, { Component, Fragment } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navigation from '../Navigation/Navigation';
import Footer from '../../Footer/Footer';

import './Palette.css';

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: 'hex'
		};
	}

	changeLevel = (level) => {
		this.setState({ level });
	};

	changeFormat = (value) => {
		this.setState({ format: value });
	};

	render() {
		const { paletteName, emoji } = this.props.palette;
		const { level, format } = this.state;
		const boxes = this.props.palette.colors[this.state.level].map((color, id) => (
			<ColorBox background={color[format]} name={color.name} key={id} />
		));
		return (
			<Fragment>
				<Navigation
					name='Palette Color App'
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
				/>
				<div className='Palette'>{boxes}</div>
				<Footer name='paletteName' />
			</Fragment>
		);
	}
}
