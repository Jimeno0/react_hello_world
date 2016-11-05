import React from 'react';

class Counter extends React.Component {

	state = {
		count: this.props.initial
	};

	handleClick = (val) => {
		this.setState({count: this.state.count +1});
	};

	render(){
		return(
			<h1 onClick={this.handleClick}>{this.state.count}</h1>
		);
	}
};

export default Counter;