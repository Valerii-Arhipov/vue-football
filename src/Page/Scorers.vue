<template>
  <Spiner v-if="loading"/>
  <v-simple-table v-else>
    <thead>
      <th>team</th>
      <th>name</th>
      <th class="number-of-goal">number of Goal</th>
    </thead>
    <tbody>
      <tr v-for="player in scorers" :key="player.player.id">
        <td>
          <v-row :dense="true">
            <v-col cols="3">
              <v-img
                :src="teamById(player.team.id).crestUrl"
                width="30"
                height="30"
                :contain="true"
              />
            </v-col>
            <v-col cols="9">
              <span>{{ teamById(player.team.id).name }}</span>
            </v-col>
          </v-row>
        </td>
        <td>{{ player.player.name }} {{ player.player.shirtNumber }}</td>
        <td class="number-of-goal">{{ player.numberOfGoals }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';

  import { actionsType } from "@/store/actions";
  import Spiner from "@/components/Spiner";

  export default {
    name: "Scorers",
    components: {
      Spiner
    },
    computed: {
      ...mapGetters([
        'scorers',
        'teamById'
      ]),
      ...mapState({
        loading: state => state.loading.scorers,
      }),
    },
    mounted() {
      this.$store.dispatch(
        {
          type: actionsType.GET_SCORERS,
        }
      );
    },
  }
</script>

<style scoped>
  .number-of-goal {
    text-align: center !important;
  }
</style>