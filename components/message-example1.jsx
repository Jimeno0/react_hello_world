import React from 'react';
import Hello from './hello-example1';

class Message extends React.Component {
	render(){
		return (
			<div>
				<h1>Hello world!!</h1>
				<Hello name='Carlos'/>
			</div>


		);
	}
}

export default Message;