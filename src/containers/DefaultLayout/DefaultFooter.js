import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
	render() {
		// eslint-disable-next-line
    const { children } = this.props;

		return (
			<React.Fragment>
				<span className="ml-auto">
          Powered by <a href="http://shwetabavishi.com/">Shweta Bavishi</a>
				</span>
			</React.Fragment>
		);
	}
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
