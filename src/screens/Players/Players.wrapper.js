import React, { Component } from "react";
import PropTypes from "prop-types";
import { Client } from "espn-fantasy-football-api";
import Players from "./Players";

class PlayersWrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerBackTitle: " ",
    headerRight: "",
    headerTitle: "Players"
  });

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      allPlayers: [],
      players: []
    };
  }

  componentDidMount() {
    const s2 =
      "AEANKvL8zOeia%2FZT9HW32kIKY4gsh%2B4w08%2BlCtpRBiVCfNipvZL5tVtpEzmXwe9zV6DpEm8gNq8ecYETodcz4zyiOgxKz%2FGjMoawtHKcM3eqSwoN9z2UErSc4jMihAwQ632vPJIznjDZRedyWx%2B8UZB3gffPkiLDa1nep1Hk3alczSAwMZ63odbqtFwVXyyVwEQtigZt7CzxzXE8ErgJ2EPiSUwoE%2BQFF3%2B6Uh6pDSIjkb8lzbJjqdksi2mlL4%2BeNVqxltUjk575E5np0hLty9joU6%2BS2ygvON1sG6AaOrrsfQ%3D%3D";
    const SWID = "29C3AF40-B731-496E-BB0D-1E545011C530";
    const dynasty = this.state.leagueID;

    const myClient = new Client({ leagueId: 286277 });
    myClient.setCookies({
      espnS2: s2,
      SWID: SWID
    });

    myClient
      .getTeamsAtWeek({ seasonId: 2019, scoringPeriodId: 1 })
      .then(team => {
        const players = [...this.state.players, ...team.roster];
        this.setState({ allPlayers: players });
      });
    myClient
      .getFreeAgents({ seasonId: 2019, scoringPeriodId: 1 })
      .then(player => {
        const players = [...this.state.players, ...player];
        this.setState({ allPlayers: players, players: players });
      });
  }

  filterPlayers = searchText => {
    console.log("run");
    this.setState({ searchText }, () => {
      if (this.state.searchText !== "") {
        const players = this.state.allPlayers;
        const searchResults = players.filter(player =>
          player.player.fullName
            .toUpperCase()
            .includes(this.state.searchText.toUpperCase())
        );
        this.setState({ players: searchResults });
      }
    });
  };

  onChangeText = text => this.setState({ searchText: text });

  goToPlayerInfo = name => {
    const player = this.state.players.find(
      player => player.player.fullName === name
    );
    this.props.navigation.navigate("PlayerInfo", { player: player });
  };

  render() {
    return (
      <Players
        filterPlayers={this.filterPlayers}
        searchText={this.state.searchText}
        players={this.state.players}
        allPlayers={this.state.allPlayers}
        goToPlayerInfo={this.goToPlayerInfo}
      />
    );
  }
}

PlayersWrapper.propTypes = {};

const mapStateToProps = state => ({});

export default PlayersWrapper;
