import React from 'react';
import Task from './task';

class Todo extends React.Component {
	render(){
		return(
			<ul>
				<Task caption="Introduction" done/>
				<Task caption="Chapter-1" done/>
				<Task caption="Chapter-2" done={false}/>
			</ul>
		);	
	}
}

export default Todo;