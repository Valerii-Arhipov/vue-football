const getters = {
  matchdayMatches: state => {
    return (state.matches.matches || [])
      .reduce((acc, item) => {
        (acc[item.matchday - 1] || (acc[item.matchday - 1] = [])).push(item);
        return acc;
      }, []);
  },
  teamById: state => id => (state.teams.teams || []).find(item => item.id === id),
  currentMatchday: state => {
    return state.matches.matches && state.matches.matches[0].season.currentMatchday;
  },
};

export default getters;
