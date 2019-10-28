import React, { Component } from 'react';

export default class Fractal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 600,
			height: 600,
			iterations: 100
		};
		this.handleChange = this.handleChange.bind(this);
		this.generate = this.generate.bind(this);
		this.checkIfBelongsToMandelbrotSet = this.checkIfBelongsToMandelbrotSet.bind(this);
	}
	componentDidMount() {
		//Instantiate Canvas
                var canvas = this.refs.canvas;
                var ctx = canvas.getContext("2d");
                canvas.width = this.state.width;
                canvas.height = this.state.height;

                //Draw Canvas
                this.generateMandelbrot(canvas, ctx);
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
	}
	//Mandelbrot
	generateMandelbrot(canvas, ctx) {
		var magnificationFactor = 200;
		var panX = 3;
		var panY = 1.35;
                for(var x = 0; x < canvas.width; x++) {
                	for(var y = 0; y < canvas.height; y++) {
                        	var belongsToSet = this.checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX, y/magnificationFactor - panY);
                                if(belongsToSet == 0) {
    					ctx.fillStyle = '#000';
    					ctx.fillRect(x, y, 1, 1); // Draw a black pixel
				} else {
					if (belongsToSet > 50) {
						ctx.fillStyle = 'hsl(0, 100%, 50%)';
						ctx.fillRect(x, y, 1, 1);
					}
					else {
    						ctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
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
				<form>
					Resolution:<br/>
					<input type = "number" name = "width" value = {this.state.x} onChange = {this.handleChange}/>
					x
					<input type = "number" name = "height" value = {this.state.y} onChange = {this.handleChange}/><br/>
					Iterations:<br/>
					<input type = "number" name = "iterations" value = {this.state.iterations} onChange = {this.handleChange}/><br/>
				</form>
				<button onClick = {this.generate}>Generate</button>
    			</div>
		);
  	}
}

