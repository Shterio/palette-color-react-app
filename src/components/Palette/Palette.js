import React, { Component, Fragment } from 'react';
import ColorBox from '../ColorBox/ColorBox';

import './Palette.css';

export default class Palette extends Component {
	render() {
		const boxes = this.props.colors.map((color, id) => (
			<ColorBox background={color.color} name={color.name} key={id} />
		));
		return (
			<Fragment>
				<div className='Palette'>{boxes}</div>
			</Fragment>
		);
	}
}
