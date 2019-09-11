import React, { Component } from "react";
import { Client } from "espn-fantasy-football-api";
import PropTypes from "prop-types";

import Home from "./Home";

class HomeWrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerBackTitle: " ",
    headerRight: "",
    headerTitle: "Home"
  });

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selected: "",
      options: [
        { id: 286277, name: "Fargo", selected: true },
        { id: 1095903, name: "Dynasty", selected: false },
        { id: 1223209, name: "Dem Bois", selected: false }
      ],
      leagueID: 286277
    };
  }
  getData = () => {
    const s2 =
      "AEANKvL8zOeia%2FZT9HW32kIKY4gsh%2B4w08%2BlCtpRBiVCfNipvZL5tVtpEzmXwe9zV6DpEm8gNq8ecYETodcz4zyiOgxKz%2FGjMoawtHKcM3eqSwoN9z2UErSc4jMihAwQ632vPJIznjDZRedyWx%2B8UZB3gffPkiLDa1nep1Hk3alczSAwMZ63odbqtFwVXyyVwEQtigZt7CzxzXE8ErgJ2EPiSUwoE%2BQFF3%2B6Uh6pDSIjkb8lzbJjqdksi2mlL4%2BeNVqxltUjk575E5np0hLty9joU6%2BS2ygvON1sG6AaOrrsfQ%3D%3D";
    const SWID = "29C3AF40-B731-496E-BB0D-1E545011C530";
    const dynasty = this.state.leagueID;

    const myClient = new Client({ leagueId: dynasty });
    myClient.setCookies({
      espnS2: s2,
      SWID: SWID
    });

    myClient
      .getTeamsAtWeek({ seasonId: 2019, scoringPeriodId: 1 })
      .then(teams => {
        this.setState({ data: teams });
      });
  };

  componentDidMount() {
    this.getData();
  }

  setLeague = name => {
    const selected = this.state.options.filter(option => option.name === name);
    this.setState({ leagueID: selected[0].id }, () => this.getData());
  };

  setSelected = name => {
    const options = this.state.options;
    const selected = options.filter(option => option.name === name);
    this.setState({ selected: selected.name });
  };

  goToLeagueInfo = index => {
    const data = this.state.data.find(team => team.id === index);
    this.props.navigation.navigate("LeagueInfo", {
      data: data
    });
  };

  render() {
    return (
      <Home
        data={this.state.data}
        setSelected={this.setSelected}
        selected={this.state.selected}
        options={this.state.options}
        setLeague={this.setLeague}
        goToLeagueInfo={this.goToLeagueInfo}
      />
    );
  }
}

HomeWrapper.propTypes = {};

export default HomeWrapper;
