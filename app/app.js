var React = require('react');
var ReactDOM = require('react-dom');

var App = (props) => {
	return React.createElement('html', null,
		React.createElement('head'),
		React.createElement('body', null,
			React.createElement('div', null, 'swiggity swooty')));
};

if (typeof window !== 'undefined') {
  ReactDOM.render(React.createElement(App, null), document);
} else {
  module.exports = App;
}