import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {SavedFractals} from '../api/savedfractals.js';

class Share extends Component {
	render() {
		return null;	
	}	
}

export default withTracker(() => {
	const fractals = SavedFractals.find().fetch();
	console.log("dfggfgfgf");
	console.log(fractals);
	return {}
})(Share);
