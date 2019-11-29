import React, { Component } from 'react';

// App component - represents the whole app

export default class FractalPreset extends Component {
        render() {
                return (
                        <div className="container">
				<h2 onClick = {()=>this.props.triggerParentUpdate(this.props.fractalvalues)}>{this.props.fractalvalues[0]}</h2>
                        </div>
                );
        }
}
