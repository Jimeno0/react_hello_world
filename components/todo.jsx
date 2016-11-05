import React from 'react';
// import Task from './task';
import Task from './task-def-props';

class Todo extends React.Component {
	render(){
		return(
			<ul>
				<Task caption="Introduction" done/>
				<Task caption="chapter-1"/>
				<Task caption="Chapter-2" done={false}/>
			</ul>
		);	
	}
}

export default Todo;