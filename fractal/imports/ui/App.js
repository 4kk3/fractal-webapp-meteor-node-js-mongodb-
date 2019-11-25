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
	var arraycheck;
	for (i = 0; i < fractals.length; i++) {
		if (i == fractals.length - 1) {
			arraycheck = listoffractalpresets.includes(Object.values(fractals[i])[0])
			if (arraycheck != true) {
				this.setState({listoffractalpresets
				this.setState({zoom: this.state.resetvalues[3]});
			}
			console.log(Object.values(fractals[i])[0]); 
		}
		else {
			console.log(Object.values(fractals[i])[1]); 
		}
        }

        return {}
})(App);
