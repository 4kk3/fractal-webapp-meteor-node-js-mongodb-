import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Fractal extends Component {
	generateCanvas() {
			//Instantiate Canvas
                        const canvas = this.refs.canvas;
                        const ctx = canvas.getContext("2d");
			canvas.width = 600;
			canvas.height = 600;
			
			//Draw Canvas
			generateMandelbrot(canvas, ctx);
	}
	//Mandelbrot
	generateMandelbrot(canvas, ctx) {
		var magnificationFactor = 600;
                var panX = 0;
                var panY = 0;
                for(var x = 0; x < canvas.width; x++) {
                	for(var y = 0; y < canvas.height; y++) {
                        	var belongsToSet = checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX, y/magnificationFactor - panY);
                                if(belongsToSet) {
                                	ctx.fillRect(x, y, 1, 1); // Draw a black pixel
                                }
                        }
		}
	}

	checkIfBelongsToMandelbrotSet(x, y) {
		var realComponentOfResult = x;
		var imaginaryComponentOfResult = y;

		for(var i = 0; i < 10; i++) {
     			// Calculate the real and imaginary components of the result
     			// separately
     			var tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult * imaginaryComponentOfResult + x;
     			var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;
     			realComponentOfResult = tempRealComponent;
     			imaginaryComponentOfResult = tempImaginaryComponent;
		}	

		if (realComponentOfResult * imaginaryComponentOfResult < 5)
    			return true; // In the Mandelbrot set

		return false; // Not in the set
	}

	//Mandelbrot
	render() {
    		return (
			<canvas ref = "canvas"/>
    		);
  	}
}
