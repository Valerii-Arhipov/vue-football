import axios from 'axios'

import { mutationsType } from "@/store/mutations";

const actionsType = {
  GET_MATCHES: 'GET_MATCHES',
  GET_TEAMS: 'GET_TEAMS',
  GET_STANDINGS: 'GET_STANDINGS',
  GET_SCORERS: 'GET_SCORERS',
};

const headers = { 'X-Auth-Token': 'b35ef81a719b48359041d148ec8f37c1' };

const actions = {
  [actionsType.GET_MATCHES](context) {
    axios.get('https://api.football-data.org/v2/competitions/PL/matches', { headers })
      .then(response => {
        context.commit({
          type: mutationsType.UPDATE_MATCHES,
          payload: response.data,
        });
    });
  },
  [actionsType.GET_TEAMS](context) {
    axios.get('https://api.football-data.org/v2/competitions/PL/teams', { headers })
      .then(response => {
        context.commit({
          type: mutationsType.UPDATE_TEAMS,
          payload: response.data,
        });
      });
  },
  [actionsType.GET_STANDINGS](context) {
    axios.get('https://api.football-data.org/v2/competitions/PL/standings', { headers })
      .then(response => {
        context.commit({
          type: mutationsType.UPDATE_STANDINGS,
          payload: response.data,
        });
      });
  },
  [actionsType.GET_SCORERS](context) {
    axios.get('https://api.football-data.org/v2/competitions/PL/scorers?limit=20', { headers })
      .then(response => {
        context.commit({
          type: mutationsType.UPDATE_SCORERS,
          payload: response.data,
        });
      });
  },
};

export { actionsType, actions };
