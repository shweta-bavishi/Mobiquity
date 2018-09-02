import React, { Component } from "react";
import PropTypes from "prop-types";

import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/img/brand/logo1.png";
import sygnet from "../../assets/img/brand/logo1.png";

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
	render() {
		// eslint-disable-next-line
    const { children } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<AppNavbarBrand
					full={{ src: logo, height: 50 }}
					minimized={{ src: sygnet, height: 30 }}
				/>
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
