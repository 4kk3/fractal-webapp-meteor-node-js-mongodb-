import React, { Component } from 'react';
import {SavedFractals} from '../api/savedfractals.js';

export default class FractalPreset extends Component {

        savetodatabase = () => {
                SavedFractals.update(this.props.task._id{
         		$set: { presetgenerated: true},
                });     
        }

	render() {
                return (
                        <div className="container">
				<h2 onClick = this.savetodatabase>{this.props.fractalvalues[0]}</h2>
                        </div>
                );
        }
}
