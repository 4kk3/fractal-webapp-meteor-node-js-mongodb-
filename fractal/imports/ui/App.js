import React, { Component } from 'react';
import Fractal from './Fractal.js';
import Share from './Share';
import Helmet from 'react-helmet';

// App component - represents the whole app

export default class App extends Component {
	constructor(props) {
                super(props);
                this.appsenddown = this.appsenddown.bind(this);
        }
	appsenddown() {
		this.refs.child.signalchild();
	}
	render() {		
    		return (
      			<div className="container">
				<Fractal onRef={ref => (this.child = ref)}/>
				<Share triggerParentUpdate = {this.appsenddown}/>
      			</div>
    		);
  	}
}
