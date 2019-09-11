import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withProps } from "recompose";

import Analytics from "Wedgekit/statics/Analytics";
import ConnectivityIcons from "Wedgekit/components/ConnectivityIcons";
import HeaderTitleDumpHandler from "Wedgekit/components/HeaderTitleDumpHandler";

import asdf from "./asdf";

class asdfWrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerBackTitle: " ",
    headerRight: <ConnectivityIcons />,
    headerTitle: withProps({ navigation })(HeaderTitleDumpHandler)
  });

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    Analytics.screenHit("asdf");
  }

  render() {
    return <asdf />;
  }
}

asdfWrapper.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(asdfWrapper);
