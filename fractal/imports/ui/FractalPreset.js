import React, { Component } from 'react';
import {SavedFractals} from '../api/savedfractals.js';

export default class FractalPreset extends Component {

        savetodatabase = () => {
                SavedFractals.update(this.props.fractalvalues[0], {
         		$set: { fractalvalues: [presetgenerated: true]},
                });     
        }

	render() {
		console.log("loL");
                return (
                        <div className="container">
				<h2 onClick = {this.savetodatabase} onClick = {this.props.triggerParentUpdate}>{this.props.fractalvalues[1][0]}</h2>
                        </div>
                );
        }
}
