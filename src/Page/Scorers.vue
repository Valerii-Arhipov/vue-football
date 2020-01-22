<template>
  <v-simple-table>
    <thead>
      <th>team</th>
      <th>name</th>
      <th>number of Goal</th>
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
        <td>{{ player.numberOfGoals }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
  import { mapGetters } from 'vuex';

  import { actionsType } from "@/store/actions";

  export default {
    name: "Scorers",
    computed: {
      ...mapGetters([
        'scorers',
        'teamById'
      ]),
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

</style>