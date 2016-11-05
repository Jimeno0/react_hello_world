import React from 'react';

class Link extends React.Component {

	handleClick = (event) => {
		event.preventDefault();
		alert("you clicked me!")
	}
	render(){
		return(
			<a href={this.props.url} className={this.props.color} onClick={this.handleClick}><label>{this.props.caption}</label></a>
		);
	}
}
export default Link;