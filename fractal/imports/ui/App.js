import React, { Component } from 'react';

import FractalOptions from './FractalOptions.js';

// App component - represents the whole app

export default class App extends Component {
  	render() {
    		return (
      			<div className="container">
        			<header>
          				<h1>Fractal</h1>
        			</header>
				<FractalOptions/>
      			</div>
    		);
  	}
}
