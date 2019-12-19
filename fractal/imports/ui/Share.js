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
		//this.renderpreset = this.renderpreset.bind(this);
		this.sharesendup = this.sharesendup.bind(this);
		this.render = this.render.bind(this);
	}

	sharesendup() {
		console.log("dsfg");
		this.props.triggerParentUpdate();
	}

        render() {
                return (
                        <div className="container">
				{this.props.savedfractals.map(function(fractalvalues, i) {
					return <FractalPreset triggerParentUpdate = {this.sharesendup} fractalvalues = {Object.values(fractalvalues)} key = {i}/>
				}, this)}
                        </div>
                );
        }
}

export default withTracker(() => {
	console.log(SavedFractals.find().fetch());
        return {
		savedfractals: SavedFractals.find().fetch(),
	};
})(Share);




