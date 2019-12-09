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
		this.updatepresetcount = this.updatepresetcount.bind(this);
	}

	componentDidUpdate() {
		while (this.state.presetcount != this.props.savedfractals.length) {
			this.renderpreset(Object.values(this.props.savedfractals[this.state.presetcount]));
			this.updatepresetcount();
		}
	}
	
	updatepresetcount = () => {
		this.setState({presetcount: this.state.presetcount + 1});
		console.log(this.state.presetcount);
	}

	renderpreset(fractalvalues) {
		return (
			<FractalPreset fractalvalues = {fractalvalues}/>
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




