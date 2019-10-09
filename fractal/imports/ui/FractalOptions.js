import React, { Component } from 'react';

import Fractal from './Fractal.js';

export default class FractalOptions extends Component {
        render() {
                return (
			<Fractal/>
                        <form>
				Iterations:<br>
				<input type = "number" name = "iterations"><br>
				Resolution:<br>
				<select>
  					<option value="volvo">Volvo</option>
  					<option value="saab">Saab</option>
  					<option value="mercedes">Mercedes</option>
  					<option value="audi">Audi</option>
				</select><br> 
				Color:<br>
				<span class="spectrum"></span><br>
				<input type="range" min="0" max="300" step="1"><br>
			</form>
                );
        }
}
