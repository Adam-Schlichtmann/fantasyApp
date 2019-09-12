import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import PlayerInfoStyles from "./PlayerInfo.styles";

const PlayerInfo = (player, props) => {
  console.log(props.player);
  const position = player.player.eligiblePositions[0];
  return (
    <View>
      <Text>{player.player.fullName}</Text>
      <Text>{position}</Text>
    </View>
  );
};

PlayerInfo.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  player: PropTypes.object.isRequired
};

PlayerInfo.defaultProps = {
  style: null
};

export default PlayerInfo;
