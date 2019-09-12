import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayerInfo from "./PlayerInfo";

class PlayerInfoWrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerBackTitle: " ",
    headerRight: "",
    headerTitle: "Player Info"
  });

  static propTypes = {};

  constructor(props) {
    super(props);

    const player = this.props.navigation.getParam("player");

    this.state = { player: player };
  }

  render() {
    return <PlayerInfo player={this.state.player} />;
  }
}

PlayerInfoWrapper.propTypes = { player: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default PlayerInfoWrapper;
