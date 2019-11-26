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
	componentDidUpdate() {
		console.log(this.props.databasevalues.length)
                var i;
                for (i = 0; i < this.props.databasevalues.length; i++) {
			console.log(Object.values(this.props.databasevalues[i])[1])
			console.log(this.props.databasevalues[i])
                        if (this.state.listoffractalpresets.includes(Object.values(this.props.databasevalues[i])[1]) != true) {
                                this.setState(prevState => ({
                                        listoffractalpresets: [...prevState.listoffractalpresets, Object.values(this.props.databasevalues[i])[1]]
                                }))
                        }
                }
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
        return {
		databasevalues: SavedFractals.find().fetch(),
	};
})(App);
