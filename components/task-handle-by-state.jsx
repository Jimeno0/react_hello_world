import React from 'react';

class Task extends React.Component {

	state = {
		checkbox: this.props.done
	}

	handleChangeChk = (event) => {
		this.setState({ checkbox: this.state.checkbox === false ? true : false })
	}
	
	render(){
		return(
			<li>
				<input type="checkbox" checked={this.state.checkbox} onChange={this.handleChangeChk} /> {this.props.caption}
			</li>
		);
	}
}

export default Task;