import React, { Component } from 'react';
import Fractal from './Fractal.js';
import {withTracker} from 'meteor/react-meteor-data';
import {SavedFractals} from '../api/savedfractals.js';
// App component - represents the whole app

class App extends Component {
	constructor(props) {
                super(props);
                this.state = {
                	listoffractalpresets: []
                };
	}
	render() {
    		return (
      			<div className="container">
        			<header>
          				<h1>Fractal</h1>
        			</header>
				<Fractal/>
      			</div>
    		);
  	}
}

export default withTracker(() => {
        const fractals = SavedFractals.find().fetch();
	console.log(fractals);
	for (i = 0; i < fractals.length - 1; i++) {
                console.log(fractals[i]);
                console.log(Object.values(fractals[i])[1]);
        }
	console.log(Object.values(fractals[fractals.length])[0]);
        return {}
})(App);
