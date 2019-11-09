import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

import './Palette.css';

export default class Palette extends Component {
	render() {
		const boxes = this.props.colors.map((color) => <ColorBox background={color.color} name={color.name} />);
		return (
			<div>
				<h1 className='Palette_title'>Palette</h1>
				<div className='Palette'>{boxes}</div>
			</div>
		);
	}
}
