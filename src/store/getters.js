const getters = {
  matchdayMatches: state => {
    return (state.matches.matches || [])
      .reduce((acc, item) => {
        (acc[item.matchday - 1] || (acc[item.matchday - 1] = [])).push(item);
        return acc;
      }, []);
  },
  teamById: state => id => (state.teams.teams || []).find(item => item.id === id),
};

export default getters;
