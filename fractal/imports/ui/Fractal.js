import React, { Component } from 'react';
import {SavedFractals} from '../api/savedfractals.js';
import {withTracker} from 'meteor/react-meteor-data';

class Fractal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "untitled",
			width: 1920,
			height: 1080,
			iterations: 100,
			zoom: 400,
			focused: false,
			generate: false,
			presetgenerated: false,
			panx: 3,
			pany: 1.35,
			color: 0,
			fractalvalues: [],
			resetvalues: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.generate = this.generate.bind(this);
		this.checkIfBelongsToMandelbrotSet = this.checkIfBelongsToMandelbrotSet.bind(this);
		this.generateMandelbrot = this.generateMandelbrot.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.reset = this.reset.bind(this);
		this.save = this.save.bind(this);
		this.savetodatabase = this.savetodatabase.bind(this);
		this.signalchild = this.signalchild.bind(this);
 	}
	componentDidMount() {
		this.setState({resetvalues: [this.state.width, this.state.height, this.state.iterations, this.state.zoom, this.state.panx, this.state.pany, this.state.color]})
		//Instantiate Canvas
                var canvas = this.refs.canvas;
                var ctx = canvas.getContext("2d");
                canvas.width = this.state.width;
                canvas.height = this.state.height;

                //Draw Canvas
                this.generateMandelbrot(canvas, ctx);
	}
	componentDidUpdate() {
		if (this.state.generate == true && this.state.focused == false) {
			this.generate();
		}
	}
	signalchild() {
		var i = 0;
		while (i < this.props.savedfractals.length) {
			if (Object.values(this.props.savedfractals[i])[1][8]) {
				this.setState({width: Object.values(this.props.savedfractals[i])[1][0]});
                		this.setState({height: Object.values(this.props.savedfractals[i])[1][1]});
                		this.setState({iterations: Object.values(this.props.savedfractals[i])[1][2]});
                		this.setState({zoom: Object.values(this.props.savedfractals[i])[1][3]});
                		this.setState({panx: Object.values(this.props.savedfractals[i])[1][4]});
                		this.setState({pany: Object.values(this.props.savedfractals[i])[1][5]});
                		this.setState({color: Object.values(this.props.savedfractals[i])[1][6]});
                		this.generate();
				this.returnpresetboolean(Object.values(this.props.savedfractals[i])[0]);
				break;
			}
			i++;
		}
	}
	returnpresetboolean(fractalid){
		SavedFractals.update(fractalid, {
                        $set: { fractalvalues.8: false },
                });     
	}
	generate() {
		var canvas = this.refs.canvas;
		var ctx  = canvas.getContext("2d");
                canvas.width = this.state.width;
                canvas.height = this.state.height;

		this.generateMandelbrot(canvas, ctx);
	}
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
		this.setState({generate: true});
	}
	handleClick(event) {
		switch ([event.target.name][0]) {
			case "up":
				this.setState({pany: this.state.pany + 0.1});
				break;
			case "left":
				this.setState({panx: this.state.panx + 0.1});
				break;
			case "right":
				this.setState({panx: this.state.panx - 0.1});
				break;
			case "down":
				this.setState({pany: this.state.pany - 0.1});
				break; 
		}
		this.generate();
	}
	reset() {
		this.setState({width: this.state.resetvalues[0]});
		this.setState({height: this.state.resetvalues[1]});
		this.setState({iterations: this.state.resetvalues[2]});
		this.setState({zoom: this.state.resetvalues[3]});
		this.setState({panx: this.state.resetvalues[4]});
		this.setState({pany: this.state.resetvalues[5]});
		this.setState({color: this.state.resetvalues[6]});
		this.generate();
	}
	save() {
		this.setState({fractalvalues: [this.state.name, this.state.width, this.state.height, this.state.iterations, this.state.zoom, this.state.panx, this.state.pany, this.state.color, this.state.presetgenerated]}, this.savetodatabase);
	}
	savetodatabase = () => {
		const {fractalvalues} = this.state;
		SavedFractals.insert({
                        fractalvalues,
                        createdAt: new Date(),
                });	
	}
	onBlur() {
		this.setState({focused: false});	
	}
	onFocus() {
		this.setState({focused: true});
	}
	//Mandelbrot
	generateMandelbrot(canvas, ctx) {
		var magnificationFactor = this.state.zoom;
		var panX = this.state.panx;
		var panY = this.state.pany;
                for(var x = 0; x < canvas.width; x++) {
                	for(var y = 0; y < canvas.height; y++) {
                        	var belongsToSet = this.checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX, y/magnificationFactor - panY);
                                if(belongsToSet == 0) {
    					ctx.fillStyle = '#000';
    					ctx.fillRect(x, y, 1, 1); // Draw a black pixel
				} else {
					if (belongsToSet > 50) {
						ctx.fillStyle = 'hsl(' + this.state.color.toString() +  ', 100%, 50%)';
						ctx.fillRect(x, y, 1, 1);
					}
					else {
    						ctx.fillStyle = 'hsl(' + this.state.color.toString() +  ', 100%, ' + belongsToSet + '%)';
    						ctx.fillRect(x, y, 1, 1); // Draw a colorful pixel
					}
				}
                        }
		}
	}
	checkIfBelongsToMandelbrotSet(x,y) {
    		var realComponentOfResult = x;
    		var imaginaryComponentOfResult = y;
    		var maxIterations = this.state.iterations;
    		for(var i = 0; i < maxIterations; i++) {
         		var tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult * imaginaryComponentOfResult + x;
         		var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;
         		realComponentOfResult = tempRealComponent;
         		imaginaryComponentOfResult = tempImaginaryComponent;

         		// Return a number as a percentage
         		if(realComponentOfResult * imaginaryComponentOfResult > 5) { 
            			return (i/maxIterations * 100);
			}
    		}
    		return 0;   // Return zero if in set        
	}       

	render() {
    		return (
			<div className = "container">
				<canvas ref = "canvas"/>
				<div>
					<button name = "up" onClick = {this.handleClick}>Up</button>
                                	<button name = "left" onClick = {this.handleClick}>Left</button>
                                	<button name = "right" onClick = {this.handleClick}>Right</button>
                                	<button name = "down" onClick = {this.handleClick}>Down</button>
					<form>
						Resolution:<br/>
						<input type = "number" name = "width" value = {this.state.x} onChange = {this.handleChange} onBlur = {this.onBlur} onFocus = {this.onFocus}/>
						x
						<input type = "number" name = "height" value = {this.state.y} onChange = {this.handleChange} onBlur = {this.onBlur} onFocus = {this.onFocus}/><br/>
						Iterations:<br/>
						<input type = "number" name = "iterations" value = {this.state.iterations} onChange = {this.handleChange} onBlur = {this.onBlur} onFocus = {this.onFocus}/><br/>
						Zoom:<br/>
						<input type = "number" name = "zoom" value = {this.state.zoom} onChange = {this.handleChange} onBlur = {this.onBlur} onFocus = {this.onFocus}/><br/>
						Color:<br/>
						<input type = "number" name = "color" value = {this.state.color} onChange = {this.handleChange}  onBlur = {this.onBlur} onFocus = {this.onFocus}/><br/>
						Name:<br/>
						<input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange} onBlur = {this.onBlur} onFocus = {this.onFocus}/><br/>
					</form>
					<button name = "reset" onClick = {this.reset}>Reset</button>
					<button name = "save" onClick = {this.save}>Save</button>
				</div>
    			</div>
		);
  	}
}

export default withTracker(() => {
        return {
		savedfractals: SavedFractals.find().fetch(),
	};
})(Fractal);


