import React, { Component } from 'react';
import Fractal from './Fractal.js';
import Share from './Share';
// App component - represents the whole app

export default class App extends Component {
	render() {
    		return (
      			<div className="container">
        			<header>
          				<h1>Fractal</h1>
        			</header>
				<Fractal/>
				<Share/>
      			</div>
    		);
  	}
}
