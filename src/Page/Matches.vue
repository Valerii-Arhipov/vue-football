<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(matches, index) in matchdayMatches" :key="`${index}`">
        <v-expansion-panel-header>{{ index + 1 }} matchday</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col
              xl="3"
              lg="4"
              md="6"
              sm="6"
              v-for="(match, index) in matches"
              :key="`${index}`"
            >
              <Match :match="match"/>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  import { actionsType } from "@/store/actions";
  import Match from "@/components/Match";

  export default {
    name: "Matches",
    components: {
      Match
    },
    mounted() {
      this.$store.dispatch(
        {
          type: actionsType.GET_MATCHES,
        }
      );
      this.$store.dispatch(
        {
          type: actionsType.GET_TEAMS,
        }
      );
    },
    computed: {
      matchdayMatches() {
        return this.$store.getters.matchdayMatches;
      },
    }
  }
</script>

<style scoped>

</style>