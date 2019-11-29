import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {SavedFractals} from '../api/savedfractals.js';
import FractalPreset from './FractalPreset.js'

class Share extends Component {
	constructor(props) {
		super(props);
		this.state = {
			presetcount: 0	
		};
	}
	this.sendup = this.sendup.bind(this);

	componentDidUpdate() {
		var temppresetcount = this.state.presetcount;
		while (temppresetcount != this.props.savedfractals.length) {
			this.renderpreset(Object.values(this.props.savedfractals[temppresetcount])[1])
		}
	}

	sendup(fractalvalues) {
		triggerParentUpdate
	}

	renderpreset(fractalvalues) {
		return (
			<FractalPreset triggerParentUpdate={() => this.sendup(fractalvalues)} fractalvalues = {fractalvalues}/>
		);
	}

        render() {
                return (
                        <div className="container">
                        </div>
                );
        }
}

export default withTracker(() => {
        return {
		savedfractals: SavedFractals.find().fetch(),
	};
})(Share);




