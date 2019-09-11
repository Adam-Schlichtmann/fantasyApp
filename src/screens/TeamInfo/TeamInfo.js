import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import TeamInfoStyles from "./TeamInfo.styles";

const TeamInfo = props => {
  // Object.keys(props.data).forEach(key => {
  //   if (key !== "roster") {
  //     console.log(key);
  //     console.log(props.data[key]);
  //   }
  // });

  return (
    <View>
      <Text>{props.data.name}</Text>
      {props.data.roster.map(player => (
        <View key={player.id}>
          <Text>
            {player.fullName} {player.injuryStatus}
          </Text>
        </View>
      ))}
    </View>
  );
};

TeamInfo.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  data: PropTypes.object.isRequired
};

TeamInfo.defaultProps = {
  style: null
};

export default TeamInfo;
