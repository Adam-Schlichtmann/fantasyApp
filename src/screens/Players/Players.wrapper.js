import React, { Component } from "react";
import PropTypes from "prop-types";

import Players from "./Players";

class PlayersWrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerBackTitle: " ",
    headerRight: "",
    headerTitle: "Players"
  });

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Players />;
  }
}

PlayersWrapper.propTypes = {};

const mapStateToProps = state => ({});

export default PlayersWrapper;
