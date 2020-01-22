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
    <v-card>
      <v-list color="#eeeeee">
        <v-list-item class="CL">
          <div class="square"></div>
          Champions League (group stage)
        </v-list-item>
        <v-list-item class="EL">
          <div class="square"></div>
          Europa League (group stage)
        </v-list-item>
        <v-list-item class="knockout">
          <div class="square"></div>
          knockout
        </v-list-item>
      </v-list>
    </v-card>
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
  tr > td:nth-child(n + 4),
  th:nth-child(n + 4) {
    text-align: center;
  }

  tr:not(:nth-child(n + 5)) > :first-child {
    border-left: #001bff solid;
  }

  tr:nth-child(5) > :first-child {
    border-left: #ff7d00 solid;
  }

  tr:nth-child(n + 18) > :first-child {
    border-left: #ff1b00 solid;
  }

  .square {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 5px;
  }

  .CL > .square {
    background: #001bff;
  }

  .EL > .square {
    background: #ff7d00;
  }

  .knockout > .square {
    background: #ff1b00;
  }
</style>