<template>
  <div>
    <v-simple-table>
      <thead>
        <th/>
        <th/>
        <th>name</th>
        <th>played games</th>
        <th>won</th>
        <th>draw</th>
        <th>lost</th>
        <th>points</th>
        <th>goals for</th>
        <th>goals against</th>
        <th>goal difference</th>
      </thead>
      <tbody>
        <tr v-for="team in teamStandings" :key="team.team.id">
          <td>{{ team.position }}</td>
          <td>
            <v-img
              :src="team.team.crestUrl"
              width="30"
              height="30"
              :contain="true"
            />
          </td>
          <td>{{ team.team.name }}</td>
          <td>{{ team.playedGames }}</td>
          <td>{{ team.won }}</td>
          <td>{{ team.draw }}</td>
          <td>{{ team.lost }}</td>
          <td>{{ team.points }}</td>
          <td>{{ team.goalsFor }}</td>
          <td>{{ team.goalsAgainst }}</td>
          <td>{{ team.goalDifference }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import { actionsType } from "@/store/actions";

  export default {
    name: "Standings",
    mounted() {
      this.$store.dispatch(
        {
          type: actionsType.GET_STANDINGS,
        }
      );
    },
    computed: {
      ...mapGetters(['teamStandings']),
    },
  }
</script>

<style scoped>

</style>