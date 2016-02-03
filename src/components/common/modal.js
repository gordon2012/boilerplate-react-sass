'use strict';

// TODO: Try to make as self contained as possible with toggling done in house

var React = require('react');

var Modal = React.createClass
({
	propTypes: {
		minHeight: React.PropTypes.string.isRequired,
		width: React.PropTypes.string.isRequired,
		handleClose: React.PropTypes.func.isRequired
		// show: React.PropTypes.bool.isRequired
	},

	getInitialState: function()
	{
		return {
			show: false
		};
	},

	toggleVisibility: function()
	{
		this.setState({show: !this.state.show});
	},

	render: function()
	{
		var baseStyle = {
			position: 'fixed',
			width: '100%',
			height: '100%',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			background: 'rgba(0, 0, 0, 0.7)',
			transition: 'all 0.5s',
			visibility: 'visible', // G
			opacity: '1'
		};

		if(this.state.show)
		{
			baseStyle.visibility = 'visible';
			baseStyle.opacity = '1';
		}

		var popupStyle = {
			width: this.props.width,
			minHeight: this.props.minHeight,
			position: 'relative',
			background: '#fff',
			margin: '120px auto'
		};

		return (
			<div style={baseStyle}>
				<div style={popupStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Modal;
