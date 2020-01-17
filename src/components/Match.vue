<template>
  <v-card>
    <v-row :dense="true">
      <v-col cols="9">
        <v-row :dense="true">
          <v-col cols="2">
            <v-img
              :src="homeTeam.crestUrl"
              width="30"
              height="30"
              :contain="true"
            />
          </v-col>
          <v-col cols="9">
              {{ homeTeam.name }}
          </v-col>
          <v-col cols="1">
            {{ match.score.fullTime.homeTeam }}
          </v-col>
        </v-row>
        <v-row :dense="true">
          <v-col cols="2">
            <v-img
              :src="awayTeam.crestUrl"
              width="30"
              height="30"
              :contain="true"
            />
          </v-col>
          <v-col cols="9">
            {{ awayTeam.name }}
          </v-col>
          <v-col cols="1">
            {{ match.score.fullTime.awayTeam }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: "Match",
    props: ['match'],
    computed: {
      homeTeam() {
        return this.$store.getters.teamById(this.match.homeTeam.id);
      },
      awayTeam() {
        return this.$store.getters.teamById(this.match.awayTeam.id);
      }
    }
  }
</script>

<style scoped>

</style>