import React, { Component } from "react";
import PropTypes from "prop-types";

import TeamInfo from "./TeamInfo";

class TeamInfoWrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerBackTitle: " ",
    headerRight: "",
    headerTitle: "Team Info"
  });

  constructor(props) {
    super(props);

    const data = this.props.navigation.getParam("data");

    this.state = { data: data };
  }

  render() {
    return <TeamInfo data={this.state.data} />;
  }
}

TeamInfoWrapper.propTypes = {};

export default TeamInfoWrapper;
