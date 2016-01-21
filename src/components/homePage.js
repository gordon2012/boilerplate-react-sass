'use strict';

var React = require('react');

var Home = React.createClass
({
	render: function()
	{
		return (
			<div className="main">
				<h1>React and Sass Boilerplate</h1>
				<p>A template for FreeCodeCamp Data Visualization projects using React and Sass.</p>
			</div>
		);
	}
});

module.exports = Home;
