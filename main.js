import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss'

render();

if (module.hot) {
	module.hot.accept('./components/App/App.js', () => {
		render();
	});
}

function render() {
	const App = require('./components/App/App.js').default;
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
}