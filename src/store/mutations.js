const mutationsType = {
  UPDATE_MATCHES: 'UPDATE_MATCHES',
  UPDATE_TEAMS: 'UPDATE_TEAMS',
  UPDATE_STANDINGS: 'UPDATE_STANDINGS',
  UPDATE_SCORERS: 'UPDATE_SCORERS',
  ERROR: 'ERROR',
};

const mutations = {
  [mutationsType.UPDATE_MATCHES](state, newMatches) {
    state.matches = newMatches.payload;
    state.loading.matches = false;
  },
  [mutationsType.UPDATE_TEAMS](state, newTeams) {
    state.teams = newTeams.payload;
  },
  [mutationsType.UPDATE_STANDINGS](state, newStandings) {
    state.standings = newStandings.payload;
    state.loading.standings = false;
  },
  [mutationsType.UPDATE_SCORERS](state, newScorers) {
    state.scorers = newScorers.payload;
    state.loading.scorers = false;
  },
  [mutationsType.ERROR](state) {
    state.error = true;
  },
};

export { mutationsType, mutations };
