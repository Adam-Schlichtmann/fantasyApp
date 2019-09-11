import React, { useStyles } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import PropTypes from "prop-types";

import PlayersStyles from "./Players.styles";

const Players = props => {
  return (
    <View style={PlayersStyles.pageContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: 10
        }}
      >
        <Text style={{ margin: 10 }}>Enter Player:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            flex: 1,
            margin: 10,
            padding: 5
          }}
          onChangeText={text => props.filterPlayers(text)}
          value={props.searchText}
          placeholder={"Enter Player"}
        ></TextInput>
      </View>
      <View>
        {props.players.map(player => (
          <View>
            <Text>{player.player.fullName}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

Players.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  filterPlayers: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  allPlayers: PropTypes.arrayOf(PropTypes.object).isRequired
};

Players.defaultProps = {
  style: null
};

export default Players;
