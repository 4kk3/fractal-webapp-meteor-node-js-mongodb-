import React, { Component } from 'react';
import {SavedFractals} from '../api/savedfractals.js';

export default class FractalPreset extends Component {
	constructor(props) {
                super(props);
		this.state = {
                        fractalvalues: this.props.fractalvalues[1]
                };
		this.triggergeneration = this.triggergeneration.bind(this);
                this.savetodatabase = this.savetodatabase.bind(this);
        }
        triggergeneration = () => {
		console.log(this.props.fractalvalues[0]);
		console.log("gfgd");
		SavedFractals.remove(this.props.fractalvalues[0]);
		this.setState({fractalvalues: [this.state.fractalvalues[0], this.state.fractalvalues[1], this.state.fractalvalues[2], this.state.fractalvalues[3], this.state.fractalvalues[4], this.state.fractalvalues[5], this.state.fractalvalues[6], this.state.fractalvalues[7], true]})
		this.savetodatabase();
		this.props.triggerParentUpdate();
        }
	savetodatabase = () => {
                const {fractalvalues} = this.state;
                SavedFractals.insert({
                        fractalvalues,
                        createdAt: new Date(),
                });
        }
	render() {
                return (
                        <div className="container">
				<a onClick = {this.triggergeneration}>{this.props.fractalvalues[1][0]}</a>
                        </div>
                );
        }
}
