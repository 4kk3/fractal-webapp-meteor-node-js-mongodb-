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
	}

	sharesendup() {
		this.props.triggerParentUpdate;
	}

	//renderpreset(fractalvalues) {
	//	return <FractalPreset fractalvalues = {fractalvalues} triggerParentUpdate = {this.sharesendup} />;
	//}

        render() {
		//if (this.state.presetcount < this.props.savedfractals.length) {
                        //var i = this.state.presetcount
                       // while (i < this.props.savedfractals.length) {
                      //          this.renderpreset(Object.values(this.props.savedfractals[i]));
                    //            i++;
                  //      }
                //        this.setState({presetcount: i});
                //}
                return (
                        <div className="container">
				{this.props.savedfractals.map(function(fractalvalues, i) {
					return <FractalPreset fractalvalues = {Object.values(fractalvalues)} key = {i}/>
				})}
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




