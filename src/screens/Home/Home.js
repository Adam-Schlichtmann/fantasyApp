import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../statics/colors";

import HomeStyles from "./Home.styles";

const Home = props => {
  const DATA = [...props.data];
  return (
    <View style={HomeStyles.pageContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: 10
        }}
      >
        {props.options.map(option => (
          <TouchableOpacity
            key={option.id}
            style={{
              height: 30,
              width: 100,
              borderWidth: 1,
              backgroundColor: Colors.blue,
              alignItems: "center"
            }}
            onPress={() => props.setLeague(option.name)}
          >
            <Text style={{ fontSize: 20, color: Colors.yellow }}>
              {option.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flex: 1, margin: 30, alignItems: "center" }}>
        {DATA.map(team => (
          <TouchableOpacity
            key={team.id}
            style={{
              width: 250,
              height: 30,
              borderWidth: 1,
              backgroundColor: Colors.blue,
              alignItems: "center",
              margin: 5
            }}
            onPress={() => props.goToLeagueInfo(team.id)}
          >
            <Text style={{ color: Colors.yellow }}>{team.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

Home.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  setLeague: PropTypes.func.isRequired,
  goToLeagueInfo: PropTypes.func.isRequired
};

Home.defaultProps = {
  style: null
};

export default Home;
