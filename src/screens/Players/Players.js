import React, { useStyles } from "react";
import { View, Text, TextInput, FlatList, ScrollView } from "react-native";
import PropTypes from "prop-types";
import debounce from "lodash";

import ListItem from "./ListItem";

import PlayersStyles from "./Players.styles";

const Players = props => {
  // console.log(
  //   props.players.find(player => player.player.fullName === "Adam Vinatieri")
  // );

  return (
    <ScrollView style={PlayersStyles.pageContainer}>
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
          onChangeText={text => debounce(props.filterPlayers(text), 400)}
          value={props.searchText}
          placeholder={"Enter Player"}
        ></TextInput>
      </View>
      <View>
        {props.players.length > 0 ? (
          props.players.map(player => (
            <ListItem
              player={player}
              goToPlayerInfo={() =>
                props.goToPlayerInfo(player.player.fullName)
              }
            />
          ))
        ) : (
          <View>
            <Text>No Players</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

Players.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  filterPlayers: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  allPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
  goToPlayerInfo: PropTypes.func.isRequired
};

Players.defaultProps = {
  style: null
};

export default Players;
