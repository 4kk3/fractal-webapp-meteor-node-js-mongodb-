import React, { Component } from 'react';
import {SavedFractals} from '../api/savedfractals.js';

export default class FractalPreset extends Component {
	constructor(props) {
                super(props);
                //this.renderpreset = this.renderpreset.bind(this);
                this.savetodatabase = this.savetodatabase.bind(this);
        }
        savetodatabase = () => {
                SavedFractals.update(this.props.fractalvalues[0], {
         		$set: { fractalvalues: [presetgenerated: true]},
                });     
        }
	test() {
		console.log("dggdsf");
	}
	render() {
		console.log("loL");
                return (
                        <div className="container">
				<a onClick = {this.test} onClick = {this.props.triggerParentUpdate}>{this.props.fractalvalues[1][0]}</a>
                        </div>
                );
        }
}
