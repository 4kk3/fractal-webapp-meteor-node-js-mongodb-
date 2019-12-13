import React, { Component } from 'react';
import Fractal from './Fractal.js';
import Share from './Share';
import Helmet from 'react-helmet';

// App component - represents the whole app

export default class App extends Component {
	appsenddown() {
		this.refs.child.signalchild();
	}
	render() {		
    		return (
      			<div className="container">
				<Fractal refs = "child"/>
				<Share triggerParentUpdate = {this.appsenddown}/>
      			</div>
    		);
  	}
}
