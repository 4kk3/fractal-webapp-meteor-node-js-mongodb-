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
		this.renderpreset = this.renderpreset.bind(this);
	}

	componentDidUpdate() {
<<<<<<< HEAD
		while (this.state.presetcount != this.props.savedfractals.length) {
			this.renderpreset(Object.values(this.props.savedfractals[this.state.presetcount]));
			this.updatepresetcount();
		}
	}
	
	updatepresetcount = () => {
		this.setState({presetcount: this.state.presetcount + 1});
		console.log(this.state.presetcount);
=======
		if (this.state.presetcount < this.props.savedfractals.length) {
			var i = this.state.presetcount
			while (i < this.props.savedfractals.length) {
				this.renderpreset(Object.values(this.props.savedfractals[i]));
				i++;
			}
			this.setState({presetcount: i});
		}
	}
	sharesendup() {
		this.props.triggerParentUpdate;
>>>>>>> working on database
	}

	renderpreset(fractalvalues) {
		return <FractalPreset fractalvalues = {fractalvalues} triggerParentUpdate = {this.sharesendup} />;
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




