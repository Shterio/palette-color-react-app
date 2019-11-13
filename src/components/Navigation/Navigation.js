import React, { useState, Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navigation.css';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: 'hex',
			isOpen: false
		};
	}

	isOpen = () => this.setState({ isOpen: !this.state.isOpen });

	handleChange = (e) => {
		this.setState({ format: e.target.value });
		this.props.handleChange(e.target.value);
	};

	render() {
		return (
			<div>
				<Navbar color='light' light expand='md'>
					<NavbarBrand href='/'>{this.props.name}</NavbarBrand>
					<NavbarToggler onClick={this.isOpen} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<span>Level: {this.props.level}</span>
						<Slider
							defaultValue={this.props.level}
							min={100}
							max={900}
							step={100}
							onAfterChange={this.props.changeLevel}
						/>
						<div className='select-container'>
							<Select onChange={this.handleChange} value={this.state.format}>
								<MenuItem value='hex'>HEX - #ffffff</MenuItem>
								<MenuItem value='rgb'>RGB - #ffffff</MenuItem>
								<MenuItem value='rgba'>RGBA - #ffffff</MenuItem>
							</Select>
						</div>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
