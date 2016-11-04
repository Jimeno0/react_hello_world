import React from 'react';

class Task extends React.Component {

	static propTypes = {
		caption: React.PropTypes.string,
		done: React.PropTypes.bool
	};

	static defaultProps = {
		caption: 'Unknow name',
		done: true
	}



	render(){
		return (
			<li>
				<input type="checkbox" checked={this.props.done}/>{this.props.caption}!!!!!
			</li>
		);
	}
}

export default Task;