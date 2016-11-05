import React from 'react';

class Task extends React.Component {

	static propTypes = {
		caption: React.PropTypes.string.isRequired,
		done: React.PropTypes.bool
	};

	static defaultProps = {
		done: true
	}

	state = {
		updated: false
	}

	handleClick = (evt) => {
		this.setState({updated: this.state.updated ? false : true})
	}

	render(){
		return (
			<li checked={this.props.done? 'checked' : false } onClick={this.handleClick}>
				{this.props.caption}
				{this.state.updated ? <small> Loading...</small> : false}
			</li>
		);
	}
}

export default Task;