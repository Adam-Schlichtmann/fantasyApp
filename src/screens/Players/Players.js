import React, { useStyles } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import PlayersStyles from "./Players.styles";

const Players = props => {
  return <View style={PlayersStyles.pageContainer}></View>;
};

Players.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

Players.defaultProps = {
  style: null
};

export default Players;
