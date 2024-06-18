import React, { Component, PropTypes } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class CommonLayOut extends Component {
  constructor(props) {
    super(props);
  }
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
