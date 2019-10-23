import React, { Component } from 'react';

import Fractal from './Fractal.js';

export default class FractalOptions extends Component {
	regenerate(props){
			
	}
	
        render() {
                return (
			<div classname = "container">
				<Fractal/ >
				<form>
					Resolution:<br/>
					<input type="number" name = "x" placeholder = "x"/>
					<input type="number" name = "y" placeholder = "y"/>
				</form>
				<button type = "button" onClick={() => this.regenerate}>Regenerate</button>
			</div>
                );
        }
}
