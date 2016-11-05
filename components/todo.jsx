import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './tasks';
import Task from './task';

class Todo extends React.Component {

	render(){
		return(
			<Tasks>
				<Task caption="Introduction" done/>
				<Task caption="chapter-1"/>
				<Task caption="Chapter-2" done={false}/>
			</Tasks>
		);	
	}
}

export default Todo;