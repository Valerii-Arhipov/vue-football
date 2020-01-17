const mutationsType = {
  UPDATE_MATCHES: 'UPDATE_MATCHES',
  UPDATE_TEAMS: 'UPDATE_TEAMS',
};

const mutations = {
  [mutationsType.UPDATE_MATCHES](state, newMatches) {
    state.matches = newMatches.payload;
  },
  [mutationsType.UPDATE_TEAMS](state, newTeams) {
    state.teams = newTeams.payload;
  }
};

export { mutationsType, mutations };

//test ssh

