import axios from 'axios'

import { mutationsType } from "@/store/mutations";

const actionsType = {
  GET_MATCHES: 'GET_MATCHES',
  GET_TEAMS: 'GET_TEAMS',
};

const actions = {
  [actionsType.GET_MATCHES](context) {
    const headers = { 'X-Auth-Token': 'b35ef81a719b48359041d148ec8f37c1' };
    axios.get('https://api.football-data.org/v2/competitions/PL/matches', { headers })
      .then(response => {
        context.commit({
          type: mutationsType.UPDATE_MATCHES,
          payload: response.data,
        });
    })
  },
  [actionsType.GET_TEAMS](context) {
    const headers = { 'X-Auth-Token': 'b35ef81a719b48359041d148ec8f37c1' };
    axios.get('https://api.football-data.org/v2/competitions/PL/teams', { headers })
      .then(response => {
        context.commit({
          type: mutationsType.UPDATE_TEAMS,
          payload: response.data,
        });
      })
  }
};

export { actionsType, actions };
