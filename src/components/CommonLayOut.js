import React, { Component, PropTypes } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class CommonLayOut extends Component {
	constructor(props) {
		super(props);
	}

	// componentWillMount() {}

	// componentDidMount() {}

	// componentWillReceiveProps(nextProps) {}

	// shouldComponentUpdate(nextProps, nextState) {}

	// componentWillUpdate(nextProps, nextState) {}

	// componentDidUpdate(prevProps, prevState) {}

	// componentWillUnmount() {}

	render() {
		return (
			<div>
				<Header />
                <Menu />
                {this.props.body}
                <Footer />
			</div>
		);
	}
}

CommonLayOut.propTypes = {};

export default CommonLayOut;
