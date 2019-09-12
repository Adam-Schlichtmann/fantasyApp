import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import shortid from "shortid";

const ListItem = props => {
  return (
    <TouchableOpacity
      key={shortid.generate()}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
      }}
      onPress={() => props.goToPlayerInfo()}
    >
      <Text>{props.player.player.fullName}</Text>
      <Text>{props.player.player.proTeamAbbreviation}</Text>
      <Text>{props.player.player.defaultPosition}</Text>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  player: PropTypes.object.isRequired
};

ListItem.defaultProps = {
  style: null
};

export default ListItem;
