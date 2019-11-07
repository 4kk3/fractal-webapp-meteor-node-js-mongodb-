import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {SavedFractals} from '../api/savedfractals.js';

class Share extends Component {
	
}

export default withTracker(() => {
	return {
		console.log(SavedFractals.find({}).fetch();
	};
});
