import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./screens/Home";
import Players from "./screens/Players";
import LeagueInfo from "./screens/TeamInfo";

const HomeStack = createStackNavigator({
  Home: Home,
  LeagueInfo: LeagueInfo
});

const PlayersStack = createStackNavigator({
  Players: Players
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Players: PlayersStack
});

export default createAppContainer(TabNavigator);
