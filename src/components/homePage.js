'use strict';

var React = require('react');
var Modal = require('./common/modal');

var Home = React.createClass
({
	getInitialState: function()
	{
		return {
			showModal: false
		};
	},

	toggleModal: function()
	{
		this.setState({showModal: !this.state.showModal});
	},

	render: function()
	{
		var node = this.state.showModal ?
		(
			<Modal handleClose={this.toggleModal} width="80%" minHeight="300px">
				<button onClick={this.toggleModal}>Close</button>
			</Modal>
		) : null;

		return (
			<div className="main">
				<h1>React and Sass Boilerplate</h1>
				<p>A template for FreeCodeCamp Data Visualization projects using React and Sass.</p>
				<button onClick={this.toggleModal}>Modal</button>
				{node}
			</div>
		);
	}
});

module.exports = Home;
