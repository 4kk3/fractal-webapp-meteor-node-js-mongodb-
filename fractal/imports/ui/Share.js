import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {SavedFractals} from '../api/savedfractals.js';
import FractalPreset from './FractalPreset.js'

export default class Share extends Component {
	constructor(props) {
		super(props);
		this.state = {
			presetcount: 0	
		};
	}

	componentDidUpdate() {
		var temppresetcount = this.state.presetcount;
		while (temppresetcount != this.props.savedfractals.length) {
			this.renderpreset(Object.values(this.props.savedfractals[temppresetcount])[1])
		}
	}

	renderpreset(fractalvalues) {
		return (
			<FractalPreset name = fractalvalues[0] width = fractalvalues[1] height = fractalvalues[2] iterations = fractalvalues[3] zoom = fractalvalues[4] panx = fractalvalues[5] pany = fractalvalues[6] color = fractalvalues[7]/>
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




