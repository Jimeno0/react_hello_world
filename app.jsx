import React from 'react';
import ReactDOM from 'react-dom';
// import Message from './components/message-example1';
// import Link from './components/link';
import Todo from './components/todo';

// class App extends React.Component {
// 	render(){

// 		const url = 'http://jimeno0.github.io/';

// 		return(
// 			<div>
// 				<Message />
// 				<nav>
// 					<Link url={url} caption="My site" color="red"/>
// 					<Link url="https://www.github.com/jimeno0" caption="Github" color="green"/>
// 				</nav>
// 			</div>

// 		);
// 	}
// }
// ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<Todo />, document.getElementById('container'));

