const mutationsType = {
  UPDATE_MATCHES: 'UPDATE_MATCHES',
  UPDATE_TEAMS: 'UPDATE_TEAMS',
  UPDATE_STANDINGS: 'UPDATE_STANDINGS',
  UPDATE_SCORERS: 'UPDATE_SCORERS',
};

const mutations = {
  [mutationsType.UPDATE_MATCHES](state, newMatches) {
    state.matches = newMatches.payload;
  },
  [mutationsType.UPDATE_TEAMS](state, newTeams) {
    state.teams = newTeams.payload;
  },
  [mutationsType.UPDATE_STANDINGS](state, newStandings) {
    state.standings = newStandings.payload;
  },
  [mutationsType.UPDATE_SCORERS](state, newScorers) {
    state.scorers = newScorers.payload;
  },
};

export { mutationsType, mutations };
