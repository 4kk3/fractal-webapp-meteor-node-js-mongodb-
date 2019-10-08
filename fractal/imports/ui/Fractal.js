import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Fractal extends Component {
	 componentDidMount() {
			//Instantiate Canvas
                        var canvas = this.refs.canvas;
                        var ctx = canvas.getContext("2d");
			canvas.width = 500;
			canvas.height = 500;
			
			//Draw Canvas
			this.generateMandelbrot(canvas, ctx);
	}
	//Mandelbrot
	generateMandelbrot(canvas, ctx) {
		var magnificationFactor = 2900;
		var panX = 0.7;
		var panY = 0.6;
                for(var x = 0; x < canvas.width; x++) {
                	for(var y = 0; y < canvas.height; y++) {
                        	var belongsToSet = this.checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX, y/magnificationFactor - panY);
                                if(belongsToSet == 0) {
    					ctx.fillStyle = '#000';
    					ctx.fillRect(x,y, 1,1); // Draw a black pixel
				} else {
    					ctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
    					ctx.fillRect(x,y, 1,1); // Draw a colorful pixel
				}
                        }
		}
	}

	checkIfBelongsToMandelbrotSet(x,y) {
    		var realComponentOfResult = x;
    		var imaginaryComponentOfResult = y;
    		var maxIterations = 100;
    		for(var i = 0; i < maxIterations; i++) {
         		var tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult * imaginaryComponentOfResult + x;
         		var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;
         		realComponentOfResult = tempRealComponent;
         		imaginaryComponentOfResult = tempImaginaryComponent;

         		// Return a number as a percentage
         		if(realComponentOfResult * imaginaryComponentOfResult > 5) 
            			return (i/maxIterations * 100);
    		}
    		return 0;   // Return zero if in set        
	}       

	//Mandelbrot
	render() {
    		return (
			<canvas ref = "canvas"/>
    		);
  	}
}

