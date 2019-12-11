import React, { Component } from 'react';
import {SavedFractals} from '../api/savedfractals.js';

export default class FractalPreset extends Component {

        savetodatabase = () => {
<<<<<<< HEAD
                SavedFractals.update(this.props.fractalvalues[0], {
         		$set: { presetgenerated: true},
=======
                SavedFractals.update(this.props.fractalvalues._id, {
         		$set: { fractalvalues: [presetgenerated: true]},
>>>>>>> working on database
                });     
        }

	render() {
		console.log("loL");
                return (
                        <div className="container">
<<<<<<< HEAD
				<h2 onClick = {this.savetodatabase}>{this.props.fractalvalues[1][0]}</h2>
=======
				<h2 onClick = {this.savetodatabase} onClick = {this.props.triggerParentUpdate}>{this.props.fractalvalues[1][0]}</h2>
>>>>>>> working on database
                        </div>
                );
        }
}
