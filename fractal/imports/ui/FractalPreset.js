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
         		$set: { fractalvalues.8: true },
                });
		this.props.triggerParentUpdate();
		console.log("dfsg");     
        }
	render() {
		console.log("loL");
                return (
                        <div className="container">
				<a onClick = {this.savetodatabase}>{this.props.fractalvalues[1][0]}</a>
                        </div>
                );
        }
}
